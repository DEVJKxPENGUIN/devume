# DEVUME PROJECT KNOWLEDGE BASE

**Generated:** 2026-01-24 23:24
**Commit:** 7d55c32
**Branch:** feature/2

## OVERVIEW
Portfolio sharing platform for developers. Monorepo with Kotlin/Spring gRPC backend (devume-api, devume-core) and Next.js TypeScript frontend (devume-client3).

## STRUCTURE
```
devume/
├── devume-api/          # gRPC service layer (6 services)
├── devume-core/         # Framework, DB, domain (shared backend code)
├── devume-client3/      # Next.js 14 frontend (ACTIVE - see devume-client3/src/AGENTS.md)
├── devume-client/       # DEPRECATED - Nuxt.js version, DO NOT USE
├── proto/               # Protobuf definitions (shared)
├── deploy/              # Kubernetes manifests
├── lib/                 # 58 JAR dependencies
└── build.gradle.kts     # Root Gradle config for Kotlin subprojects
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add gRPC service | `devume-api/src/main/kotlin/com/penguin/service/` | Extend `*GrpcKt.*CoroutineImplBase()` |
| DB entities/repos | `devume-core/src/main/kotlin/com/penguin/db/` | Spring Data JDBC |
| Framework config | `devume-core/src/main/kotlin/com/penguin/framework/` | See devume-core AGENTS.md |
| Frontend pages | `devume-client3/src/app/` | Next.js App Router |
| Frontend components | `devume-client3/src/components/` | React + CSS Modules |
| Proto changes | `proto/*.proto` | Run `npm run proto` in devume-client3 after |
| Auth logic | `devume-core/.../framework/interceptor/` + `annotation/DevumeUser.kt` | Custom annotation-based auth |
| Deployment | `deploy/*.yaml` | Kubernetes + Jenkins |

## CONVENTIONS

### Backend (Kotlin)
- **Package**: `com.penguin.*` (NOT `com.devume`)
- **gRPC Services**: Use `@GrpcService` + Kotlin coroutines (`suspend fun`)
- **Auth**: `@DevumeUser(Role.GUEST, false)` annotation on service methods
- **Tests**: JUnit 5 + custom summary reporter (see build.gradle.kts line 94-142)

### Frontend (Next.js)
- **NO Tailwind** - Uses CSS Modules + CSS Variables for theming
- **BFF Pattern**: Client → Next.js Route Handler → gRPC backend (NEVER direct gRPC from browser)
- **State**: Redux Toolkit for global state, React Context for theme only
- **Styling**: `*.module.css` per component, theme vars in `src/styles/globals.css`

### Proto Generation
- **Backend**: Auto-generated on Gradle build to `build/generated/source/proto/`
- **Frontend**: Manual - run `npm run proto` in devume-client3 (outputs to `src/proto/generated/`)

## ANTI-PATTERNS (THIS PROJECT)

- **NEVER commit to devume-client** - It's deprecated, use devume-client3
- **NEVER use Tailwind in devume-client3** - Project uses CSS Modules
- **NEVER call gRPC from browser** - Always proxy through Next.js Route Handlers
- **NEVER use `com.devume` package** - Package is `com.penguin`

## UNIQUE STYLES

### Backend
- Custom test reporter with emoji summary (✅ PASSED, ❌ FAILED, 📊 Test Summary)
- Unified Gradle config in root build.gradle.kts via `subprojects { }` block
- Proto source shared via `srcDir("../proto")` in both api/core

### Frontend
- Existing AGENTS.md at `devume-client3/AGENT.md` (note: singular, no 'S')
- Max width 1280px enforced via CSS variables
- Breakpoints: tablet 1024px, mobile 768px (CSS vars)

## COMMANDS

```bash
# Backend (from root)
./gradlew devume-api:bootRun        # Run API server (port 9090)
./gradlew devume-core:test          # Run core tests
./gradlew test                       # All tests with summary

# Frontend (from devume-client3/)
npm run proto                        # Regenerate proto clients
npm run dev                          # Dev server (port 3000)
npm run build                        # Production build

# Scripts (from root)
./run_local.sh                       # Start all services locally
./run_client3.sh                     # Start client3 only
./benchmark.sh                       # Performance benchmarks
```

## NOTES

- **devume-client vs devume-client3**: Only client3 is active. Client uses Nuxt.js/Vue, client3 uses Next.js/React.
- **Proto sync**: After changing `.proto` files, regenerate both backend (Gradle build) and frontend (`npm run proto`).
- **Port conflicts**: API uses 9090 (gRPC), client3 uses 3000 (HTTP).
- **Auth flow**: OIDC-based, managed by `devume-core/framework`. Custom `@DevumeUser` annotation.
- **Monorepo**: Not a true monorepo (no workspace tool), just multiple projects in one repo.
