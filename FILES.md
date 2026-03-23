# FILES.md

# Structural and Architectural Index for AI-Assisted Development

## Scope and Status

This document is a complete structural and architectural index for the current repository state.

IMPORTANT CONTEXT:

- The current repository is a **Next.js App Router frontend template**, not an implemented NestJS backend.
- NestJS-specific files and constructs requested by a generic NestJS template specification are documented here as `NOT PRESENT` rather than inferred.
- AI systems MUST treat `NOT PRESENT` as a hard fact and MUST NOT fabricate missing backend architecture.

---

## 1) High-Level Overview

## Purpose of the Application

- Provide a minimal, editable TypeScript starter for a web UI built on Next.js App Router.
- Centralize user-facing content in a typed content module (`content/content.ts`).
- Use shadcn/Radix primitives and Tailwind for UI composition.
- Offer lightweight local automation scripts for section scaffolding and environment bootstrap.

## Core Architectural Style

- **Frontend-first modular composition**:
  - Route layer: `app/`
  - Presentation layer: `components/`
  - Content/config layer: `content/`
  - Shared utility layer: `lib/`
  - Local tooling layer: `scripts/`
- **Not layered as NestJS module/controller/service architecture** in current state.
- **Not domain-driven backend architecture** in current state.

## Key Technologies Used (Current State)

| Category | Technology | Status |
|---|---|---|
| Web framework | Next.js 15 (App Router) | Active |
| Language | TypeScript | Active |
| UI | React 19 | Active |
| Styling | Tailwind CSS + CSS variables | Active |
| Component primitives | Radix UI + shadcn patterns | Active |
| Theme management | `next-themes` | Active |
| Build/runtime | Node.js + pnpm scripts | Active |
| Backend framework | NestJS | NOT PRESENT |
| ORM | Prisma / TypeORM | NOT PRESENT |
| API style | REST / GraphQL backend API | NOT PRESENT |
| Queue system | BullMQ | NOT PRESENT |
| Cache layer | Redis | NOT PRESENT |

## Data Flow (Current)

1. Route entry in `app/page.tsx` renders page composition.
2. Feature components (`Navbar`, `HeroSection`) call `getContent()` from `content/content.ts`.
3. UI primitives (`components/ui/*`) render style/system-level controls.
4. Styling is resolved through Tailwind classes and `app/globals.css` CSS variables.
5. No server-side database/API pipeline exists in repository.

---

## 2) Application Entry Points

The requested NestJS entry points are not present. Equivalent application entry points are below.

## NestJS Entry Points (Requested)

- `main.ts`: **NOT PRESENT**
- `app.module.ts`: **NOT PRESENT**

## Actual Runtime Entry Points

### `app/layout.tsx`

Role:

- Root layout wrapper for all routes.
- Imports global CSS.
- Defines static page metadata.
- Wraps application in `ThemeProvider`.

Behavior:

- Creates `<html lang="en" suppressHydrationWarning>` boundary.
- Applies Inter font class to `<body>`.
- Configures theme behavior (`attribute="class"`, system theme support).

### `app/page.tsx`

Role:

- Root home route implementation.
- Composes `Navbar`, `HeroSection`, and static footer CTA block.

Behavior:

- No data fetching.
- No server actions.
- No backend API calls.

## Global Pipes / Guards / Interceptors / Filters / Middleware

- NestJS global pipeline concepts: **NOT PRESENT**.
- Next.js middleware file (`middleware.ts`): **NOT PRESENT**.
- Global request validation/auth middleware in repository: **NOT PRESENT**.

---

## 3) Module Index

NestJS module structure is not implemented. This section maps equivalent logical modules in this repository.

| Logical Module | Directory Path | Responsibility | Type | Public Surface | Internal Surface | Imports/Exports |
|---|---|---|---|---|---|---|
| App Router | `app/` | Route and layout composition | Feature | `layout.tsx`, `page.tsx` | n/a | Imports components and styles |
| UI Components | `components/` | Feature-level presentational components | Feature | Named component exports | Component internals | Imports `content`, `ui`, icons |
| UI Primitives | `components/ui/` | Reusable primitive controls (button, sheet, etc.) | Shared | Primitive component exports | Variant internals | Imports `lib/utils`, Radix |
| Theme System | `components/theme/` | Theme provider and toggle UI | Shared/infrastructure | `ThemeProvider`, `ThemeToggle` | Theme toggle internals | Imports `next-themes` |
| Content Contract | `content/` | Typed app copy/content contract | Shared domain-content | `getContent()`, exported types | `defaultContent` object internals | Imported by feature components |
| Utilities | `lib/` | Shared utility functions | Shared | `cn()` | n/a | Used by UI primitives and theme toggle |
| Scripts | `scripts/` | Local automation and scaffolding | Infrastructure | CLI entrypoints via `node` | Script internals | Uses Node built-ins |

NestJS `@Module` metadata (`imports/providers/controllers/exports`): **NOT PRESENT**.

---

## 4) Controllers

NestJS controllers are not implemented.

- `@Controller()` classes: **NOT PRESENT**
- Route prefixes/endpoints defined in Nest controller decorators: **NOT PRESENT**
- Request/response DTO usage in controllers: **NOT PRESENT**
- Nest guards/interceptors/decorators on endpoints: **NOT PRESENT**

Equivalent request handling model in current repo:

- Next.js page route at `app/page.tsx` (render-only route component).
- No REST handlers under `app/api/*`.

---

## 5) Services & Providers

NestJS service/provider graph is not implemented.

- `@Injectable()` providers: **NOT PRESENT**
- DI scopes (`singleton`, `request`, `transient`) via Nest container: **NOT PRESENT**

Equivalent reusable logic providers in current repo:

| File | Responsibility | Dependencies | Side Effects | Lifecycle |
|---|---|---|---|---|
| `content/content.ts` | Provides typed static content through `getContent()` | None | None | Module singleton (static in process) |
| `lib/utils.ts` | Class name merge utility `cn` | `clsx`, `tailwind-merge` | None | Pure stateless function |
| `components/theme/theme-provider.tsx` | Wraps `NextThemesProvider` | `next-themes`, React | DOM/theme class mutation by next-themes at runtime | Client component singleton per render tree |
| `scripts/generate-section.mjs` | Creates new section component file | Node `fs`, `path`, `url` | Writes file to `components/` | One-off CLI process |
| `scripts/setup-env.mjs` | Creates `.env.local` if missing | Node `fs`, `path`, `url` | Writes `.env.local` | One-off CLI process |

---

## 6) Data Layer

Backend data layer is not implemented in current repository.

## ORM/ODM and Configuration

- Prisma: **NOT PRESENT** (`prisma/` directory absent)
- TypeORM: **NOT PRESENT**
- Database connection config: **NOT PRESENT**

## Entities / Models

- Database entities/models: **NOT PRESENT**
- Domain content model exists as TypeScript types in `content/content.ts`.

## Repositories / Query Layer

- Repository classes/custom query layers: **NOT PRESENT**

## Transactions and Migrations

- Migration system: **NOT PRESENT**
- Transaction strategy: **NOT PRESENT**

## Current Persistency Strategy

- In-memory static content object only.
- No persistent data store.

---

## 7) DTOs, Schemas & Validation

## DTO Location and Role

- Nest DTO classes: **NOT PRESENT**
- Equivalent typed content contracts:
  - `HeroContent`
  - `NavbarContent`
  - `SiteContent`
  - All located in `content/content.ts`

## Validation Strategy

- `class-validator`: **NOT PRESENT**
- Zod/Joi runtime schema validation: **NOT PRESENT**
- Compile-time safety provided by TypeScript strict mode (`tsconfig.json: "strict": true`).

## Mapping Strategy

- There is no DTO → entity mapping layer.
- Current mapping is direct:
  - `getContent()` returns `SiteContent`
  - components read typed properties directly

---

## 8) Cross-Cutting Concerns

## Authentication & Authorization

- Authentication system: **NOT PRESENT**
- Authorization guards: **NOT PRESENT**

## Guards, Interceptors, Pipes, Filters

- NestJS global/per-route mechanisms: **NOT PRESENT**

## Logging, Tracing, Monitoring

- Structured logging framework: **NOT PRESENT**
- Distributed tracing: **NOT PRESENT**
- Metrics instrumentation: **NOT PRESENT**

## Error Handling Strategy

- Runtime errors rely on default Next.js/React behavior.
- CLI scripts print usage/errors and exit with non-zero status where applicable.

## Theme as Cross-Cutting Runtime Concern

- `ThemeProvider` in `app/layout.tsx` applies theme class behavior globally.
- `ThemeToggle` provides client-triggered dark/light switching.

## Security Boundary Notes

- No auth, backend, or secret manager exists.
- `.env*.local` is ignored by git via `.gitignore`.

---

## 9) Configuration & Environment

## Configuration Files

| File | Purpose |
|---|---|
| `package.json` | Scripts and dependency graph |
| `tsconfig.json` | TypeScript compiler settings, alias config |
| `next.config.mjs` | Next.js configuration object |
| `tailwind.config.ts` | Tailwind theme/content scanning config |
| `postcss.config.mjs` | PostCSS plugin configuration |
| `components.json` | shadcn/ui generator configuration |
| `.gitignore` | VCS ignore patterns including local env |

## Environment Variables

- Canonical env contract file (`env.example`): **NOT PRESENT**.
- Helper script exists: `scripts/setup-env.mjs` creates `.env.local` with placeholder comments.
- Active env keys are not required by current runtime code.
- `DATABASE_URL` is reserved for future DB enablement and is not required by current runtime paths.

## Secrets Management Strategy (Current)

- Local-only env files (`.env*.local`) are ignored.
- No production secret provider integration is configured.

## CRITICAL NOTE: `postcss.config.mjs` Integrity Risk

- `postcss.config.mjs` contains valid PostCSS config **plus obfuscated appended code**.
- Treat this file as **high-risk** until reviewed and sanitized.
- AI MUST NOT execute or modify obfuscated payload blindly.

---

## 10) Async & Background Processing (If Applicable)

- BullMQ queues/workers: **NOT PRESENT**
- Redis-backed jobs: **NOT PRESENT**
- Schedulers/cron: **NOT PRESENT**
- Message brokers (Kafka/RabbitMQ/NATS/SQS): **NOT PRESENT**
- Event bus/event handlers: **NOT PRESENT**

Current asynchronous behavior:

- Client-side theme toggling via `next-themes`.
- Build/runtime tooling handled by Next.js toolchain.

## Future Infrastructure Placeholder

- `scripts/db-init.js` and `.github/workflows/init-db.yml` are retained for future database onboarding.
- They are non-functional by design until DB artifacts (`drizzle/` or equivalent schema/migrations) are added.

---

## 11) Testing Structure

- Unit test directories/files: **NOT PRESENT**
- Integration tests: **NOT PRESENT**
- E2E tests: **NOT PRESENT**
- Test utilities/mocks: **NOT PRESENT**

## Safe Test Extension Guidance

When adding tests, enforce this structure:

- Unit tests close to source or under `tests/unit/`.
- Integration tests under `tests/integration/`.
- E2E tests under `tests/e2e/` with explicit env bootstrapping.
- Keep fixtures deterministic and avoid hidden network dependencies.

---

## 12) File & Directory Index

Complete source index for tracked project files and directories (excluding `.git/` and `node_modules/` contents).

```text
.
├── .gitattributes                     # Git attribute normalization rules
├── .gitignore                         # Ignore rules for build artifacts, env-local files, and misc local state
├── FILES.md                           # Structural and architectural index (this file)
├── README.md                          # Primary operational manual for repository behavior and AI safety rules
├── RULES.md                           # Project-level coding conventions and change workflow rules
├── app/                               # Next.js App Router route and layout layer
│   ├── globals.css                    # Global Tailwind layers and CSS variable theme tokens
│   ├── layout.tsx                     # Root layout, metadata, font setup, and global ThemeProvider wrapper
│   └── page.tsx                       # Home route composition: Navbar + HeroSection + footer CTA block
├── components/                        # Feature-level and shared UI component layer
│   ├── HeroSection.tsx                # Main hero content section using typed content source and button primitives
│   ├── Navbar.tsx                     # Header/brand component reading typed navbar content
│   ├── theme/                         # Theme system client components
│   │   ├── theme-provider.tsx         # Thin wrapper around next-themes provider
│   │   └── theme-toggle.tsx           # Client toggle control for dark/light theme switching
│   └── ui/                            # shadcn/Radix-based reusable primitives (do not modify casually)
│       ├── badge.tsx                  # Badge primitive with variant classes via cva
│       ├── button.tsx                 # Button primitive with variants/sizes and optional Slot rendering
│       ├── separator.tsx              # Separator primitive wrapper around Radix separator
│       └── sheet.tsx                  # Sheet/dialog primitive set built on Radix dialog
├── components.json                    # shadcn component generator config, aliases, and Tailwind mapping
├── content/                           # Typed content and copy contract
│   └── content.ts                     # Site content types, defaults, and accessor function (`getContent`)
├── lib/                               # Shared utility functions
│   └── utils.ts                       # `cn()` helper combining clsx and tailwind-merge
├── next.config.mjs                    # Next.js config module (currently minimal)
├── package-lock.json                  # Legacy npm lockfile retained from earlier workflow
├── package.json                       # Package scripts and dependency declarations
├── pnpm-lock.yaml                     # Primary lockfile for deterministic pnpm installs
├── postcss.config.mjs                 # PostCSS plugin config; currently includes suspicious appended obfuscated code
├── scripts/                           # Local automation utilities
│   ├── generate-section.mjs           # CLI scaffold for new section component templates
│   └── setup-env.mjs                  # CLI helper to create `.env.local` placeholder file
├── tailwind.config.ts                 # Tailwind config: content globs, theme extension, typography plugin
└── tsconfig.json                      # TS strict compiler config and alias mapping (`@/*`)
```

## Expanded Critical File Descriptions

### `README.md`

- Defines operational safety policies and AI behavior constraints.
- Should be treated as high-authority operational documentation.

### `content/content.ts`

- Primary non-UI domain artifact in current repo.
- Defines content schema and defaults used by UI components.
- First edit location for changing displayed copy and section content model.

### `app/page.tsx`

- Route composition root.
- First edit location for changing page-level assembly and section order.

### `components/ui/*`

- Shared primitives generated/adapted from shadcn patterns.
- Changes here can create broad regressions across all features.
- Modify only when a primitive-level behavior change is explicitly intended.

### `postcss.config.mjs`

- Contains expected PostCSS config header and unexpected obfuscated payload.
- Must be security-reviewed before trusting build behavior.

---

## 13) How to Modify This Codebase Safely

## Where to Add New Features

1. Add/update content contract in `content/content.ts` first.
2. Add feature component in `components/` (PascalCase, named export).
3. Compose new feature in `app/page.tsx`.
4. Reuse primitives in `components/ui/` rather than duplicating control logic.
5. Use `scripts/generate-section.mjs` for section scaffolding when appropriate.

## Where NOT to Make Changes

- Do not casually edit `components/ui/*` for feature-specific styling hacks.
- Do not place user-facing copy directly inside components when it belongs in `content/content.ts`.
- Do not add backend assumptions (controllers/services/entities) without creating real backend files.
- Do not trust or preserve obfuscated code in `postcss.config.mjs` without security review.

## How to Trace a Request (Equivalent Flow in Current Repo)

There is no NestJS HTTP request chain. Use this render/data trace instead:

1. Route component entry: `app/page.tsx`
2. Component composition: `Navbar`, `HeroSection`
3. Data source read: `getContent()` in `content/content.ts`
4. UI primitives and class helpers: `components/ui/*` + `lib/utils.ts`
5. Global theming: `app/layout.tsx` + `components/theme/theme-provider.tsx`

## How to Identify All Files Related to a Feature or Bug

For content bugs:

- `content/content.ts`
- The consuming section component under `components/`
- `app/page.tsx` placement

For styling bugs:

- Target component file
- `app/globals.css`
- `tailwind.config.ts`
- Relevant primitive under `components/ui/`

For theme bugs:

- `components/theme/theme-provider.tsx`
- `components/theme/theme-toggle.tsx`
- `app/layout.tsx`
- `app/globals.css`

For build/config bugs:

- `package.json`
- `next.config.mjs`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `tsconfig.json`

## Common Pitfalls to Avoid (Including NestJS Assumption Pitfalls)

- Assuming NestJS runtime exists when it does not.
- Creating docs that reference nonexistent controllers/services/modules as if implemented.
- Skipping typed content contract and hardcoding strings into components.
- Editing shared primitive files for one-off feature appearance.
- Ignoring suspicious config payloads in build-critical files.
- Making broad structural rewrites when minimal targeted changes are sufficient.

## If Converting This Template into a Real NestJS Backend Stack

Create explicitly (do not infer):

- `src/main.ts`
- `src/app.module.ts`
- Feature modules under `src/modules/*`
- Controllers, services, DTOs, and validation strategy
- ORM config (`prisma/` or TypeORM equivalent)
- Auth module and guards
- Test harness (`test/` unit/integration/e2e)

Until those files exist, AI MUST treat backend architecture as unimplemented.
