# Sensing Landing Page

## Project
Marketing website for Sensing — cold chain monitoring solution targeting public health professionals (coordenadores de vigilância, gestores de UBS/UPA) in Brazil.

## Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS v4
- TypeScript
- Resend (email delivery for contact form)

## Local Development
```
cd site/
npm install
npm run dev
```

## Deployment
- Hosted on **Vercel** (auto-deploys on push to `main`)
- Repo: `github.com/sensinglive/landing26`
- GitHub org: `sensinglive` (owner: `sensera-tech` account)
- Vercel team: SDCreation (Hobby plan, linked via `danielavrella` GitHub account)

### Environment Variables (Vercel)
- `RESEND_API_KEY` — Resend API key
- `CONTACT_EMAIL` — comma-separated recipient emails for form submissions

## Design Source
- Pencil file: `../sensing lp-03-2026` (same parent directory as `site/`)
- Design tokens are defined in `app/globals.css` under `@theme`
- Fonts: Geist (body), Geist Mono (headings/display)
- Color palette: light gray bg (#E8E9EB), teal cards (#0D4F4F, #147A7A, #2AB5B0), dark (#1A1A1A)

## Domain
- Production: `sensing.live` (DNS on GoDaddy)

## Pages
- `/` — Landing page (hero, risk, solutions, ecosystem, public sector, platform stats, CTA form, footer)
- `/solucoes` — Soluções internal page (use cases, how-it-works, stats)
- `/datasheet` — Technical specifications (hardware, SaaS, WhatsApp API, mesh topology)
- `/termos` — Termos de Uso (legal, 12 sections, LGPD-compliant). Company details are placeholders — replace [RAZÃO SOCIAL], [CNPJ], [ENDEREÇO]

## Reusable Section Components
Located in `app/components/sections/`:
- `SectionHeader` — micro label + title + description (light/dark, size variants)
- `CardGrid` — teal feature cards (dark/mid/light)
- `StepsList` — numbered steps with dividers
- `StatsBar` — stat cards row (responsive 2x2 grid on mobile)
- `DarkCTA` — dark background CTA section
- `SpecTable` — two-column spec table for datasheet content

## Contact Form
- Frontend: `app/components/CTASection.tsx`
- API route: `app/api/contact/route.ts`
- Uses Resend with `onboarding@resend.dev` as sender (free tier — only delivers to Resend signup email)
- Supports multiple recipients via comma-separated `CONTACT_EMAIL`

## Audience & Copy Tone
Target audience is technical professionals in Brazilian public health. Copy is compliance-first (Anvisa, RDC 430, rastreabilidade) — not emotional/consumer-grade. Avoid language like "sleep well" or "protect your stock" in favor of audit readiness, fiscal accountability, and operational reliability.
