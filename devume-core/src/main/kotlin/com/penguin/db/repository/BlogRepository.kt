package com.penguin.db.repository

import com.penguin.db.entity.Blog
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface BlogRepository : CrudRepository<Blog, Long> {

    @Query(
        """
            SELECT *
            FROM blog
            WHERE user_id = :userId
        """
    )
    fun findByUserId(userId: Long): Blog?

}