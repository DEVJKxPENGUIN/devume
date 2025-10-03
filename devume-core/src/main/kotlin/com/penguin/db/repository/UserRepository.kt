package com.penguin.db.repository

import com.penguin.db.entity.User
import org.springframework.data.jdbc.repository.query.Query
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserRepository : CrudRepository<User, Long> {

    @Query(
        """
        SELECT *
        FROM user
        WHERE provider = :provider
        AND provider_id = :providerId
    """
    )
    fun findByProviderId(provider: String, providerId: String): User?
}