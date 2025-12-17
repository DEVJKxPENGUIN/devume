package com.penguin.db.repository

import com.penguin.db.entity.Post
import com.penguin.db.entity.User
import org.springframework.data.repository.CrudRepository
import org.springframework.jdbc.core.RowMapper
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate
import org.springframework.stereotype.Repository

@Repository
interface PostRepository : CrudRepository<Post, Long>, PostRepositoryCustom {

}

interface PostRepositoryCustom {
    fun findRecentBlogs(limit: Int): List<Post>
}

class PostRepositoryImpl(
    private val template: NamedParameterJdbcTemplate
) : PostRepositoryCustom {
    override fun findRecentBlogs(limit: Int): List<Post> {

        val sql = """
            SELECT
                p.*,
                u.id AS u_id,
                u.provider AS u_provider,
                u.provider_id AS u_provider_id,
                u.nickname AS u_nickname,
                u.email AS u_email,
                u.role AS u_role,
                u.id_token AS u_id_token,
                u.last_login_at AS u_last_login_at,
                u.created_at AS u_created_at,
                u.updated_at AS u_updated_at
            FROM post AS p
            INNER JOIN user AS u ON u.id=p.user_id
            WHERE 1=1
            ORDER BY p.id DESC
            LIMIT :limit
        """.trimIndent()

        val params = MapSqlParameterSource("limit", limit)

        return template.query(sql, params, RowMapper<Post> { rs, _ ->
            val post = Post(
                id = rs.getLong("id"),
                userId = rs.getLong("user_id"),
                title = rs.getString("title"),
                content = rs.getString("content"),
                thumbnail = rs.getString("thumbnail"),
                views = rs.getLong("views"),
                thumbs = rs.getLong("thumbs")
            )
            post.createdAt = rs.getTimestamp("created_at").toLocalDateTime()
            post.updatedAt = rs.getTimestamp("updated_at").toLocalDateTime()
            val user = User(
                id = rs.getLong("u_id"),
                provider = rs.getString("u_provider"),
                providerId = rs.getString("u_provider_id"),
                nickName = rs.getString("u_nickname"),
                email = rs.getString("u_email"),
                role = rs.getString("u_role"),
                idToken = rs.getString("u_id_token"),
                lastLoginAt = rs.getTimestamp("u_last_login_at").toLocalDateTime()
            )
            user.createdAt = rs.getTimestamp("u_created_at").toLocalDateTime()
            user.updatedAt = rs.getTimestamp("u_updated_at").toLocalDateTime()
            post.user = user
            return@RowMapper post
        })
    }


}