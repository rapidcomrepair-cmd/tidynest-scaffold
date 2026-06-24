# TidyNest — Claude Code Instructions

## Project Overview
TidyNest is a home cleaning service platform with two sides:
1. **Customer-facing site** (this repo) — marketing, service info, and online booking
2. **Employee portal** (future) — job assignments, GPS, time clock, pay stubs, client management

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL + row-level security)
- **Email**: Resend (booking confirmations, reminders)
- **SMS**: Twilio (optional — appointment reminders)
- **Styling**: Tailwind CSS v4 with custom TidyNest design tokens
- **Hosting**: Vercel

## Design System
Colors defined in `app/globals.css`:
- `--lime`: #C8F135 (primary accent — CTAs, highlights)
- `--lime-dark`: #a8cc1a
- `--navy`: #0F1B2D (backgrounds, text)
- `--navy-mid`: #1E2F45
- `--teal`: #14B8A6 (secondary accent)
- `--teal-light`: #CCFBF1

Fonts: Syne (headings, 800 weight) + DM Sans (body)

## Project Structure
```
app/
  page.tsx          # Home — hero, stats, why us, testimonials
  about/            # About — story, team, values
  services/         # Services — pricing cards, add-ons
  book/             # Booking form (client component, interactive)
  faq/              # FAQ accordion (client component)
  contact/          # Contact form + info
  api/
    bookings/       # POST (create booking), GET (list bookings)
components/
  Nav.tsx           # Fixed top nav with active link detection
  Footer.tsx        # Site footer
lib/
  supabase.ts       # Supabase client (browser + server)
  utils.ts          # cn(), calculatePrice()
types/
  index.ts          # BookingRequest, ServiceType, BookingExtra, LivingArea
supabase/
  migrations/
    001_bookings.sql  # Bookings table + RLS policies
```

## Key Business Rules
- Bookings are stored in Supabase `bookings` table with status: pending → confirmed → completed
- Price calculation in `lib/utils.ts:calculatePrice()` — base by service type + room extras
- All booking submissions hit `/api/bookings` (POST) with Zod validation
- RLS: anyone can INSERT a booking; only service_role can read/manage them (employee portal)

## Services & Pricing
- Standard Clean: $99 base
- Deep Clean: $179 base
- Move-In/Out: $249 base
- Extras: pets +$25, dishes +$20, fridge +$30, oven +$35, windows +$40, laundry +$45, linens +$20, cabinets +$30
- Bed/bath surcharges: see `lib/utils.ts`

## Coding Conventions
- TypeScript strictly — no `any`
- Server components by default; `"use client"` only when needed (forms, interactivity)
- API routes validate with Zod before touching database
- CSS: use inline `style={{ ... }}` with CSS variables for design tokens, Tailwind for layout/spacing
- No dark mode (customer site is always light/navy branded)

## Current Focus (MVP)
1. Customer-facing marketing site ✓
2. Online booking form with live price estimate ✓
3. Supabase bookings table ✓
4. Employee portal (next phase)
