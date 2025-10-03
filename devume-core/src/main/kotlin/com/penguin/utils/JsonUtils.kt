package com.penguin.utils

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue

class JsonUtils {

    companion object {
        fun toJson(obj: Any): String {
            return jacksonObjectMapper().writeValueAsString(obj)
        }

        fun <T> fromJson(str: String, clazz: Class<T>): T {
            return jacksonObjectMapper().readValue(str, clazz)
        }

        inline fun <reified T> fromJson(str: String): T {
            return jacksonObjectMapper().readValue(str)
        }
    }

}