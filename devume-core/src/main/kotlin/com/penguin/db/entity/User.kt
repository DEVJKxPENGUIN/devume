package com.penguin.db.entity

import com.fasterxml.jackson.annotation.JsonIgnore
import com.penguin.domain.oidc.Role
import com.penguin.framework.common.BaseEntity
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import java.io.Serializable
import java.time.LocalDateTime

@Table(name = "user")
class User(
    @Id
    @Column("id")
    val id: Long = 0,

    @Column("provider")
    val provider: String,

    @Column("provider_id")
    val providerId: String,

    @Column("nickname")
    val nickName: String = "",

    @Column("email")
    val email: String? = "",

    @Column("role")
    var role: String,

    @Column("id_token")
    var idToken: String = "",

    @Column("last_login_at")
    var lastLoginAt: LocalDateTime = LocalDateTime.now()
) : BaseEntity(), Serializable {

    companion object {
        const val SESSION_TIME = 60L * 60L
    }

    @JsonIgnore
    fun isNotExpired(): Boolean {
        return lastLoginAt.plusSeconds(SESSION_TIME).isAfter(LocalDateTime.now())
    }

    fun renewSession() {
        lastLoginAt = LocalDateTime.now()
    }

    fun hasRole(role: Role): Boolean {
        return Role.valueOf(this.role).isHigherOrEqualThan(role)
    }
}