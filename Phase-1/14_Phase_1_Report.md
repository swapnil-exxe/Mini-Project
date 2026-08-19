# Phase 1 Project Report

## 1. Project Title
**LOOP – Launchpad of Outstanding Placements**

---

## 2. Introduction
LOOP is a centralized, collaborative knowledge-sharing portal designed for engineering colleges. The platform is designed to store, organize, and present placement and internship journeys of seniors and alumni. By using an editorial-style storytelling approach, LOOP translates unstructured senior advice into searchable, structured resources that junior students can use for placement preparation.

---

## 3. Problem Statement
Students lack a single, dedicated platform to search and read about the placement experiences of seniors at their own college. Information regarding company interview structures, preparation strategies, successful resume templates, and study resources is fragmented across multiple communication channels (WhatsApp, Discord, private drives). This creates information asymmetry and inefficient mentorship loops within the student community.

---

## 4. Motivation
The motivation behind LOOP is to democratize placement intelligence within an academic institution. Giving seniors a dedicated portal to document their preparation journeys allows their experiences to serve as a persistent resource for future batches. This reduces communication fatigue for seniors and provides juniors with reliable guidance.

---

## 5. Objectives
*   **Centralization**: Consolidate student experiences, resumes, and study sheets in one searchable database.
*   **Structured Storytelling**: Replace lengthy, unstructured paragraphs with prompt-based chronological timelines.
*   **Verification**: Ensure all public stories, packages, and materials are verified by a moderation queue.
*   **Phase 1 Goal**: Establish comprehensive system specifications, database schemas, and create a functional React UI prototype.

---

## 6. Existing System
Students currently rely on global platforms such as Glassdoor, LeetCode discussion forums, and LinkedIn. Locally, college Training and Placement (TPO) portals (such as Superset) are used to schedule drives, collect resumes, and broadcast eligibility emails.

---

## 7. Limitations of Existing System
*   **Lack of Institutional Specificity**: Global portals do not capture the context of specific campus drives or local pool drives.
*   **Ephemeral Content**: LinkedIn posts disappear quickly down feeds and are often written for personal branding rather than direct, structured guidance.
*   **TPO Portals are Non-Collaborative**: Administrative TPO systems do not support senior storytelling, peer study guides, or direct resume sharing.

---

## 8. Proposed System
LOOP offers a structured alternative featuring:
1.  **Branch-Wise Classification**: Content filtered for CSE, AI/DS, CE, and EXTC.
2.  **Prompt-Based Journey Profiles**: Chronological (1st to 4th year) stories answering Hinge-style questions.
3.  **Unified Materials Library**: Direct access to successful resumes and categorized study guides (DSA, Core CS, Web Dev).
4.  **Moderation Workflows**: Admin screens to review, approve, or reject submissions.

---

## 9. Target Users
*   **Junior Students**: Access resources, search placement stories, and review study materials.
*   **Seniors and Alumni**: Submit their preparation journals, resumes, and recommend learning links.
*   **TPO/Faculty Moderators**: Review pending submissions to verify and maintain academic integrity.

---

## 10. Major Features
*   **Dynamic Story Exploration**: Text searches and branch, company, and role filtering.
*   **Prompt-Style Timelines**: Categorized sections documenting each academic year.
*   **Mock Resume Preview**: Online resume reader with print and download capability.
*   **Step-by-Step Onboarding**: Structured student onboarding and role selection.
*   **Submission Review Board**: Admin list views with approve/reject actions.

---

## 11. Frontend Pages
The Phase 1 prototype implements 13 connected screens:
1.  **Landing Page**: Overview and navigation hub.
2.  **Login**: User authentication UI.
3.  **Registration / Onboarding**: Multi-section signup form.
4.  **Student Dashboard**: Recommended stories, companies, and quick stats.
5.  **Branch Selection**: Branch cards (CSE/AI-DS, CE, EXTC) linking to stories.
6.  **Placement Stories**: Filterable directory of student journeys.
7.  **Senior Profile**: Detailed profile displaying prompt-based cards.
8.  **Resume Viewer**: Mock document preview interface.
9.  **Study Resources**: Categorized folders for CS fundamentals.
10. **Achievements**: Grid of hackathons and placement achievements.
11. **Submit Story**: Story submission forms.
12. **My Profile**: Personal contributions tracker.
13. **Admin Dashboard**: Moderation queue.

---

## 12. System Architecture
The future system is planned as a client-server architecture:
*   **Frontend**: React + Vite single-page application (SPA).
*   **Backend**: Node.js and Express REST API.
*   **Database**: MongoDB Atlas cloud database managed via Mongoose ODM.
*   **Security**: JSON Web Tokens (JWT) for authentication and role checks.

---

## 13. Database Planning
Collections have been planned for:
*   `User`: Login credentials, branch details, and roles.
*   `Story` / `PendingStory`: Senior journeys, preparation details, and resumes.
*   `Folder` / `Resource` / `PendingResource`: Categorized study folders and links.
*   `Achievement`: Hackathons and placement records.

---

## 14. Technology Stack
*   **Frontend**: React, Vite, JavaScript (JSX), Vanilla CSS.
*   **Icons**: Lucide React.
*   **Routing**: React Router Dom.
*   **Backend (Proposed)**: Node.js, Express, Mongoose, MongoDB.

---

## 15. Functional Requirements
*   **FR-1**: Students can search, filter, and read placement stories.
*   **FR-2**: Seniors can onboard, submit prompt-based stories, and link resumes.
*   **FR-3**: Administrators can review, approve, and reject submissions.

---

## 16. Non-Functional Requirements
*   **NFR-1**: Premium, dark-themed editorial UI optimized for readability.
*   **NFR-2**: Responsive design supporting Mobile, Tablet, and Desktop resolutions without horizontal scrolling.
*   **NFR-3**: Secure page transitions and input field validation.

---

## 17. User Flow
1.  **Read Flow**: Landing $\rightarrow$ Branch Selection $\rightarrow$ Search Stories $\rightarrow$ View Profile $\rightarrow$ Read Journey $\rightarrow$ View Resume.
2.  **Submit Flow**: Register $\rightarrow$ Select Contributor $\rightarrow$ Open Submit Form $\rightarrow$ Enter Prompts $\rightarrow$ Staged for Moderation.
3.  **Admin Flow**: Login $\rightarrow$ Moderation Queue $\rightarrow$ Read Submission $\rightarrow$ Publish or Delete.

---

## 18. UI/UX Plan
Inspired by modern editorial cards:
*   Dark backgrounds (`#0d0d0e`), glassmorphism cards (`backdrop-filter`), thin borders (`rgba(255,255,255,0.08)`).
*   Clean Outfit/Inter typography.
*   Interactive transitions for cards and buttons.

---

## 19. Team Division
*   **Member 1**: UI/UX design, React frontend coding, CSS templates.
*   **Member 2**: Express API development, validation middlewares, authorization rules (Phase 2).
*   **Member 3**: MongoDB design, Atlas configurations, query setups (Phase 2).
*   **Shared**: System integration, testing, documentation reports.

---

## 20. Development Roadmap
*   **Phase 1 (Current)**: Project planning, architecture design, and React frontend prototype.
*   **Phase 2**: Node/Express server setup, MongoDB database integration, and JWT authentication.
*   **Phase 3**: User testing, feedback cycles, performance optimization, and campus hosting.

---

## 21. Expected Outcome
A clean, central campus portal that captures student preparation journeys, enabling juniors to access peer insights and study resources directly within their college community.

---

## 22. Future Scope
*   **Peer Chat / Q&A**: Integrate a chat interface to allow direct messaging between juniors and mentors.
*   **Resume Builder**: Implement an in-app resume builder that exports to college-standard PDF formats.
*   **AI Recommendations**: Analyze student branches and goals to suggest relevant resources.

---

## 23. Conclusion
Phase 1 of LOOP lays the structural and design foundation for a centralized campus placement portal. The completed frontend prototype demonstrates the primary user flows, page hierarchy, and storytelling concept, setting up the project for full-stack integration in subsequent phases.
