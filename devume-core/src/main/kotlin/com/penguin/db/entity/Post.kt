package com.penguin.db.entity

import com.penguin.framework.common.BaseEntity
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import java.io.Serializable

@Table(name = "post")
class Post(
    @Id
    @Column("id")
    val id: Long = 0,

    @Column("user_id")
    val userId: Long,

    @Column("title")
    val title: String,

    @Column("content")
    val content: String,

    @Column("views")
    val views: Long,

    @Column("thumbs")
    val thumbs: Long,
) : BaseEntity(), Serializable {


}