# System Architecture

The proposed system uses a modern full-stack web architecture designed for scalability, modularity, and fast response times. It follows the standard Client-Server architectural pattern.

## System Architecture Diagram

```mermaid
graph TD
    subgraph Client Layer (Frontend)
        A[React + Vite App] -->|HTTPS Requests| B[React Router]
        A -->|UI Rendering| C[CSS Stylesheet / Lucide Icons]
    end

    subgraph API Layer (Backend)
        D[Express Router] -->|Routing / Middleware| E[Node.js + Express Server]
        E -->|JWT / Auth Middleware| F[Controllers]
    end

    subgraph Database Layer
        G[Mongoose ODM] -->|Queries / Schemas| H[(MongoDB Atlas)]
    end

    A <==>|REST API / JSON| E
```

## Component Roles
1.  **Frontend (React + Vite)**: A fast, single-page application (SPA) focused on rendering the editorial UI, managing client-side routing, and capturing story submission forms.
2.  **Backend (Node.js + Express)**: An asynchronous REST API service that handles routing, business logic, email validation, and authorization checks.
3.  **Database (MongoDB Atlas & Mongoose)**: A cloud-hosted document database storing user profiles, submitted stories, files, and achievements. Mongoose provides object data modeling (ODM) with schema validation.

---

## Future Implementation Modules

### 1. Authentication & Session Management
*   **Protocol**: JSON Web Token (JWT) based authentication.
*   **Flow**:
    1.  User enters credentials.
    2.  Server verifies and signs a token containing `userId` and `role`.
    3.  Token is stored in the browser's HTTP-only cookies to protect against Cross-Site Scripting (XSS) attacks.

### 2. Authorization Rules
*   **Role-Based Access Control (RBAC)**:
    *   `Student`: Read-only access to published stories, resources, and achievements.
    *   `Contributor`: Write access to create stories/resources; read access to own profile.
    *   `Admin`: Read and write access to moderation queues, approval endpoints, user suspension, and resource folder management.

### 3. File Handling & Storage
*   **Resume Uploads**: Resumes are uploaded as PDFs.
*   **Storage Infrastructure**:
    *   **Phase 2**: Files will be routed from the Express backend to an AWS S3 Bucket or Cloudinary Storage.
    *   **Database Reference**: Only the secure, public file URL is saved in the MongoDB database collection (inside the `Story` or `User` document).
    *   **Validation**: Backend checks for file signature (magic numbers) and file size to restrict execution of malicious files.
