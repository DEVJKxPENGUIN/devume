package com.penguin.service

import com.penguin.api.*
import com.penguin.db.repository.PostRepository
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService

@GrpcService
class BlogService(
    private val postRepository: PostRepository
) : BlogGrpcKt.BlogCoroutineImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override suspend fun getBlogs(request: BlogRequest): BlogResponse {
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

        return BlogResponse.newBuilder()
            .addAllBlogs(mockBlogs)
            .build()
    }

    override suspend fun preparePost(request: PreparePostRequest): PreparePostResponse {
        log.info("Received request [preparePost]: $request")


        val postId: Long = request.postId

        postRepository.findById(postId)
        // todo
        return PreparePostResponse.newBuilder()
            .build()
    }
}