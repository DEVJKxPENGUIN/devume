package com.penguin.api

import com.penguin.core.utils.PhaseUtils
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ApiApplication

fun main(args: Array<String>) {
    val context = runApplication<ApiApplication>(*args)
    PhaseUtils.initialize(context.environment.activeProfiles)
}
