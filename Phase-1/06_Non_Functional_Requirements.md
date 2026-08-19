# Non-Functional Requirements

Non-functional requirements specify the criteria used to judge the operation of a system, rather than specific behaviors.

## 1. Usability & UI/UX
*   **NFR-1.1**: The system must feature a premium, clean, dark-themed editorial UI with clear typography hierarchy to support long reading sessions.
*   **NFR-1.2**: Navigation must be intuitive, requiring no more than 3 clicks to access any specific placement story or resource.
*   **NFR-1.3**: Forms must include inline validation and helpful placeholder prompts.

## 2. Responsiveness & Compatibility
*   **NFR-2.1**: The web application must be fully responsive, rendering correctly across:
    *   Mobile viewports (width $\ge$ 320px)
    *   Tablet viewports (width $\ge$ 768px)
    *   Laptop/Desktop viewports (width $\ge$ 1024px)
*   **NFR-2.2**: The application must not cause horizontal scrollbars on standard device sizes.
*   **NFR-2.3**: Cross-browser compatibility must include latest versions of Chrome, Safari, Firefox, and Edge.

## 3. Performance & Scaling
*   **NFR-3.1**: The frontend bundle must be lightweight, using efficient rendering techniques to load pages in less than 1.5 seconds under standard network conditions.
*   **NFR-3.2**: Search and filtering operations must execute locally on client state or database queries within 200ms.

## 4. Security & Privacy
*   **NFR-4.1**: User passwords must be hashed before storage (planned for Phase 2).
*   **NFR-4.2**: Direct file uploads must be validated for file size (max 5MB) and mime-type (PDF only for resumes) to prevent security exploits.
*   **NFR-4.3**: Personal data (such as emails or CGPA) must only be accessible to registered college students, seniors, and administrators.
