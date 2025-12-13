package com.penguin.service

import com.penguin.api.UserRequest
import com.penguin.db.entity.User
import com.penguin.db.repository.UserRepository
import com.penguin.domain.oidc.AuthUser
import com.penguin.domain.oidc.Role
import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import com.penguin.utils.ContextUtils
import kotlinx.coroutines.runBlocking
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Assertions.assertThrows
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.mockito.Mock
import org.mockito.Mockito.`when`
import org.mockito.junit.jupiter.MockitoExtension
import java.util.*

@ExtendWith(MockitoExtension::class)
class UserServiceTest {

    @Mock
    private lateinit var userRepository: UserRepository

    private lateinit var userService: UserService

    @BeforeEach
    fun setUp() {
        userService = UserService(userRepository)
    }

    @Test
    @DisplayName("GUEST 유저를 올바르게 반환한다.")
    fun correctGuestUser(): Unit = runBlocking {
        // given
        val guestUser = AuthUser.ofGuest()
        val context = ContextUtils.setCurrentUser(guestUser)
        val request = UserRequest.newBuilder().build()

        // when
        val response = context.call {
            runBlocking { userService.getUser(request) }
        }

        // then
        assertThat(response.id).isEqualTo(0)
        assertThat(response.email).isEqualTo("anonymous")
        assertThat(response.nickname).isEqualTo("anonymous")
        assertThat(response.role).isEqualTo("GUEST")
    }

    @Test
    @DisplayName("현재 세션의 유저에 대한 정보를 반환한다.")
    fun getCorrectCurrentUser(): Unit =
        runBlocking {
            // given
            val userId = 1L
            val authUser = AuthUser(userId, "test@example.com", Role.NORMAL, "tester")
            val context = ContextUtils.setCurrentUser(authUser)

            val userEntity = User(
                id = userId,
                provider = "test",
                providerId = "test",
                email = "test@example.com",
                nickName = "tester",
                role = "USER"
            )

            `when`(userRepository.findById(userId)).thenReturn(Optional.of(userEntity))

            val request = UserRequest.newBuilder().build()

            // when
            val response = context.call {
                runBlocking { userService.getUser(request) }
            }

            // then
            assertThat(response.id).isEqualTo(userId)
            assertThat(response.email).isEqualTo("test@example.com")
            assertThat(response.nickname).isEqualTo("tester")
            assertThat(response.role).isEqualTo("USER")
        }

    @Test
    @DisplayName("인증이 올바르게 되지 않은 유저는 예외를 반환한다.")
    fun throwIfInvalidUser(): Unit =
        runBlocking {
            // given
            val userId = 99L
            val authUser = AuthUser(userId, "unknown@example.com", Role.NORMAL, "unknown")
            val context = ContextUtils.setCurrentUser(authUser)

            `when`(userRepository.findById(userId)).thenReturn(Optional.empty())

            val request = UserRequest.newBuilder().build()

            // when & then
            val exception = assertThrows(BaseException::class.java) {
                context.call {
                    runBlocking { userService.getUser(request) }
                }
            }

            assertThat(exception.errorCode).isEqualTo(ErrorCode.UNAUTHORIZED)
        }
}
