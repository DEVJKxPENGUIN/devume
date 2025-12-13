package com.penguin.db.repository

import com.penguin.db.entity.Post
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface PostRepository : CrudRepository<Post, Long> {
}