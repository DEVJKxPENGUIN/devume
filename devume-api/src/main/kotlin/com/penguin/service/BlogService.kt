package com.penguin.service

import com.penguin.api.*
import com.penguin.db.entity.Post
import com.penguin.db.repository.PostRepository
import com.penguin.db.repository.UserRepository
import com.penguin.domain.oidc.Role
import com.penguin.framework.annotation.DevumeUser
import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import com.penguin.utils.ContextUtils
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.slf4j.LoggerFactory
import org.springframework.grpc.server.service.GrpcService
import java.time.LocalDateTime

@GrpcService
class BlogService(
    private val postRepository: PostRepository,
    private val userRepository: UserRepository
) : BlogGrpcKt.BlogCoroutineImplBase() {
    private val log = LoggerFactory.getLogger(javaClass)

    override suspend fun getBlogs(request: BlogListRequest): BlogListResponse {
        log.info("Received request [getBlogs]: $request")

        val blogs = withContext(Dispatchers.IO) {
            postRepository.findRecentBlogs(request.count)
        }.map { blog ->
            BlogContent.newBuilder()
                .setId(blog.id.toString())
                .setTitle(blog.title)
                .setSummary(blog.content.substring(0, blog.content.length.coerceAtMost(200)))
                .setContents(blog.content)
                .setAuthor(blog.user?.nickName)
                .setThumbnail(blog.thumbnail)
                .setThumbs(blog.thumbs)
                .setViews(blog.views)
                .build()
        }

        return BlogListResponse.newBuilder()
            .addAllBlogs(blogs)
            .build()
    }

    override suspend fun getBlog(request: BlogRequest): BlogContent {
        log.info("Received request [getBlog]: $request")

        val blog = withContext(Dispatchers.IO) {
            postRepository.findById(request.postId)
                .orElseThrow {
                    BaseException(
                        ErrorCode.RESOURCE_NOT_FOUND,
                        "no post found with id ${request.postId}"
                    )
                }
        }

        val user = withContext(Dispatchers.IO) {
            userRepository.findById(blog.userId)
                .orElseThrow {
                    BaseException(ErrorCode.RESOURCE_NOT_FOUND, "no user with id ${blog.userId}")
                }
        }

        return BlogContent.newBuilder()
            .setId(blog.id.toString())
            .setTitle(blog.title)
            .setSummary(blog.content)
            .setAuthor(user.nickName)
            .setContents(blog.content)
            .setThumbnail(blog.thumbnail)
            .setThumbs(blog.thumbs)
            .setViews(blog.views)
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

    override suspend fun validate(request: ValidationRequest): ValidationResponse {
        try {
            if (request.title.isNullOrBlank()) {
                throw BaseException(ErrorCode.VALIDATION_ERROR, "title cannot be empty")
            }

            if (request.title.length > 200) {
                throw BaseException(
                    ErrorCode.VALIDATION_ERROR,
                    "title must be less than 200 characters"
                )
            }

            if (request.title.length < 4) {
                throw BaseException(
                    ErrorCode.VALIDATION_ERROR,
                    "title must be more than 4 characters"
                )
            }

            if (request.contents.isNullOrBlank()) {
                throw BaseException(ErrorCode.VALIDATION_ERROR, "content cannot be empty")
            }

            if (request.contents.length < 100) {
                throw BaseException(
                    ErrorCode.VALIDATION_ERROR,
                    "content must be more than 100 characters"
                )
            }

            return ValidationResponse
                .newBuilder()
                .setStatus(0)
                .setMessage("ok")
                .build()
        } catch (e: BaseException) {
            return ValidationResponse
                .newBuilder()
                .setStatus(-1)
                .setMessage(e.message)
                .build()
        }
    }

    @DevumeUser(Role.NORMAL, false)
    override suspend fun write(request: WriteRequest): WriteResponse {
        val validation = this.validate(
            ValidationRequest.newBuilder()
                .setTitle(request.title)
                .setContents(request.contents)
                .build()
        )

        if (validation.status != 0) {
            throw BaseException(ErrorCode.VALIDATION_ERROR, validation.message)
        }

        val authUser = ContextUtils.currentUser()
        if (request.hasPostId()) {
            // update
            val post: Post = withContext(Dispatchers.IO) {
                postRepository.findById(request.postId)
                    .orElseThrow {
                        BaseException(
                            ErrorCode.RESOURCE_NOT_FOUND,
                            "no post with id ${request.postId}"
                        )
                    }
            }

            if (authUser.id != post.userId) {
                throw BaseException(
                    ErrorCode.NO_AUTHORIZED_ROLE,
                    "you cannot rewrite post with id ${authUser.id}"
                )
            }

            post.title = request.title
            post.content = request.contents
            post.thumbnail = request.thumbnail
            post.updatedAt = LocalDateTime.now()

            val rewritePost = withContext(Dispatchers.IO) {
                postRepository.save(post)
            }

            return WriteResponse.newBuilder()
                .setPostId(rewritePost.id)
                .build()
        }

        // new write
        val post = Post(
            userId = authUser.id,
            title = request.title,
            content = request.contents,
            thumbnail = request.thumbnail
        )

        val createdPost = withContext(Dispatchers.IO) {
            postRepository.save(post)
        }

        log.info("Saved post: ${createdPost.id}")

        return WriteResponse.newBuilder()
            .setPostId(createdPost.id)
            .build()
    }
}