package com.penguin.utils

import com.penguin.domain.oidc.AuthUser
import io.grpc.Context

object ContextUtils {
    private val AUTHENTICATION_CONTEXT_KEY: Context.Key<AuthUser> =
        Context.key("authentication")

    fun setCurrentUser(authentication: AuthUser): Context {
        return Context.current().withValue(AUTHENTICATION_CONTEXT_KEY, authentication)
    }

    fun currentUser(): AuthUser {
        return AUTHENTICATION_CONTEXT_KEY.get()
    }
}
