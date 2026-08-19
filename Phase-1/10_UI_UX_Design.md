# UI / UX Design Plan

This document defines the interface design principles, typography, and color tokens that form the design system for LOOP Phase 1.

---

## Core Concept: Modern Editorial / Storytelling

The UI is inspired by modern editorial, profile-focused applications (such as Hinge), featuring:
1.  **Prompts Over Paragraphs**: Seniors answer targeted, conversational questions (e.g. *"What changed in my second year?"*, *"What would I tell my juniors?"*) which render as clean, distinct cards.
2.  **Premium Dark Interface**: A deep dark color scheme that reduces eye strain and provides a high-contrast background for text.
3.  **Glassmorphism**: Translucent cards (`backdrop-filter: blur()`) with thin, elegant borders that suggest layers and depth.
4.  **Sophisticated Typography**: Clear structural hierarchy using high-contrast headings and readable body text.
5.  **Micro-interactions**: Subtle hover transitions on cards, scale-up transformations on buttons, and smooth active states.

---

## Design System & Tokens

### 1. Color Palette (Dark Theme Tokens)
*   **Background**: Deep Charcoal-Black (`#0d0d0e`)
*   **Card Background**: Muted Slate-Black (`#161618` or `rgba(22, 22, 24, 0.7)`)
*   **Borders**: Thin, semi-transparent graphite (`#252528` or `rgba(255, 255, 255, 0.08)`)
*   **Primary Text**: High-contrast white (`#ffffff` or `rgba(255, 255, 255, 0.95)`)
*   **Secondary Text**: Muted gray (`#8a8a93` or `rgba(255, 255, 255, 0.6)`)
*   **Accent Color**: Crisp off-white / light slate (`#f4f4f5`) for active states, borders, and call-outs.
*   **Success Green**: Subtle emerald (`#10b981`) for approvals and stats.
*   **Error Red**: Subtle crimson (`#ef4444`) for rejections.

### 2. Typography
*   **Heading Font**: Modern Sans-Serif (e.g. Outfit, Inter, system-ui)
*   **Body Font**: Serif / Sans-Serif blend (e.g., Georgia or system sans-serif for story contents)
*   **Font Weights**:
    *   Titles: `700` (Bold)
    *   Section Headings: `600` (Semi-Bold)
    *   Prompts: `500` (Medium)
    *   Body text: `400` (Regular)

### 3. Layout and Spacing
*   **Grid**: Fluid auto-fitting grids (`minmax(300px, 1fr)`) to ensure responsiveness.
*   **Borders**: Solid 1px borders with border-radius set to `8px` or `12px` (rectangular, editorial feel).
*   **Spacing**: Generous margins (`gap: 1.5rem` or `2rem`) to give components breathing room.
