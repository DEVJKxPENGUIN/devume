package com.penguin.service

import com.penguin.api.PortfolioContent
import com.penguin.api.PortfolioGrpc
import com.penguin.api.PortfolioRequest
import com.penguin.api.PortfolioResponse
import io.grpc.stub.StreamObserver
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class PortfolioService : PortfolioGrpc.PortfolioImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override fun getPortfolios(
        request: PortfolioRequest,
        responseObserver: StreamObserver<PortfolioResponse>
    ) {
        log.info("Received request [getPortfolios]: $request")

        // todo

        val mockPortfolios = (1..request.count).map { i ->
            PortfolioContent.newBuilder()
                .setId(i.toString())
                .setTitle("Portfolio Title $i")
                .setDescription("This is a mock portfolio description for item $i.")
                .setAuthor("Author $i")
                .setSkills("Kotlin, gRPC, Spring Boot")
                .setJob("Backend Developer")
                .setLink("https://github.com/dev-jk")
                .setThumbnail("https://picsum.photos/seed/ai/800/600")
                .setThumbs(10000)
                .setViews(20000)
                .build()
        }

        val res: PortfolioResponse = PortfolioResponse.newBuilder()
            .addAllPortfolios(mockPortfolios)
            .build()

        responseObserver.onNext(res)
        responseObserver.onCompleted()
    }
}
