package com.penguin.utils

import io.jsonwebtoken.Jwts
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component
import java.security.KeyFactory
import java.security.interfaces.RSAPrivateKey
import java.security.spec.PKCS8EncodedKeySpec
import java.time.Instant
import java.time.temporal.ChronoUnit
import java.util.*

@Component
class JwtUtils(
    @Value("\${jwt-private-key}")
    private val privateKey: String,
    @Value("\${jwt-public-key}")
    private val publicKey: String,
) {

    companion object {
        const val KID = "devume-key-1"
        const val AUD = "devume"
        const val KTY = "RSA"
    }

    fun create(id: Long, email: String?, role: String, nickname: String): String {
        val privateKey = loadRsaPrivateKey()
        val now = Instant.now()
        return Jwts.builder()
            .subject(id.toString())
            .header()
            .add("kid", KID)
            .and()
            .claim("email", email)
            .claim("nickname", nickname)
            .claim("aud", AUD)
            .claim("iss", HostUtils.devume())
            .claim("role", role)
            .issuedAt(Date.from(now))
            .expiration(Date.from(now.plus(1, ChronoUnit.HOURS)))
            .signWith(privateKey)
            .compact()
    }

    fun loadRsaPrivateKey(): RSAPrivateKey {
        val key = privateKey
            .replace("-----BEGIN PRIVATE KEY-----", "")
            .replace("-----END PRIVATE KEY-----", "")
            .replace("\\s".toRegex(), "")
        val keyFactory = KeyFactory.getInstance(KTY)
        val keySpec = PKCS8EncodedKeySpec(Base64.getDecoder().decode(key))
        return keyFactory.generatePrivate(keySpec) as RSAPrivateKey
    }
}