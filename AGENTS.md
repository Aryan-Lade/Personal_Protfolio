## Project Summary
This is Aryan's Portfolio — a modern, dark-themed developer portfolio featuring sections for About, Stack, Projects, and Contact. The design utilizes glassmorphism, neon gradients, and a grid background.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS 4, Lucide React (icons)
- Animations: Framer Motion (though currently mostly CSS-based), Tailwind Animate
- Font: Inter (Sans), JetBrains Mono (Mono)

## Architecture
- `src/app/`: Contains the main page and layout.
- `src/components/sections/`: Contains the individual sections of the portfolio (Hero, About, Stack, Projects, Navbar, etc.).
- `src/app/globals.css`: Contains the global styles, theme configuration, and custom CSS variables for the glassmorphism and gradients.

## User Preferences
- Theme: Dark by default (high-contrast matte black).
- Aesthetics: Modern Tech, Glassmorphism, Neon Gradients.
- Components: Functional components with React hooks.

## Project Guidelines
- Follow the "Modern Dark Tech" aesthetic.
- Use `glass-card` class for consistent glassmorphism.
- Use `text-gradient` for highlighted text.
- Maintain the grid background pattern defined in `globals.css`.

## Common Patterns
- Sections are modularized in `src/components/sections`.
- Responsive design using Tailwind's grid and flexbox utilities.
- Smooth scrolling enabled globally.
