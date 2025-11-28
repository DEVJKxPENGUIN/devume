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

**Note**: Tailwind CSS is intentionally not used in this project.

## 3. Project Structure

The `src` directory is the main container for our application code.

```
src/
├── app/
│   ├── layout.tsx                # Root layout, includes all providers
│   ├── page.tsx                  # Home page component (/)
│   ├── page.module.css
│   └── users/[nickname]/
│       ├── page.tsx              # Dynamic user profile page
│       └── page.module.css
├── components/
│   ├── common/
│   │   ├── ThemeToggleButton.tsx     # Floating theme toggle button
│   │   └── ThemeToggleButton.module.css
│   └── layout/
│       ├── Header.tsx
│       ├── Header.module.css
│       ├── Footer.tsx
│       └── Footer.module.css
├── context/
│   └── ThemeContext.tsx          # Manages light/dark theme state
├── store/
│   ├── store.ts                  # Redux store configuration
│   ├── hooks.ts                  # Typed hooks for Redux (useAppDispatch, etc.)
│   └── provider.tsx              # Redux provider for the app layout
└── styles/
    └── globals.css               # Global styles and CSS theme variables
```

## 4. Key Architectural Decisions

### Styling and Theming
- **Component-Scoped Styles**: All components should use their own `*.module.css` file to prevent style conflicts.
- **Global Theme System**: Theming is controlled by CSS variables defined in `src/styles/globals.css`.
  - `:root` contains light theme variables.
  - `[data-theme='dark']` contains dark theme variables.
- **Theme Switching**: `ThemeContext` (`src/context/ThemeContext.tsx`) handles theme state and applies the `data-theme` attribute to the `<html>` element. The `ThemeToggleButton` component allows users to switch themes.
- **Usage**: Use `var(--variable-name)` in CSS modules to apply theme colors.

### State Management
- **Redux**: For business logic and data that is shared across many components (e.g., user data, portfolio content). The setup is in `src/store`.
- **React Context**: For UI state that is not frequently updated but needs to be accessed globally (e.g., the current theme).

## 5. Environment Variables

Before running the application, you need to set up your environment variables.

Create a file named `.env.local` in the root of the `devume-client3` directory. This file is ignored by Git and will contain your local configuration.

**File: `.env.local`**
```
# The URL of the gRPC-web proxy server.
NEXT_PUBLIC_GRPC_API_URL=http://localhost:9090
```

For production builds, the `NEXT_PUBLIC_GRPC_API_URL` will be sourced from the deployment environment's system variables. No `.env.production` file is needed in the repository.

## 6. How to Run

1.  **Set up environment variables** (see section above).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.
