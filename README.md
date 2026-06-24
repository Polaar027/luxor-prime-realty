# Luxor Prime Realty

Premium luxury real estate website. Dark blue / gold theme, built on Next.js 16
(App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Zustand.

## What's actually built right now (Phase 1)

- **Interactive Apartment Selector** — `/developments/luxor-tower/select-unit`
  Click a floor, click a unit, see specs (area, beds/baths, view, price),
  request info. This is the core feature and it's fully functional.
- **Lead capture API** — `POST /api/leads`
- Brand theme wired into Tailwind (`app/globals.css` → `@theme`)

Everything else (homepage, development detail pages, admin panel, currency
conversion, financing calculator) is **not built yet** — those come in later
phases.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000/developments/luxor-tower/select-unit

That's it — no database setup needed to see it running. See "Data layer"
below for why.

## Data layer — read this before touching Prisma

`prisma/schema.prisma` is the real, intended schema. But right now the app
does **not** use Prisma at runtime — it uses an in-memory JSON store at
`lib/data/repository.ts`, seeded from `lib/data/seed-data.ts`.

Why: in the sandbox this was built in, outbound network access is restricted
and `npx prisma generate` cannot reach `binaries.prisma.sh` to download its
query engine. That's a sandbox-specific limitation, not a problem with your
machine — on a normal connection this works fine.

To switch to real Postgres on your machine:

```bash
cp .env.example .env
# edit .env with a real DATABASE_URL (Neon, Supabase, or local/Docker Postgres
# all work)
npx prisma generate
npx prisma db push
npx prisma db seed   # not written yet — Phase 2 will add this
```

Then open `lib/data/repository.ts` — every exported function already has the
exact async signature Prisma needs (e.g. `getDevelopmentSelectorData(slug)`
returns the same shape `prisma.development.findUnique(...)` would). Swap each
function body to a real Prisma call. Nothing in `app/` or `components/` needs
to change, since they only ever import from `repository.ts`, never from
`seed-data.ts` directly.

## Project structure

```
app/
  developments/luxor-tower/select-unit/   # the apartment selector page
  api/leads/                              # lead capture route handler
components/
  unit-selector/                          # FloorSelector, FloorPlanView, UnitCell, etc.
lib/
  data/        # repository.ts (the data seam) + seed-data.ts (fixtures)
  stores/      # Zustand store for selector UI state
  types/       # shared DTOs
prisma/
  schema.prisma   # target schema for when DATABASE_URL is real Postgres
```

## Known gaps / next phases

- Admin Panel (manage developments, edit unit status/prices, view leads)
- Homepage (hero, About Us, Featured Developments grid)
- Development Details page (gallery, amenities, map)
- Currency conversion (BRL/USD/EUR/CAD/GBP/AUD) + financing calculator
- JWT auth for admin routes
- S3 image upload
- `prisma db seed` script
