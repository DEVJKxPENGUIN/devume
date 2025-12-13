package com.penguin.service

import com.penguin.api.UserGrpcKt
import com.penguin.api.UserRequest
import com.penguin.api.UserResponse
import com.penguin.db.repository.UserRepository
import com.penguin.domain.oidc.Role
import com.penguin.framework.annotation.DevumeUser
import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import com.penguin.utils.ContextUtils
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class UserService(
    private val userRepository: UserRepository
) : UserGrpcKt.UserCoroutineImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    @DevumeUser(Role.GUEST, false)
    override suspend fun getUser(request: UserRequest): UserResponse {
        log.info("Received request [getUser]: $request")

        val authUser = ContextUtils.currentUser()

        val user = if (authUser.isGuest()) {
            // guest
            UserResponse.newBuilder()
                .setId(0)
                .setEmail("anonymous")
                .setNickname("anonymous")
                .setRole(Role.GUEST.toString())
                .build()
        } else {
            withContext(Dispatchers.IO) {
                return@withContext userRepository.findById(authUser.id)
                    .map {
                        UserResponse.newBuilder()
                            .setId(it.id)
                            .setEmail(it.email)
                            .setNickname(it.nickName)
                            .setRole(it.role)
                            .setLastLoginAt(it.lastLoginAt.toString())
                            .setCreatedAt(it.createdAt.toString())
                            .build()
                    }.orElseThrow {
                        BaseException(ErrorCode.UNAUTHORIZED, "유저 정보를 찾을 수 없습니다.")
                    }
            }

        }

        return user
    }
}