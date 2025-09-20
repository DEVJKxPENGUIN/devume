package com.penguin.framework.error.exception

import com.penguin.framework.error.ErrorCode

class BaseException(
    val errorCode: ErrorCode,
    val detailMessage: String? = null
) : RuntimeException(detailMessage ?: errorCode.message) {
}