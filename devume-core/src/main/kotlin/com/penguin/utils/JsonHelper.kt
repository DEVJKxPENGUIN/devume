package com.penguin.utils

import com.fasterxml.jackson.databind.ObjectMapper
import com.penguin.framework.custom.ApplicationContextProvider

class JsonHelper {

    companion object {

        private fun mapper(): ObjectMapper {
            return ApplicationContextProvider.getApplicationContext()
                ?.getBean(ObjectMapper::class.java)!!
        }

        fun toJson(obj: Any): String {
            return mapper().writeValueAsString(obj)
        }

        fun <T> fromJson(str: String, clazz: Class<T>): T {
            return mapper().readValue(str, clazz)
        }
    }

}