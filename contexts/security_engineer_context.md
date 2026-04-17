# Security Engineer Context — Last updated: 2026-04-17, initial review

## Security Model
- Public-facing marketing site + chat widget + contact form
- No user accounts or sessions — anonymous public users only
- Trust boundary: all API routes treat caller as untrusted
- Auth mechanism: none (no user auth); IP-based rate limiting only
- Secrets: ANTHROPIC_API_KEY, RESEND_API_KEY stored in .env.local (gitignored)
- IP whitelist via WHITELISTED_IPS env var for chat endpoint only

## What Has Been Reviewed
- /app/api/chat/route.ts — Anthropic API proxy with rate limiting (flagged: XSS in Chat.tsx, no body parse error guard, unconstrained role injection, missing Content-Security-Policy)
- /app/api/contact/route.ts — Resend email sender (flagged: stored XSS via HTML injection in email body, no replyTo validation beyond length, missing body parse guard)
- /lib/ratelimit.ts — In-memory rate limiter (flagged: IP spoofing via X-Forwarded-For, memory leak from unbounded Map, no fallback for unknown IP)
- /next.config.ts — Security headers (flagged: no Content-Security-Policy, missing HSTS, missing CORP/COEP)
- /app/components/Chat.tsx — Chat widget (flagged: AI reply rendered as text — safe; no client-side length enforcement)
- /app/components/Contact.tsx — Contact form (flagged: no client-side length guards matching server limits)

## Active Findings
1. [CRITICAL] HTML injection / stored XSS in contact email — contact/route.ts:45-52
2. [HIGH] IP spoofing bypasses rate limiter — ratelimit.ts:33-35
3. [HIGH] Missing Content-Security-Policy header — next.config.ts
4. [HIGH] No body-parse error handling — both API routes, unhandled JSON.parse throws 500
5. [MEDIUM] Unbounded in-memory Map — ratelimit.ts:6, memory leak / DoS on serverless restart
6. [MEDIUM] replyTo accepts arbitrary value — contact/route.ts:53, email header injection vector
7. [MEDIUM] Missing HSTS header — next.config.ts
8. [LOW] No client-side length cap on chat input — Chat.tsx
9. [LOW] Unused WHITELISTED_IPS bypass not applied to contact endpoint

## Accepted Residual Risks
- In-memory rate limiter resets on cold start (serverless): acceptable for a low-traffic agency site; upgrade to Redis/Upstash if traffic grows
- No CAPTCHA: acceptable at current scale; reconsider if bot submissions become a problem

## Security Patterns Established
- Input validated server-side via sanitize() and explicit type checks
- Errors returned as user-friendly Spanish strings without stack traces
- .env.local gitignored; secrets not in source
- Rate limiting applied before body parsing on both routes

## Next Review Priorities
- Add Content-Security-Policy (requires knowing inline script usage)
- Harden getIP() against spoofing (x-real-ip, cf-connecting-ip, or trust-proxy config)
- Add try/catch around request.json() on both routes
- HTML-escape all user fields before interpolating into email HTML
- Add HSTS header
