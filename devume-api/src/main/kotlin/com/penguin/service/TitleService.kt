package com.penguin.service

import com.penguin.api.TitleGrpcKt
import com.penguin.api.TitleRequest
import com.penguin.api.TitleResponse
import com.penguin.utils.PhaseUtils
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class TitleService : TitleGrpcKt.TitleCoroutineImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override suspend fun getTitle(request: TitleRequest): TitleResponse {
        log.info("Received request [getTitle]: $request")

        val phase: String = PhaseUtils.getActiveProfile()

        val title = if (PhaseUtils.isLocal()) {
            "[$phase]Your next career starts"
        } else if (PhaseUtils.isProd()) {
            "Your next career starts"
        } else {
            throw IllegalArgumentException("Unknown phase $phase")
        }

        return TitleResponse.newBuilder()
            .setTitle(title)
            .build()
    }
}