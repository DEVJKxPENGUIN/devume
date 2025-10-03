package com.penguin.framework.common

import org.springframework.data.relational.core.mapping.Column
import java.time.LocalDateTime

abstract class BaseEntity(
    @Column("created_at")
    var createdAt: LocalDateTime? = LocalDateTime.now(),

    @Column("updated_at")
    var updatedAt: LocalDateTime? = LocalDateTime.now()
)