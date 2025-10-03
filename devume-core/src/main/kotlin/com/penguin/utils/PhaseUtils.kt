package com.penguin.utils

import com.penguin.framework.custom.ApplicationContextProvider

class PhaseUtils {

    companion object {
        fun isLocal(): Boolean {
            return getActiveProfile() == "local"
        }

        fun isProd(): Boolean {
            return getActiveProfile() == "prod"
        }

        fun getActiveProfile(): String {
            val env = ApplicationContextProvider.getApplicationContext()?.environment
            return env?.activeProfiles?.get(0) ?: ""
        }
    }
}