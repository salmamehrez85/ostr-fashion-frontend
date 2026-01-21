# Project Memory – OSTR Fashion Frontend

## Product goal
Premium, minimal fashion e-commerce front-end (dark-mode first). Clean typography, whitespace, subtle motion.

## Non-negotiables
- Front-end only (no backend calls).
- Must run with: npm install && npm run dev
- Small, reusable components. No copy-paste UI.
- Accessibility: keyboard focus, aria for modal/drawer, visible focus rings.
- Performance: no heavy dependencies unless justified.

## Tech + structure
- React + Vite + TypeScript + TailwindCSS
- Routing: React Router
- State: Zustand (cart + wishlist)
- Structure:
  - src/components (UI building blocks)
  - src/layout (AppShell/Navbar/Footer)
  - src/pages
  - src/data (mock products)
  - src/store

## UI rules
- Dark theme default
- One accent color only
- Consistent spacing scale
- Buttons/inputs must have hover + focus + disabled states

## Git discipline
- Work in phases (setup → UI system → data/state → pages → polish).
- Commit after each phase, push each commit.
