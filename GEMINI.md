# Project: Devume

## Project Overview

This repository is a monorepo for the "Devume" web application. It consists of a Kotlin backend, a Nuxt.js (Vue) frontend, and utilizes gRPC for communication between them. The project is structured as a multi-module Gradle project for the backend and an npm-managed project for the frontend.

### Key Technologies

*   **Backend (`devume-api`, `devume-core`):**
    *   Kotlin
    *   Spring Boot 3
    *   Java 21
    *   Gradle
    *   gRPC (for API)
    *   JDBC, Redis
*   **Frontend (`devume-client`):**
    *   Nuxt.js 3
    *   Vue.js
    *   TypeScript
    *   Pinia (State Management)
    *   Tailwind CSS
    *   gRPC-web
*   **API Definition:**
    *   Protocol Buffers (`.proto`)
*   **Deployment:**
    *   Docker
    *   Kubernetes (configuration templates are in the `deploy` directory)

### Architecture

The project follows a microservices-oriented architecture:

1.  **`devume-api`:** The main backend service that handles business logic and exposes a gRPC API.
2.  **`devume-core`:** A shared library module containing common code, entities, and configurations used by the backend services.
3.  **`devume-client`:** A Nuxt.js single-page application that consumes the gRPC API from the backend.
4.  **`proto`:** A dedicated directory for Protocol Buffers definitions, serving as the single source of truth for the API contract.

## Building and Running

### Backend (devume-api)

The backend is managed by Gradle and can be run using the provided shell script.

*   **Run the API server (local profile):**
    ```bash
    ./run_local.sh -api
    ```
*   **Run tests:**
    ```bash
    ./run_local.sh -test
    ```
*   **Build the project:**
    ```bash
    ./run_local.sh -build
    ```

### Frontend (devume-client)

The frontend is a standard Nuxt.js application. You can use the provided shell script or standard npm commands.

*   **Install dependencies:**
    ```bash
    ./run_client.sh -install
    # OR
    # npm install --prefix ./devume-client
    ```
*   **Run the development server:**
    ```bash
    ./run_client.sh
    # OR
    # npm run --prefix ./devume-client dev
    ```
*   **Build for production:**
    ```bash
    ./run_client.sh -build
    # OR
    # npm run --prefix ./devume-client build
    ```

## Development Conventions

*   **API First:** The gRPC service definitions in the `proto` directory are the primary contract. When making API changes, start by modifying the `.proto` files.
*   **gRPC Code Generation:** The frontend requires generated gRPC client code. The `npm run proto` script handles this. It is automatically run as part of the `dev` and `build` scripts.
*   **Configuration:** The backend uses `application.yml` for configuration, while the frontend uses `.env` files and the `nuxt.config.ts` runtime configuration.
*   **Styling:** The frontend uses Tailwind CSS. Utility classes should be preferred. Global styles are located in `devume-client/assets/css/main.css`.
