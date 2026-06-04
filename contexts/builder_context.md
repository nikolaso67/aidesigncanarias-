# Builder Context — Last updated: 2026-04-18 — hotfix: revert Hero.tsx to 7d39fcf

## Project Structure
- Framework: Next.js 16, React 19, TypeScript
- Entry: `app/page.tsx` — imports all section components
- Components: `app/components/` — Hero, Navbar, Chat, About, Services, Portfolio, Contact, Footer
- API routes: `app/api/chat/route.ts`, `app/api/contact/route.ts`
- Config: `next.config.ts` (CSP headers, image domains)
- Deploy: Vercel, production at aidesigncanarias.com

## Established Patterns
- All interactive components have `"use client"` directive
- Tailwind v4 (`@import "tailwindcss"` — NOT @tailwind directives)
- Font: Geist via `next/font/google`, variable `--font-geist-sans`
- z-index: Navbar/Chat button use `z-[100]`; Hero content uses `z-10`; decorative bg divs use `pointer-events-none`
- CSP includes `unsafe-inline` for script-src (required for Next.js hydration)

## What Has Been Built
- Full single-page marketing site: Hero, Navbar, Chat widget (AI), About, Services, Portfolio, Contact, Footer
- AI chat via `/api/chat` with 429 rate-limit handling
- Contact form via `/api/contact`
- Security headers in next.config.ts including CSP

## Current State
- All files clean, no JS errors detected
- Current commit: f39c688 — pushed to origin/main, Vercel auto-deploying
- Hero.tsx is now identical to working commit 7d39fcf
- tsc --noEmit was passing at previous checkpoint

## Key Decisions Made
- Hero section MUST keep `overflow-hidden` on the `<section>` tag and `z-10` on the content wrapper div. Removing either allows decorative background divs to sit above interactive content and intercept clicks — this was the root cause of the production break.
- CSP `unsafe-inline` for scripts is intentional — required for Next.js inline bootstrap scripts.
- Fixed elements (Navbar, Chat) use `z-[100]` to clear stacking context issues.
- If iOS Safari tap issues resurface: use `touch-action: manipulation` on individual buttons — do NOT restructure Hero DOM or remove z-index/overflow.

## Next Steps
- Verify Vercel deploy succeeds and chat button + hamburger click events work on production
- If mobile iOS taps still broken after this revert, add `touch-action: manipulation` only to the specific buttons (Chat toggle, Navbar hamburger) — no structural DOM changes
- Footer and Chat.tsx may still have residual dark-theme classes from earlier session
