# Security Engineer Context — Last updated: 2026-05-13, external repo review (agent-skill-creator) + prior aidesigncanarias findings

## Security Model (aidesigncanarias — primary project)
- Public-facing marketing site + chat widget + contact form
- No user accounts or sessions — anonymous public users only
- Trust boundary: all API routes treat caller as untrusted
- Auth mechanism: none (no user auth); IP-based rate limiting only
- Secrets: ANTHROPIC_API_KEY, RESEND_API_KEY stored in .env.local (gitignored)

## Security Model (agent-skill-creator — external review)
- Public installable AI skill; no auth, no server, no user accounts
- Trust boundary: user explicitly clones repo and runs shell scripts
- No secrets of its own; scans for leaked secrets in generated output
- Python stdlib only — zero pip dependencies (no supply-chain risk)

## What Has Been Reviewed

### aidesigncanarias
- /app/api/chat/route.ts — flagged: XSS in Chat.tsx, no body parse guard, missing CSP
- /app/api/contact/route.ts — flagged: HTML injection in email body, no replyTo validation
- /lib/ratelimit.ts — flagged: IP spoofing via X-Forwarded-For, unbounded Map
- /next.config.ts — flagged: no CSP, missing HSTS

### agent-skill-creator (github.com/FrancyJGLisboa/agent-skill-creator)
- scripts/bootstrap.sh, install.sh — APPROVED with notes
- scripts/install-skill.sh — FLAGGED: clones arbitrary git URLs, no domain allowlist
- scripts/install-template.sh — APPROVED
- scripts/security_scan.py, validate.py, skill_registry.py — APPROVED
- scripts/staleness_check.py — FLAGGED: makes outbound HTTP to URLs from SKILL.md (SSRF vector)
- scripts/export_utils.py — APPROVED (subprocess without shell=True)
- SKILL.md — FLAGGED: prompt injection surface (instructs agent to follow untrusted links/files)

## Active Findings

### aidesigncanarias (unresolved from prior review)
1. [CRITICAL] HTML injection / stored XSS in contact email — contact/route.ts:45-52
2. [HIGH] IP spoofing bypasses rate limiter — ratelimit.ts:33-35
3. [HIGH] Missing Content-Security-Policy header — next.config.ts
4. [HIGH] No body-parse error handling — both API routes
5. [MEDIUM] Unbounded in-memory Map — ratelimit.ts:6
6. [MEDIUM] replyTo accepts arbitrary value — contact/route.ts:53

### agent-skill-creator (new, external)
7. [MEDIUM] Prompt injection via untrusted workflow input in SKILL.md
8. [MEDIUM] install-skill.sh clones arbitrary git URLs to ~/.agents/skills/ with no allowlist
9. [LOW] staleness_check.py makes outbound HTTP HEAD/GET to skill-author-controlled URLs

## Accepted Residual Risks
- In-memory rate limiter resets on cold start: acceptable for low-traffic agency site
- Prompt injection in agent-skill-creator: inherent to any AI skill processing untrusted docs; mitigable only by operator sandboxing
- Outbound HTTP in staleness_check.py is opt-in (--check-deps / --check-drift flags)

## Security Patterns Established (aidesigncanarias)
- Input validated server-side via sanitize() and explicit type checks
- Errors returned without stack traces
- .env.local gitignored; secrets not in source
- Rate limiting applied before body parsing

## Next Review Priorities
- aidesigncanarias: HTML-escape contact form fields before email interpolation (critical)
- aidesigncanarias: Harden getIP() against X-Forwarded-For spoofing
- aidesigncanarias: Add CSP and HSTS headers
- agent-skill-creator: Verify {{SKILL_NAME}} substitution in install-template.sh cannot inject shell metacharacters into generated install.sh
- agent-skill-creator: Check if staleness_check.py urlopen follows redirects without limit
