package com.penguin.utils

class HostUtils {

    companion object {
        fun authCallback(): String {
            return if (PhaseUtils.isLocal()) {
                "http://localhost:3000/api/auth/callback"
            } else {
                "https://devume.ink/api/auth/callback"
            }
        }

        fun devume(): String {
            return if (PhaseUtils.isLocal()) {
                "http://localhost:3000"
            } else {
                "https://devume.ink"
            }
        }

        fun penguin(): String {
            return if (PhaseUtils.isLocal()) {
                "http://localhost:8081"
            } else {
                "https://penguintribe.net"
            }
        }

        fun penguinAuth(phase: String = ""): String {
            if (phase.isNotEmpty()) {
                return if ("local" == phase) {
                    "http://localhost:8082"
                } else {
                    "https://auth.penguintribe.net"
                }
            }

            return if (PhaseUtils.isLocal()) {
                "http://localhost:8082"
            } else {
                "https://auth.penguintribe.net"
            }
        }
    }

}