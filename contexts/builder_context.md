# Builder Context — Last updated: 2026-04-16 — Light theme design overhaul

## Project Structure
- `/home/niko/aidesigncanarias/app/` — Next.js 16 App Router root
- `/home/niko/aidesigncanarias/app/globals.css` — Global styles (Tailwind v4, `@import "tailwindcss"`)
- `/home/niko/aidesigncanarias/app/layout.tsx` — Root layout with Geist font
- `/home/niko/aidesigncanarias/app/components/` — All page section components
- `/home/niko/aidesigncanarias/contexts/` — Agent context handover files

## Established Patterns
- Framework: Next.js 16, React 19, TypeScript
- Styling: Tailwind v4 (`@import "tailwindcss"` — NOT @tailwind directives)
- Font: Geist (via `next/font/google`, variable `--font-geist-sans`)
- Components are plain TSX — no state management library
- No test framework currently present

## What Has Been Built
- Full single-page marketing site for AI Design Canarias agency
- Components: Navbar, Hero, Services, About, Portfolio, Contact, Chat, Footer
- Complete dark→light theme overhaul applied to: globals.css, layout.tsx, Navbar.tsx, Hero.tsx, Services.tsx, About.tsx, Portfolio.tsx, Contact.tsx

## Current State
- tsc --noEmit passes with zero errors
- Light theme fully applied; color palette is indigo/sky/slate
- Chat.tsx and Footer.tsx were NOT in scope for the redesign — still use dark-theme classes

## Key Decisions Made
- Design uses indigo-600 as primary brand color (replaced blue-600)
- Body font changed to `var(--font-geist-sans), system-ui, sans-serif`
- Dark media query removed from globals.css (site is always light)
- Portfolio card borders moved into the `color` gradient string to allow per-card colors

## Next Steps
- Chat.tsx and Footer.tsx still have dark-theme classes — may need a follow-up pass
- Consider adding a Footer redesign pass to match light theme
- No real email integration yet in Contact form (uses simulated timeout)
