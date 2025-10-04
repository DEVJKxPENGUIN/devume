package com.penguin.framework.annotation

import com.penguin.domain.oidc.Role

@Target(AnnotationTarget.FUNCTION)
@Retention(AnnotationRetention.RUNTIME)
annotation class DevumeUser(
    val min: Role,
    val redirectLoginPage: Boolean = false
)
