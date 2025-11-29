package com.penguin.service

import com.penguin.api.BlogContent
import com.penguin.api.BlogGrpc
import com.penguin.api.BlogRequest
import com.penguin.api.BlogResponse
import io.grpc.stub.StreamObserver
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class BlogService : BlogGrpc.BlogImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override fun getBlogs(
        request: BlogRequest,
        responseObserver: StreamObserver<BlogResponse>
    ) {
        log.info("Received request [getBlogs]: $request")

        // todo

        val mockBlogs = (1..request.count).map { i ->
            BlogContent.newBuilder()
                .setId(i.toString())
                .setTitle("Blog Title $i")
                .setSummary("This is a mock Blog summary for item $i.")
                .setAuthor("Author $i")
                .setThumbnail("https://picsum.photos/seed/tech/800/600")
                .setThumbs(999)
                .setViews(999)
                .build()
        }

        val res: BlogResponse = BlogResponse.newBuilder()
            .addAllBlogs(mockBlogs)
            .build()

        responseObserver.onNext(res)
        responseObserver.onCompleted()
    }
}