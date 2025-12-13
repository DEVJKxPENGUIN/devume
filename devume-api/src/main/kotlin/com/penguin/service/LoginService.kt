package com.penguin.service

import com.fasterxml.jackson.annotation.JsonProperty
import com.penguin.api.*
import com.penguin.db.entity.User
import com.penguin.db.repository.UserRepository
import com.penguin.domain.oidc.OidcProvider
import com.penguin.domain.oidc.Role
import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import com.penguin.utils.HostUtils
import com.penguin.utils.JsonUtils
import com.penguin.utils.JwtUtils
import io.jsonwebtoken.Jwts
import io.jsonwebtoken.security.JwkSet
import io.jsonwebtoken.security.Jwks
import jakarta.annotation.PostConstruct
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.reactor.awaitSingle
import kotlinx.coroutines.withContext
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.ApplicationContext
import org.springframework.grpc.server.service.GrpcService
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.web.reactive.function.client.WebClient
import reactor.core.publisher.Mono
import java.math.BigInteger
import java.security.KeyFactory
import java.security.PublicKey
import java.security.interfaces.RSAPublicKey
import java.security.spec.RSAPublicKeySpec
import java.util.*
import java.util.concurrent.TimeUnit

@GrpcService
class LoginService(
    @Value("\${penguin-client-id}")
    private val penguinClientId: String,
    @Value("\${penguin-client-secret}")
    private val penguinClientSecret: String,
    private val webClient: WebClient,
    private val userRepository: UserRepository,
    private val jwtUtils: JwtUtils,
    private val appContext: ApplicationContext
) : LoginGrpcKt.LoginCoroutineImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)
    private lateinit var PENGUIN_JWKS: JwkSet

    @PostConstruct
    @Scheduled(initialDelay = 1, fixedDelay = 1, timeUnit = TimeUnit.DAYS)
    fun cacheOauth2Jwks() {
        val phase = appContext.environment.activeProfiles[0]
        val jwks = webClient.get()
            .uri("${HostUtils.penguinAuth(phase)}/.well-known/jwks.json")
            .retrieve()
            .bodyToMono(String::class.java)
            .block()

        PENGUIN_JWKS = Jwks.setParser()
            .build()
            .parse(jwks)
    }

    override suspend fun login(request: LoginRequest): LoginResponse {
        log.info("Received request [login]: $request")

        // 여기서 blocking call 을 쏴도 지장 없는지 확인. - 지장 없다.

        return LoginResponse.newBuilder()
            .setLoginUrl("${HostUtils.penguin()}/oauth2/authorize?clientId=${penguinClientId}&redirectUri=${HostUtils.authCallback()}&state=${request.state}&scope=openid")
            .build()
    }

    override suspend fun penguinToken(request: TokenRequest): TokenResponse {
        log.info("Received request [penguinToken]: $request")

        val code = request.code
        val tokenResponse = webClient.post()
            .uri("${HostUtils.penguin()}/oauth2/token")
            .bodyValue(
                mapOf(
                    "client_id" to penguinClientId,
                    "client_secret" to penguinClientSecret,
                    "code" to code
                )
            )
            .retrieve()
            .onStatus({ it.isError }) { response ->
                response.bodyToMono(String::class.java)
                    .flatMap { errorBody ->
                        return@flatMap Mono.error(
                            BaseException(
                                ErrorCode.UNKNOWN,
                                "Failed to fetch token from Penguin: ${response.statusCode()} - $errorBody"
                            )
                        )
                    }
            }
            .bodyToMono(PenguinTokenResponse::class.java)
            .doOnError { error -> throw error }
            .awaitSingle()

        val idToken = tokenResponse.idToken
        val kid = this.parseKid(idToken)
        val key = PENGUIN_JWKS.getKeys().find { it.id == kid }
            ?: throw BaseException(ErrorCode.INTERNAL_SERVER)
        val publicKey = key.toKey() as RSAPublicKey

        val payload = Jwts.parser()
            .verifyWith(publicKey)
            .requireIssuer(HostUtils.penguin())
            .requireAudience(penguinClientId)
            .build()
            .parseSignedClaims(idToken)
            .payload

        val sub = payload.subject
        val email = payload["email"] as String
        val nickname = payload["nickname"] as String

        // 기존 유저 조회
        val user: User = withContext(Dispatchers.IO) {
            return@withContext userRepository.findByProviderId(OidcProvider.penguin.name, sub)
                ?: run {
                    // 신규 유저 생성
                    userRepository.save(
                        User(
                            provider = OidcProvider.penguin.name,
                            providerId = sub,
                            nickName = nickname,
                            email = email,
                            role = Role.NORMAL.name,
                            idToken = idToken
                        )
                    )
                }
        }

        // 6. 새로운 로그인 인증용 JWT 토큰을 생성하여 반환한다.
        val newToken = jwtUtils.create(user.id, user.email, user.role, user.nickName)
        return TokenResponse.newBuilder()
            .setToken(newToken)
            .build()
    }

    private fun parseKid(idToken: String): String {
        try {
            val header = String(Base64.getUrlDecoder().decode(idToken.substringBefore('.')))
            val headerMap: Map<String, Any> = JsonUtils.fromJson(header)
            return headerMap["kid"] as String
        } catch (e: Exception) {
            throw BaseException(ErrorCode.INTERNAL_SERVER, "failed to parse idToken")
        }
    }

    private fun createPublicKey(kid: String, jwksJson: String): PublicKey {
        try {
            val jwks: Map<String, List<Map<String, String>>> = JsonUtils.fromJson(jwksJson)
            val keyInfo = jwks["keys"]?.firstOrNull { it["kid"] == kid }
                ?: throw BaseException(
                    ErrorCode.INTERNAL_SERVER,
                    "failed to find key for kid: $kid"
                )

            val modules = BigInteger(1, Base64.getUrlDecoder().decode((keyInfo["n"])))
            val exponent = BigInteger(1, Base64.getUrlDecoder().decode(keyInfo["e"]))

            val spec = RSAPublicKeySpec(modules, exponent)
            val factory = KeyFactory.getInstance("RSA")
            return factory.generatePublic(spec)
        } catch (e: Exception) {
            throw BaseException(
                ErrorCode.INTERNAL_SERVER,
                "failed to create public key from jwks"
            )
        }
    }
}

data class PenguinTokenResponse(
    @JsonProperty("id_token")
    val idToken: String,
    @JsonProperty("token_type")
    val tokenType: String,
    @JsonProperty("expires_in")
    val expiresIn: Long,
    @JsonProperty("access_token")
    val accessToken: String
)