package com.penguin.service

import com.penguin.api.HelloGrpcKt
import com.penguin.api.HelloRequest
import com.penguin.api.HelloResponse
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class HelloService : HelloGrpcKt.HelloCoroutineImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override suspend fun sayHello(request: HelloRequest): HelloResponse {
        log.info("Received request [sayHello]: $request")

        if (request.name.startsWith("error")) {
            throw IllegalArgumentException("Bad name ${request.name}")
        }

        if (request.name.startsWith("internal")) {
            throw RuntimeException()
        }

        return HelloResponse.newBuilder()
            .setMessage("Hello : ${request.name}")
            .build()
    }
}