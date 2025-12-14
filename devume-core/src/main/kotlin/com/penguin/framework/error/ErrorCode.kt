package com.penguin.framework.error

import io.grpc.Status

enum class ErrorCode(
    val grpcStatus: Status,
    val value: Int,
    val message: String,
) {
    //format: off
    UNKNOWN(Status.UNKNOWN, -1, "Unknown Error occurred"),
    INTERNAL_SERVER(Status.UNKNOWN, -2, "Internal Server Error"),
    UNAUTHORIZED(Status.UNAUTHENTICATED, -3, "cannot find valid token"),
    NO_AUTHORIZED_ROLE(Status.PERMISSION_DENIED, -4, "no authorized role"),
    NO_AUTHORIZED_ROLE_REDIRECT(Status.PERMISSION_DENIED, -5, "no authorized role"),
    INVALID_STATETOKEN(Status.INVALID_ARGUMENT, -6, "invalid state token"),
    RESOURCE_NOT_FOUND(Status.NOT_FOUND, -7, "Resource not found"),
    VALIDATION_ERROR(Status.FAILED_PRECONDITION, -8, "Validation error"),
    ;
}