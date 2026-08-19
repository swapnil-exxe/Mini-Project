# Module Description

This document breaks down the LOOP application into modular components and explains the business logic and user interactions for each module.

---

## 1. Authentication & Onboarding Module
*   **Purpose**: Manages user registration, role selection, and logins.
*   **User Interaction**:
    *   **Login**: Accepts email/password with show/hide password toggle.
    *   **Multi-Step Onboarding**:
        *   *Step 1 (Basic Details)*: Full name and college email.
        *   *Step 2 (Academic Info)*: Branch, current year, batch, pass-out year.
        *   *Step 3 (Role Selection)*: Student, Contributor, or Alumni.
*   **Logic (Future)**: On complete, stores credentials in database with password hashing and session tokens.

## 2. Placement Stories Module
*   **Purpose**: The central directory of senior placement experiences.
*   **User Interaction**:
    *   **List View**: Displays summarized cards for each student (name, company, role, branch, pass-out year, CGPA).
    *   **Detailed Profile View**: Presents chronological storytelling cards (1st to 4th Year, preparation strategy, and interview details) with Hinge-style prompts.
    *   **Search/Filter**: Updates list dynamically based on search keyword or filter selects (branch, company, role, year).

## 3. Resume & Resources Module
*   **Purpose**: Hosts verified resumes and learning links.
*   **User Interaction**:
    *   **Resume Viewer**: Displays placement resumes using a clean placeholder container, supporting printing and mock downloading.
    *   **Resource Library**: Categorizes materials into folders (DSA, Core CS, Web Dev, System Design, Aptitude, Interview Prep). Inside folders, students access direct links to study guides and reference sites.

## 4. Achievements Module
*   **Purpose**: Highlights team and individual milestones.
*   **User Interaction**:
    *   **Grid View**: Lists cards under categories like Hackathons, Coding Competitions, Placements, Internships, and Technical Achievements.
    *   **Detail**: Shows event name, team members, year, and description.

## 5. Story Submission Module
*   **Purpose**: Allows seniors and alumni to author placement stories.
*   **User Interaction**:
    *   Form fields mapping to the 4-year journey prompts, resume PDF links, and study folders.
    *   Displays a notice informing the user that submissions must be approved by an admin before publication.

## 6. Admin Moderation Module
*   **Purpose**: Quality control and validation dashboard.
*   **User Interaction**:
    *   **Admin Dashboard**: Shows global metrics (total stories, pending reviews).
    *   **Moderation Queue**: Lists pending story submissions and pending resources.
    *   **Actions**: "Approve" (moves pending items to the published database) or "Reject" (deletes the entry).
