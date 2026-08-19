# Technology Stack

This document specifies the software tools, frameworks, and library choices for both the current Phase 1 frontend prototype and the planned Phase 2 full-stack release.

---

## Phase 1 Technology Stack (Current Prototype)

### 1. Core Frameworks
*   **Vite**: Next-generation frontend tooling that provides fast Hot Module Replacement (HMR) and optimized build times.
*   **React (v18+)**: Component-based JavaScript library for building interactive user interfaces.
*   **React Router Dom (v6+)**: Declarative, client-side routing library for navigating between pages.

### 2. Styling & Iconography
*   **Vanilla CSS**: Custom styling for maximum control over colors, gradients, layout grids, responsive design, and glassmorphic elements.
*   **Lucide React**: Crisp, lightweight SVG icons that match the minimal, professional editorial design system.

### 3. Package Management & Build
*   **npm**: Package manager for dependency resolution.
*   **Vite Compiler**: Compiles ES6 Javascript/JSX code into highly optimized production assets.

---

## Phase 2 Technology Stack (Proposed Production)

```
[Client Layer]          --->   [API Layer]           --->   [Database Layer]
React + Vite (SPA)      --->   Node.js + Express     --->   MongoDB Atlas (Mongoose ODM)
```

### 1. Backend Runtime & Framework
*   **Node.js**: Event-driven, non-blocking asynchronous JavaScript runtime environment.
*   **Express.js**: Minimalist web application framework for routing REST API endpoints.

### 2. Database & Data Modeling
*   **MongoDB Atlas**: Cloud-hosted document database storing flexible, JSON-like records.
*   **Mongoose**: Object Data Modeling (ODM) library for schema validation, document middleware, and query creation.

### 3. Hosting & Deployment
*   **Frontend**: Vercel or Netlify (for static React build).
*   **Backend**: Render, Heroku, or AWS EC2 instance.
*   **Database**: MongoDB Cloud cluster.
