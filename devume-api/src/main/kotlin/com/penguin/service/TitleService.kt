package com.penguin.service

import com.penguin.api.TitleGrpc
import com.penguin.api.TitleRequest
import com.penguin.api.TitleResponse
import com.penguin.utils.PhaseUtils
import io.grpc.stub.StreamObserver
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class TitleService : TitleGrpc.TitleImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override fun getTitle(
        request: TitleRequest,
        responseObserver: StreamObserver<TitleResponse>
    ) {
        log.info("Received request [getTitle]: $request")

        val phase: String = PhaseUtils.getActiveProfile()

        val title = if (PhaseUtils.isLocal()) {
            "local-Your next career starts $phase"
        } else if (PhaseUtils.isProd()) {
            "prod-Your next career starts $phase"
        } else {
            throw IllegalArgumentException("Unknown phase $phase")
        }

        val res: TitleResponse = TitleResponse.newBuilder()
            .setTitle(title)
            .build()

        responseObserver.onNext(res)
        responseObserver.onCompleted()
    }
}