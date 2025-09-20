package com.penguin.utils

class UrlUtils {

    companion object {

        fun loginUrl(): String {
            return "${serverPenguin()}/user/login"
        }

        fun signupUrl(): String {
            return "${serverAuth()}/signup"
        }

        fun logoutUrl(): String {
            return "${serverAuth()}/logout"
        }

        fun redirectUrl(): String {
            return "${serverAuth()}/callback"
        }

        fun serverAuth(): String {
            return if (Profiles.isLocal()) {
                "http://localhost:8082"
            } else {
                "https://auth.penguintribe.net"
            }
        }

        fun serverPenguin(): String {
            return if (Profiles.isLocal()) {
                "http://localhost:8081"
            } else {
                "https://penguintribe.net"
            }
        }

    }

}