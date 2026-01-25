# DEVUME-CORE FRAMEWORK KNOWLEDGE BASE

**Parent**: See `/AGENTS.md` for project overview

## OVERVIEW
Shared framework code for devume backend: config, auth, interceptors, error handling.

## STRUCTURE
```
framework/
├── annotation/         # @DevumeUser custom annotation
├── common/            # BaseRequest, BaseResponse, BaseEntity
├── config/            # Spring configs (JDBC, Redis, WebClient, Jackson)
├── custom/            # ExceptionHandler, ApplicationContext
├── error/             # ErrorCode enum + exception hierarchy
└── interceptor/       # gRPC auth interceptor
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add auth rule | `annotation/DevumeUser.kt` | Annotation-based, checked by interceptor |
| Auth logic | `interceptor/` | gRPC interceptor validates JWT |
| Add error code | `error/ErrorCode.kt` | Enum with HTTP status mapping |
| Base classes | `common/` | Extend for domain models |
| Spring config | `config/` | JDBC, Redis, WebClient, ObjectMapper |

## CONVENTIONS

### Auth Pattern
```kotlin
@GrpcService
class SomeService : SomeGrpcKt.SomeCoroutineImplBase() {
    
    @DevumeUser(Role.USER, requireAuth = true)  // Requires logged-in user
    override suspend fun someMethod(req: Request): Response {
        val user = ContextUtils.currentUser()  // Access authenticated user
        // ...
    }
    
    @DevumeUser(Role.GUEST, requireAuth = false)  // Allows guest
    override suspend fun publicMethod(req: Request): Response {
        // ...
    }
}
```

### Error Handling
- **Throw**: `BaseException(ErrorCode.UNAUTHORIZED, "message")`
- **ErrorCode enum**: Maps to HTTP status + gRPC status
- **ExceptionHandler**: Intercepts and translates to gRPC status

## ANTI-PATTERNS

- **Manual auth checks** - Use `@DevumeUser` annotation
- **String error codes** - Use ErrorCode enum
- **Direct context access** - Use ContextUtils.currentUser()

## NOTES

- **Annotation-driven**: Auth is declarative via `@DevumeUser`
- **Coroutines**: All gRPC services use Kotlin coroutines (`suspend fun`)
- **Shared by**: Both devume-api and devume-core depend on this
- **JWT validation**: Handled in interceptor, validates against OIDC provider
