# UX Designer Context — Last updated: 2026-04-16 / Initial review

## Design Decisions
- Moving from dark (gray-950) to a light/bright theme with warm-white base
- Accent palette: electric indigo (#6366f1 / indigo-500) + sky blue (#38bdf8 / sky-400) replacing flat blue-600
- Hero gets a true gradient mesh background (white to indigo/sky) replacing the near-black gradient
- Cards move to white background with subtle shadow + border, replacing white/5 glass on dark
- Body font stays Geist (already loaded); heading weight upgraded from bold to extrabold/black
- Section alternation: white sections vs slate-50 sections (not gray-900/50 dark panels)

## Naming Conventions
- No terminology drift found — UI labels, section IDs, and nav links are consistent
- Sections: #servicios, #sobre-nosotros, #portfolio, #contacto — keep as-is

## API Surface
- No API layer reviewed in this session (static site + contact form)

## What Has Been Reviewed
- globals.css, layout.tsx, Hero, Services, About, Portfolio, Navbar, Contact
- Full prioritized change list delivered (see session response)
- No code changes applied yet — recommendations only

## Known UX Issues
- Body font declared as Arial in globals.css but Geist is loaded — Geist is not applied to body
- Services section uses emoji icons — functional but unprofessional at agency level; SVG icons recommended
- Portfolio cards have no CTA or link — dead-end interaction
- Contact form has no real submission logic (setTimeout stub) — UX risk when shipped
- Success state emoji (✅) is inconsistent with agency brand tone

## Standards Established
- Color accent: indigo-500/sky-400 gradient (replacing blue-600 flat)
- Background base: white (#ffffff) with slate-50 alternate sections
- Card style: bg-white shadow-sm border border-slate-100 rounded-2xl
- Button primary: bg-indigo-600 hover:bg-indigo-500 (rounded-full, font-semibold)
- Section labels: text-indigo-500 tracking-widest uppercase text-xs font-semibold
- Body copy: text-slate-600 (not gray-400 — too low contrast on dark, invisible on light)
- Heading color: text-slate-900 on light sections
