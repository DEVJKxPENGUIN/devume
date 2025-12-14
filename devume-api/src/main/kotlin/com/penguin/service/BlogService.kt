package com.penguin.service

import com.penguin.api.*
import com.penguin.db.entity.Post
import com.penguin.db.repository.PostRepository
import com.penguin.domain.oidc.Role
import com.penguin.framework.annotation.DevumeUser
import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import com.penguin.utils.ContextUtils
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
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


    @DevumeUser(Role.NORMAL, true)
    override suspend fun preparePost(request: PreparePostRequest): PreparePostResponse {
        log.info("Received request [preparePost]: $request")

        val authUser = ContextUtils.currentUser()

        if (!request.hasPostId()) {
            return PreparePostResponse.newBuilder()
                .setTitle("")
                .setContent("")
                .build()
        }

        val postId = request.postId
        val post: Post = withContext(Dispatchers.IO) {
            val post = postRepository.findById(postId)
                .orElseThrow {
                    BaseException(ErrorCode.RESOURCE_NOT_FOUND, "포스트가 없습니다.")
                }

            if (post.id != authUser.id) {
                throw BaseException(ErrorCode.NO_AUTHORIZED_ROLE, "권한이 없습니다.")
            }

            return@withContext post
        }

        return PreparePostResponse.newBuilder()
            .setTitle(post.title)
            .setContent(post.content)
            .build()
    }
}