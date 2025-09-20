package com.penguin

import jakarta.annotation.PostConstruct
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import java.util.*

@SpringBootApplication
class ApiApplication

fun main(args: Array<String>) {
    runApplication<ApiApplication>(*args)
}

@PostConstruct
fun timezone() {
    TimeZone.setDefault(TimeZone.getTimeZone("UTC"))
}
