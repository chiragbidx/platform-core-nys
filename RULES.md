# RULES.md — Change Boundaries & Placement (Current Repo)

This repository is a **Next.js App Router frontend starter** with typed content contracts and shadcn-based UI primitives.

The current codebase does **not** include NestJS, dashboard/auth flows, database models, route handlers, Prisma/Drizzle schemas, background workers, or middleware guards.

If requested work assumes those systems, stop and align scope before editing.

## 1) Source of Truth and Scope

- This file defines placement and change boundaries for code edits.
- `README.md` is the operational manual; use it with this file.
- `FILES.md` is the structural index; use it to locate edit targets.
- If requirements conflict with current repository reality, do not infer missing systems.

## 2) Routing & Placement

### Route Ownership

- Root route composition lives in `app/page.tsx`.
- Global shell and providers live in `app/layout.tsx`.
- Global style tokens and base styles live in `app/globals.css`.

### Component Placement

- Feature/presentation sections live in `components/`.
- Theme helpers live in `components/theme/`.
- Shared primitives live in `components/ui/`.
- Utility helpers live in `lib/`.

### Content Placement

- User-facing copy belongs in `content/content.ts`.
- Keep content keys and exported type contracts stable unless explicitly changing schema.
- Components should consume content via `getContent()`.

### Script Placement

- Local automation scripts live in `scripts/`.
- Current scripts:
  - `scripts/db-init.js` (future DB bootstrap; inactive until DB stack is added)
  - `scripts/dev-supervisor.js`
  - `scripts/git-poll.js`
  - `scripts/commandRunner.js`
  - `scripts/error-reporter.ts`
  - `scripts/generate-section.mjs`
  - `scripts/setup-env.mjs`

## 3) Component Ownership Map (Edit Targets)

- Home layout/composition/order: `app/page.tsx`
- Root metadata/theme wrapper: `app/layout.tsx`
- Global theme/color tokens and base styles: `app/globals.css`
- Hero UI/layout: `components/HeroSection.tsx`
- Navbar branding/labels: `components/Navbar.tsx`
- Theme provider integration: `components/theme/theme-provider.tsx`
- Theme toggle interaction: `components/theme/theme-toggle.tsx`
- Shared class merge helper: `lib/utils.ts`
- Content text and typed content model: `content/content.ts`

## 4) UI Primitive Boundaries

- `components/ui/*` are shared primitives; treat as restricted.
- Do not modify primitives for one-off feature styling.
- Edit `components/ui/*` only when the change is intentionally global and all consumers are validated.
- Prefer passing className/variant props from feature components before altering primitive internals.

## 5) Server vs Client Component Rules (App Router)

1. Files in `app/` are Server Components by default.
2. Add `"use client"` only when required for hooks, browser APIs, or event handlers.
3. Keep server-only concerns (env access, server actions, backend calls) out of client components.
4. Do not import hooks into server components.
5. Avoid mixing client and server concerns in the same file when splitting is clearer.

## 6) Content Contract Rules

- `content/content.ts` is the canonical content contract.
- Preserve exported types unless a schema update is intentional and all consumers are updated.
- For text-only edits, change values only.
- For schema edits:
  1. Update the relevant content type.
  2. Update `SiteContent`.
  3. Update `defaultContent`.
  4. Update all consuming components.

## 7) Script Contract Rules

### `scripts/generate-section.mjs`

- Purpose: scaffold a new `components/<Name>Section.tsx` file.
- Keep generation deterministic.
- Keep output aligned with `content/content.ts` + `app/page.tsx` integration flow.

### `scripts/setup-env.mjs`

- Purpose: create `.env.local` if missing.
- Do not write secrets.
- Keep behavior idempotent.

### Script Change Policy

- Do not modify scripts unless task scope requires script behavior changes.
- Script edits should prioritize clarity and safety, not feature logic.

## 8) Configuration Boundaries

### Allowed Config Touch Points

- `next.config.mjs` for Next.js behavior changes.
- `tsconfig.json` for TypeScript/compiler and alias settings.
- `tailwind.config.ts` for design tokens/plugins/content globs.
- `components.json` for shadcn generator behavior.

### Critical Safety Note

- `postcss.config.mjs` currently contains suspicious appended obfuscated content.
- Treat this as a sensitive file.
- Do not make blind edits to obfuscated segments.
- If PostCSS config is being changed, isolate and preserve known-good config and explicitly remove/replace unsafe payload with review.

## 9) Naming & Conventions

- TypeScript for source files.
- Components: PascalCase filenames (for example `HeroSection.tsx`).
- Content files: camelCase (for example `content.ts`).
- Scripts: kebab-case `.mjs` (for example `setup-env.mjs`).
- Keep one logical change per commit.

## 10) Adding a New Home Section

1. Add/extend content type and defaults in `content/content.ts`.
2. Create `components/<Name>Section.tsx` (or use `node scripts/generate-section.mjs <Name>`).
3. Import and render the section in `app/page.tsx`.
4. Reuse `components/ui/*` primitives instead of duplicating control patterns.

## 11) What Is Not Implemented (Do Not Assume)

The following are **not present** in current repo and must not be referenced as existing contracts:

- NestJS module/controller/service architecture
- Auth routes and session system
- Dashboard route groups
- API route handlers under `app/api/*`
- Database schema/migrations (Prisma/Drizzle)
- Queues/workers/schedulers
- Middleware guards

If work requires these, define and approve explicit implementation scope first.

## 12) Future DB Placeholder Contract

- `scripts/db-init.js` is intentionally kept for future database onboarding.
- `DATABASE_URL` is reserved for future use and is not required for current app runtime.
- Do not wire DB initialization into current default dev/build flows until DB artifacts (schema, migrations, ORM config) are introduced.

## 13) Quick Checks Before Editing

1. Is this change text/content only? Edit `content/content.ts` values.
2. Is this change section layout/UI? Edit target file in `components/`.
3. Is this route composition/layout? Edit `app/page.tsx` or `app/layout.tsx`.
4. Is this primitive-wide behavior? Edit `components/ui/*` only with global intent.
5. Does request assume missing backend/auth/db systems? Stop and clarify before coding.

## 14) Non-Negotiable Rules

- Do not invent missing architecture.
- Do not move files to new structures without explicit scope approval.
- Do not introduce broad rewrites for localized tasks.
- Prefer minimal diffs with clear ownership.
- Keep behavior stable unless change request explicitly requires behavior change.
