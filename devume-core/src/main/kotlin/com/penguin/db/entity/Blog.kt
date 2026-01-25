package com.penguin.db.entity

import com.penguin.framework.common.BaseEntity
import org.springframework.data.annotation.Id
import org.springframework.data.relational.core.mapping.Column
import org.springframework.data.relational.core.mapping.Table
import java.io.Serializable

@Table(name = "blog")
class Blog(
    @Id
    @Column("id")
    val id: Long = 0,

    @Column("user_id")
    val userId: Long,

    @Column("title")
    val title: String,

    @Column("summary")
    val summary: String,

    @Column("thumbnail")
    val thumbnail: String,

    @Column("introduce")
    val introduce: String
) : BaseEntity(), Serializable {

    companion object {
        fun create(userId: Long, nickName: String): Blog {
            return Blog(
                userId = userId,
                title = nickName + "'s devume",
                summary = "no written summary",
                thumbnail = "",
                introduce = "no written introduce"
            )
        }

    }

}