package com.penguin.api.service

import com.penguin.api.HelloGrpc
import com.penguin.api.HelloRequest
import com.penguin.api.HelloResponse
import io.grpc.stub.StreamObserver
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class HelloService : HelloGrpc.HelloImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override fun sayHello(
        request: HelloRequest,
        responseObserver: StreamObserver<HelloResponse>
    ) {
        log.info("Received request [sayHello]: $request")

        if (request.name.startsWith("error")) {
            throw IllegalArgumentException("Bad name ${request.name}")
        }

        if (request.name.startsWith("internal")) {
            throw RuntimeException()
        }

        val res: HelloResponse = HelloResponse.newBuilder()
            .setMessage("Hello ==> ${request.name}")
            .build()

        responseObserver.onNext(res)
        responseObserver.onCompleted()
    }

    override fun streamHello(
        request: HelloRequest,
        responseObserver: StreamObserver<HelloResponse>
    ) {
        log.info("Received request [streamHello]: $request")
        var count = 0

        while (count < 10) {
            val res: HelloResponse = HelloResponse.newBuilder()
                .setMessage("Hello($count ==> ${request.name}")
                .build()

            responseObserver.onNext(res)

            try {
                Thread.sleep(1000)
            } catch (e: Exception) {
                Thread.currentThread().interrupt()
                responseObserver.onError(e)
                log.error("Error while sleeping", e)
            }
            count++
        }
        responseObserver.onCompleted()
    }
}