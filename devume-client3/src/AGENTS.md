# DEVUME-CLIENT3 SOURCE KNOWLEDGE BASE

**Parent**: See `/AGENTS.md` for project overview

## OVERVIEW
Next.js 14 frontend with Redux, CSS Modules, gRPC via BFF pattern.

## STRUCTURE
```
src/
├── app/                    # Next.js App Router (pages + API routes)
├── components/             # React components (31 files)
│   ├── blog/              # Blog-specific UI
│   ├── common/            # Shared components
│   ├── editor/            # Content editor
│   ├── home/              # Homepage components
│   ├── layout/            # Header, Footer
│   └── post/              # Post-related UI
├── context/                # React Context (theme, alerts)
├── store/                  # Redux Toolkit setup
├── proto/generated/        # gRPC client stubs (auto-generated)
├── utils/                  # Utilities
├── lib/                    # Third-party integrations
├── data/                   # Static data
└── styles/                 # Global CSS + theme variables
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add page | `app/[route]/page.tsx` | Use Server Components by default |
| Add API endpoint | `app/api/[route]/route.ts` | Proxy to gRPC backend |
| Add component | `components/[category]/` | Co-locate `*.module.css` |
| Call backend | `app/api/` → `utils/grpcHandler.ts` | BFF pattern, NEVER direct gRPC |
| Update proto | Run `npm run proto` | After changing `../../proto/*.proto` |
| Theme vars | `styles/globals.css` | CSS custom properties |
| Global state | `store/` | Redux Toolkit slices |

## CONVENTIONS

### Styling
- **Module CSS**: Every component has `ComponentName.module.css`
- **Theme vars**: Use `var(--color-primary)`, `var(--breakpoint-tablet)` from globals.css
- **No Tailwind**: CSS Modules only
- **Max width**: 1280px via `max-width: var(--max-width)`

### API Pattern (BFF)
```typescript
// CLIENT: app/some-page/page.tsx (Server Component - preferred)
import { grpcHandler } from '@/utils/grpcHandler'
const data = await grpcHandler.someCall()

// CLIENT: Client Component needing dynamic fetch
const res = await fetch('/api/some-endpoint')

// SERVER: app/api/some-endpoint/route.ts
import { grpcHandler } from '@/utils/grpcHandler'
export async function GET() {
  const data = await grpcHandler.someCall()
  return NextResponse.json(data)
}
```

### State Management
- **Redux**: Complex global state (user, posts, etc.)
- **Context**: Simple UI state (theme, alerts)
- **Server Components**: Fetch data directly in components when possible

## ANTI-PATTERNS

- **Direct gRPC from browser** - Always use Next.js Route Handler as proxy
- **Inline styles or Tailwind** - Use CSS Modules
- **Theme in Redux** - Use ThemeContext instead
- **Ignoring breakpoint vars** - Use CSS vars for responsive design

## UNIQUE STYLES

- **BFF everywhere**: No client-side gRPC, all proxied through `/api` routes
- **CSS vars for theming**: `data-theme` attribute switches light/dark
- **Proto generation**: Manual via `npm run proto` (not auto like backend)
- **Responsive**: Breakpoints defined as CSS variables

## NOTES

- **Proto sync**: After backend proto changes, run `npm run proto` to regenerate clients
- **Existing doc**: `AGENT.md` (singular) at client3 root has similar info
- **Port**: Runs on 3000, backend on 9090
- **Auth**: Session managed via iron-session, validated by backend
