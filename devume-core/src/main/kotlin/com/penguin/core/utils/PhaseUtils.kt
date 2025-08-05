package com.penguin.core.utils

import com.penguin.core.framework.constants.Phase

object PhaseUtils {
    lateinit var activeProfiles: Array<String>
        private set

    fun initialize(profiles: Array<String>) {
        // 이미 초기화되었다면 다시 설정하지 않음
        if (this::activeProfiles.isInitialized) {
            return
        }
        this.activeProfiles = profiles
    }

    fun getPhase(): Phase {
        if (!this::activeProfiles.isInitialized) {
            throw IllegalStateException("PhaseUtils has not been initialized yet.")
        }

        if (this.activeProfiles.contains("local")) {
            return Phase.LOCAL
        } else if (this.activeProfiles.contains("prod")) {
            return Phase.PROD
        }
        throw IllegalStateException("unknown phase")
    }

    fun isLocal(): Boolean = getPhase() == Phase.LOCAL
    fun isProd(): Boolean = getPhase() == Phase.PROD
}