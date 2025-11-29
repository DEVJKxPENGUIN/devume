# Agent Development Guide for devume-client3

This document outlines the current architecture, conventions, and technology stack for the `devume-client3` project. It serves as a guide for any developer or AI agent continuing the work on this frontend application.

## 1. Project Overview

- **Purpose**: Frontend for "Devume", a portfolio sharing website for developers.
- **URL Structure**:
  - `/`: Main landing/introduction page.
  - `/users/[nickname]`: Dynamic pages for individual developer profiles.

## 2. Technology Stack

- **Framework**: Next.js 14 (with App Router)
- **Language**: TypeScript
- **State Management**:
  - **Redux Toolkit**: For complex, global application state.
  - **React Context**: For simple, UI-related global state like theming.
- **Styling**:
  - **CSS Modules**: For component-scoped styling (`*.module.css`).
  - **CSS Custom Properties (Variables)**: For implementing and managing themes (light/dark mode).
- **API Communication**:
  - **`@grpc/grpc-js`**: For server-side gRPC communication with the backend (`devume-api`).
  - **Next.js Route Handlers**: As a proxy for client-side requests to the gRPC backend.

**Note**: Tailwind CSS is intentionally not used in this project.

## 3. Project Structure

The `src` directory is the main container for our application code.

```
src/
├── app/
│   ├── api/                    # Route Handlers (Client-side API proxy)
│   │   └── ...
│   ├── layout.tsx                # Root layout, includes all providers
│   ├── page.tsx                  # Home page component (/)
│   ├── page.module.css
│   └── users/[nickname]/
│       ├── page.tsx              # Dynamic user profile page
│       └── page.module.css
├── components/
│   ├── common/
│   │   └── ThemeToggleButton.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── context/
│   └── ThemeContext.tsx
├── store/
│   ├── store.ts
│   ├── hooks.ts
│   └── provider.tsx
├── styles/
│   └── globals.css
└── utils/
    └── grpcHandler.ts          # Server-side gRPC client and utility
```

## 4. Key Architectural Decisions

### API Communication (BFF Pattern)
This project uses the Next.js server as a **Backend for Frontend (BFF)**. The client-side application does not directly communicate with the `devume-api` gRPC service.

1.  **Server-Side Rendering (SSR)**:
    - Pages like `users/[nickname]/page.tsx` are Server Components.
    - They use the `grpcHandler.ts` utility to directly call the `devume-api` via gRPC during the server-rendering process.
    - This is the preferred method for fetching initial page data.

2.  **Client-Side Fetching**:
    - When the client needs to fetch data dynamically (e.g., after a user interaction), it makes a standard `fetch` request to a Next.js **Route Handler** (e.g., `/api/some-data`).
    - The Route Handler, running on the server, then uses `grpcHandler.ts` to make the actual gRPC call to `devume-api`.
    - This approach acts as a secure proxy, avoiding CORS issues and hiding backend complexity.

### Styling and Theming
- **Component-Scoped Styles**: All components should use their own `*.module.css` file.
- **Global Theme System**: Theming is controlled by CSS variables in `src/styles/globals.css`.
- **Theme Switching**: `ThemeContext` handles theme state and applies the `data-theme` attribute to the `<html>` element.

#### Layout and Responsive Design
- **Max Width**: The main content area of the application is constrained to a maximum width of `1280px`. This is managed by a shared `max-width` property on container elements in both the header and the main page sections.
- **Responsive Breakpoints**: For consistent responsive design, use the CSS variables defined in `src/styles/globals.css`:
  - `--breakpoint-tablet: 1024px;`
  - `--breakpoint-mobile: 768px;`
- **Implementation**: Media queries should use these variables. For example:
  ```css
  @media (max-width: var(--breakpoint-tablet)) {
    /* Styles for tablet and smaller screens */
  }
  ```

### State Management
- **Redux**: For complex, global application state.
- **React Context**: For simple, UI-related global state (e.g., theme).

## 5. Environment Variables

Before running the application, you need to set up your environment variables. Create a file named `.env.local` in the root of the directory.

**File: `.env.local`**
```
# The URL of the gRPC API server (devume-api).
# This is used by the Next.js server, not the client browser.
NEXT_PUBLIC_GRPC_API_URL=http://localhost:9090
```
*Note: The `NEXT_PUBLIC_` prefix is used for convention, but this variable is primarily used server-side in this architecture.*

## 6. How to Run

1.  **Install dependencies**:
    ```bash
    npm install
    npm install @grpc/grpc-js google-protobuf
    ```
2.  **Set up environment variables** (see section above).
3.  **Run the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.
