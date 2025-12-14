package com.penguin.framework.custom

import com.penguin.framework.error.ErrorCode
import com.penguin.framework.error.exception.BaseException
import io.grpc.Metadata
import io.grpc.StatusException
import org.springframework.grpc.server.exception.GrpcExceptionHandler
import org.springframework.stereotype.Component

@Component
class ExceptionHandler : GrpcExceptionHandler {

    companion object {
        val ERROR_CODE: Metadata.Key<String> = Metadata.Key.of("x-error-code", Metadata.ASCII_STRING_MARSHALLER)
    }

    override fun handleException(exception: Throwable?): StatusException {
        exception?.printStackTrace()
        val metadata = Metadata()

        if (exception is BaseException) {
            metadata.put(ERROR_CODE, exception.errorCode.value.toString())
            return exception.errorCode.grpcStatus
                .withDescription("${exception.errorCode.name}::${exception.message}")
                .withCause(exception)
                .asException(metadata)
        }

        metadata.put(ERROR_CODE, ErrorCode.UNKNOWN.name)
        return ErrorCode.UNKNOWN.grpcStatus
            .withDescription("${ErrorCode.UNKNOWN.name}::${ErrorCode.UNKNOWN.message}")
            .asException(metadata)
    }
}