package com.penguin.db.entity

import com.penguin.framework.common.BaseEntity
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import org.springframework.data.annotation.Transient
import java.io.Serializable

@Table(name = "post")
class Post(
    @Id
    @Column("id")
    val id: Long = 0,

    @Column("user_id")
    val userId: Long,

    @Column("title")
    var title: String,

    @Column("content")
    var content: String,

    @Column("thumbnail")
    var thumbnail: String,

    @Column("views")
    var views: Long = 0,

    @Column("thumbs")
    var thumbs: Long = 0,

    @Transient
    var user: User? = null,
) : BaseEntity(), Serializable {

}