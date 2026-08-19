# LOOP – Launchpad of Outstanding Placements

**LOOP – Launchpad of Outstanding Placements** is a college Mini Project focused on building a centralized placement knowledge-sharing platform. This repository contains the Phase 1 project planning, system design, requirements, documentation, and frontend prototype. Backend integration, database implementation, authentication, and production deployment are planned for subsequent phases.

---

## Phase 1 Deliverables

### 1. Planning & Design Documentation (`Phase-1/`)
We have created 14 detailed academic planning files documenting the project requirements:
*   [01_Problem_Statement.md](file:///Users/swapnil/Antigravity/loop/Phase-1/01_Problem_Statement.md) – Context and description of information fragmentation.
*   [02_Project_Objectives.md](file:///Users/swapnil/Antigravity/loop/Phase-1/02_Project_Objectives.md) – Development scopes for Phase 1 and long-term targets.
*   [03_Literature_Survey.md](file:///Users/swapnil/Antigravity/loop/Phase-1/03_Literature_Survey.md) – Comparison with LinkedIn, Glassdoor, and standard TPO portals.
*   [04_Proposed_System.md](file:///Users/swapnil/Antigravity/loop/Phase-1/04_Proposed_System.md) – Overview of the peer-to-peer knowledge platform.
*   [05_Functional_Requirements.md](file:///Users/swapnil/Antigravity/loop/Phase-1/05_Functional_Requirements.md) – Scope by roles (Junior, Senior, Admin).
*   [06_Non_Functional_Requirements.md](file:///Users/swapnil/Antigravity/loop/Phase-1/06_Non_Functional_Requirements.md) – Usability, compatibility, responsiveness guidelines.
*   [07_System_Architecture.md](file:///Users/swapnil/Antigravity/loop/Phase-1/07_System_Architecture.md) – Proposed architecture block diagram (MERN).
*   [08_Database_Design.md](file:///Users/swapnil/Antigravity/loop/Phase-1/08_Database_Design.md) – Proposed MongoDB models (User, Story, Resources).
*   [09_User_Flow.md](file:///Users/swapnil/Antigravity/loop/Phase-1/09_User_Flow.md) – Reading, submitting, and moderating workflows.
*   [10_UI_UX_Design.md](file:///Users/swapnil/Antigravity/loop/Phase-1/10_UI_UX_Design.md) – Colors, typography, and Hinge-inspired storytelling prompts.
*   [11_Technology_Stack.md](file:///Users/swapnil/Antigravity/loop/Phase-1/11_Technology_Stack.md) – Current React/Vite and proposed backend components.
*   [12_Module_Description.md](file:///Users/swapnil/Antigravity/loop/Phase-1/12_Module_Description.md) – Explains logic modules of stories, folder library, and administration.
*   [13_Team_Division.md](file:///Users/swapnil/Antigravity/loop/Phase-1/13_Team_Division.md) – Frontend, backend, database developer assignments.
*   [14_Phase_1_Report.md](file:///Users/swapnil/Antigravity/loop/Phase-1/14_Phase_1_Report.md) – Comprehensive compilation of the complete Phase 1 report.

### 2. Interactive Frontend UI Prototype
A high-fidelity, responsive React prototype mimicking the design language:
*   **Landing Page**: Hero banner, featured senior stories, achievements, and call to action.
*   **Login & Onboarding**: Simulated views with step-by-step registration workflows.
*   **Student Dashboard**: Recommended stories matching the user's branch, recruiting company listings, and latest files.
*   **Branch selector**: Department grid (CSE/AI-DS, CE, EXTC) to filter stories instantly.
*   **Stories Directory**: Fully functional search bar and dynamic selects (Branch, Company, Year).
*   **Senior Profile Details**: Timeline views of the 4-year lifecycle using storytelling prompt cards.
*   **Resume Viewer**: Styled mockup representing an A4 resume PDF page with mock download and printing options.
*   **Study Folders**: Navigable folders for CS subjects (DSA, Web Dev, OS, networks).
*   **Achievements Directory**: Catalog of student team hackathons and research publications.
*   **Story Submission**: Text inputs mapping to the 4-year prompts with drag-drop file areas.
*   **My Profile**: Contributions workspace showing submitted pending reviews and published content.
*   **Admin Dashboard**: Table listing pending stories/resources with functional Approve/Reject buttons.

---

## Local Development & Setup

### Prerequisites
*   Node.js (v18 or higher)
*   npm (v9 or higher)

### Run Locally
1.  Clone the repository:
    ```bash
    git clone https://github.com/swapnil-exxe/Mini-Project.git
    cd Mini-Project
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:3000` in your browser.
