package com.penguin.framework.interceptor

import com.penguin.domain.oidc.AuthUser
import com.penguin.domain.oidc.Role
import com.penguin.framework.annotation.DevumeUser
import com.penguin.framework.custom.ExceptionHandler.Companion.ERROR_CODE
import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import com.penguin.utils.ContextUtils
import com.penguin.utils.JwtUtils
import io.grpc.*
import org.slf4j.LoggerFactory
import org.springframework.context.ApplicationContext
import org.springframework.grpc.server.GlobalServerInterceptor
import org.springframework.stereotype.Component
import kotlin.reflect.full.functions
import kotlin.reflect.jvm.javaMethod

@Component
@GlobalServerInterceptor
class AuthenticationInterceptor(
    private val applicationContext: ApplicationContext,
    private val jwtUtils: JwtUtils
) : ServerInterceptor {
    private val log = LoggerFactory.getLogger(javaClass)

    companion object {
        val AUTHORIZATION_HEADER: Metadata.Key<String> =
            Metadata.Key.of("Authorization", Metadata.ASCII_STRING_MARSHALLER)
    }

    override fun <ReqT : Any?, RespT : Any?> interceptCall(
        serverCall: ServerCall<ReqT, RespT>,
        metadata: Metadata?,
        serverCallHandler: ServerCallHandler<ReqT, RespT>
    ): ServerCall.Listener<ReqT> {
        log.info("Received request [${serverCall.methodDescriptor.fullMethodName}]")

        var user = AuthUser.ofGuest()

        try {
            val annotation = this.getAnnotation(serverCall)
                ?: return serverCallHandler.startCall(serverCall, metadata)
            val idToken = this.getAuthorizationHeader(metadata)

            if (!idToken.isNullOrBlank()) {
                val claims = jwtUtils.getClaimsWithVerify(idToken)
                claims?.let {
                    val id = it.subject.toLong()
                    val email = it["email"] as String
                    val role = it["role"] as String
                    val nickname = it["nickname"] as String
                    user = AuthUser(id, email, Role.valueOf(role), nickname)
                }
            }

            if (!user.hasRole(annotation.min)) {
                if (annotation.redirectLoginPage && user.isGuest()) {
                    throw BaseException(
                        ErrorCode.NO_AUTHORIZED_ROLE_REDIRECT,
                        "접근권한이 없습니다. 로그인 해주세요."
                    )
                }
                throw BaseException(
                    ErrorCode.NO_AUTHORIZED_ROLE,
                    "접근권한이 없습니다 : ${annotation.min.name}"
                )
            }

        } catch (e: BaseException) {
            val metadata = Metadata()
            metadata.put(ERROR_CODE, e.errorCode.value.toString())
            serverCall.close(
                e.errorCode.grpcStatus,
                metadata
            )
        }

        val context = ContextUtils.setCurrentUser(user)
        return Contexts.interceptCall(context, serverCall, metadata, serverCallHandler)
    }


    private fun <ReqT : Any?, RespT : Any?> getAnnotation(serverCall: ServerCall<ReqT, RespT>): DevumeUser? {
        val (serviceName, methodName) = this.parseFullMethodName(serverCall.methodDescriptor.fullMethodName)
        val beanName = serviceName.replaceFirstChar { it.lowercase() }
        val serviceBean = applicationContext.getBean(beanName)
        val targetMethodName = methodName.replaceFirstChar { it.lowercase() }
        return serviceBean::class.functions.find {
            it.name == targetMethodName
        }?.javaMethod?.getAnnotation(DevumeUser::class.java)
    }

    private fun parseFullMethodName(fullMethodName: String): Pair<String, String> {
        val parts = fullMethodName.split("/")
        if (parts.size != 2) {
            throw BaseException(
                ErrorCode.INTERNAL_SERVER,
                "Invalid full method name: $fullMethodName"
            )
        }
        val serviceName = parts[0].substringAfterLast('.')
        return Pair("${serviceName}Service", parts[1])
    }

    private fun getAuthorizationHeader(metadata: Metadata?): String? {
        return metadata?.let {
            return it.get(AUTHORIZATION_HEADER)?.replace("Bearer ", "")
        }
    }
}