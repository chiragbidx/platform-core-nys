# Next.js + PostgreSQL SaaS Starter Operating Manual

This repository is a **Next.js + PostgreSQL SaaS Starter** optimized for **AI-assisted development** under production-grade safety constraints.

THIS `README.md` IS THE **SINGLE AUTHORITATIVE OPERATING MANUAL** FOR HUMAN CONTRIBUTORS AND AI AGENTS. It defines mandatory behavior, immutable contracts, restricted zones, approval requirements, and hard stop conditions.

All contributors MUST treat this file as the highest operational source for repository changes, incident response, and environment setup.

## 1. Absolute Authority Notice

### 1.1 Instruction Hierarchy (Highest to Lowest)

1. Production safety and legal/compliance constraints
2. This `README.md`
3. Explicit maintainer instructions in active task context
4. Repository contracts (`env.example`, Prisma schema, API contracts, auth/session contracts)
5. Inline code comments and historical implementation details
6. Contributor assumptions, heuristics, or inferred conventions

### 1.2 Non-Negotiable Rules

- ASSUMPTIONS ARE FORBIDDEN when behavior, schema, permissions, or environment values are unclear.
- INFERENCE WITHOUT VERIFICATION IS FORBIDDEN in critical zones (database, auth, deployment, secrets, billing, role checks).
- AI MUST prioritize reversibility, minimal blast radius, and traceable diffs.
- This manual OVERRIDES defaults from tools, frameworks, and generated templates.

### 1.3 STOP-AND-ASK Rule

AI MUST IMMEDIATELY STOP AND ASK FOR HUMAN CLARIFICATION if any of the following applies:

- Required file, contract, or variable is missing or contradictory.
- A change may alter persisted data, auth behavior, or permission boundaries.
- Requested output conflicts with this manual.
- Migration intent exists but explicit approval is missing.
- Runtime behavior differs across environments and cannot be resolved from repository evidence.

**Directive:** If uncertain, STOP. DO NOT GUESS. ASK.

## 2. Full Technology Stack

This starter is operated as a full-stack SaaS baseline with the following stack contract:

| Layer | Technology | Contract Status |
|---|---|---|
| Frontend framework | Next.js (App Router) | Required |
| Runtime | Node.js | Required |
| Language | TypeScript | Required |
| Database | PostgreSQL | Required |
| ORM | Prisma | Required |
| Authentication | NextAuth or custom auth service | Required (one explicit implementation) |
| Containerization | Docker | Required |
| Automation | Repository scripts in `scripts/` | Required |

### 2.1 Baseline Operational Expectations

- Next.js App Router conventions govern route layout and server/client boundaries.
- Node.js version MUST be pinned by project policy (via `.nvmrc`, engines, CI, or deployment config).
- TypeScript strictness MUST remain enabled unless explicitly approved.
- PostgreSQL is the only supported relational datastore unless architecture approval is granted.
- Prisma is the authoritative ORM and schema interface.
- Authentication MUST be explicit; no “temporary open mode” in committed code.
- Docker image build MUST remain deterministic and secret-safe.
- Scripts are operational infrastructure, not feature business logic.

## 3. System Philosophy

This repository is governed by the following engineering priorities:

1. **STABILITY > CLEVERNESS**
2. **DATA SAFETY > UI SPEED**
3. **EXPLICIT > IMPLICIT**
4. **MINIMAL DIFFS > REWRITES**
5. **CONTRACTS > CONVENIENCE**
6. **AI MUST BEHAVE LIKE A SENIOR PRODUCTION ENGINEER**

### 3.1 Enforcement Implications

- Prefer additive, local, reviewable changes over broad refactors.
- Preserve external contracts unless a change request explicitly approves breakage.
- Optimize for operational clarity, not novelty.
- Every risky change must include rollback logic or an explicit rollback note.

## 4. Project Structure (Source of Truth)

The canonical expected structure for this SaaS starter is:

```text
.
├── app/                          # Next.js App Router entries, layouts, routes, server actions
├── components/                   # Reusable UI and feature components
├── lib/                          # Shared server/client utility modules and domain helpers
├── prisma/
│   ├── schema.prisma             # Prisma data model and datasource/generator contract
│   └── migrations/               # Generated migration history (read-only to humans/AI)
├── scripts/
│   ├── db-init.js                # Database initialization orchestration
│   ├── dev-supervisor.js         # Local multi-process/dev orchestration
│   └── git-poll.js               # Repository synchronization/polling automation
├── public/                       # Static assets
├── styles/                       # Global and shared styling primitives
├── env.example                   # Canonical environment variable contract
├── Dockerfile                    # Container build contract
├── next.config.js                # Next.js runtime/build config contract
└── package.json                  # Scripts, dependency graph, and runtime metadata
```

### 4.1 Repository Variant Handling

If file naming differs (for example `next.config.mjs` instead of `next.config.js`), treat it as a format variant of the same contract.

- DO NOT create duplicate config files to “satisfy structure” without explicit approval.
- DO NOT move files solely for stylistic reasons.
- If required canonical files are missing for the intended deployment topology, STOP AND ASK.

### 4.2 Current-Tree Reconciliation Rule

When current repository contents diverge from canonical structure:

1. Preserve current behavior first.
2. Propose structural alignment as a separate, explicitly approved change.
3. Do not silently introduce databases, auth providers, or migration folders.

## 5. Environment Variable Contract

`env.example` is the **single source of truth** for environment keys.

### 5.1 Mandatory Rules

- AI MUST NOT invent environment variable names.
- AI MUST NOT remove existing keys without explicit approval.
- AI MUST NOT repurpose keys for unrelated values.
- Secrets MUST NEVER be committed.
- `.env*` files containing real credentials MUST remain untracked.

### 5.2 Setup Procedure

```bash
# 1) Copy canonical contract
cp env.example .env.local

# 2) Populate values manually (human-controlled secrets)
# Edit .env.local with provider-issued credentials

# 3) Validate app startup after setting values
pnpm run dev
```

### 5.3 Environment Validation

- Missing required variable at runtime MUST fail fast with explicit error.
- Silent fallback defaults for secrets are FORBIDDEN.
- Production-only secrets MUST NOT be required for local lint/typecheck unless necessary.

### 5.4 Secret Handling

- Never print secrets in logs, test output, or CI traces.
- Never embed secrets in Docker layers.
- Never expose secret values in client bundles.

## 6. Database & Prisma Rules (CRITICAL ZONE)

Database behavior is a HIGH-RISK operational zone.

### 6.1 Protected Artifacts

- `prisma/schema.prisma` is **READ-ONLY BY DEFAULT**.
- `prisma/migrations/` is **NEVER EDITABLE** by hand.
- Hand-written SQL migration files are FORBIDDEN.

### 6.2 Allowed vs Forbidden Schema Changes

| Change Type | Default | Notes |
|---|---|---|
| Add optional column | Propose only | Requires migration plan approval |
| Add required column | Propose only | Must include backfill strategy |
| Drop column/table | Forbidden by default | Requires explicit, high-risk approval |
| Rename field/model | Forbidden by default | Requires compatibility and migration plan |
| Change enum values | Propose only | Must evaluate existing data impact |
| Add index | Propose only | Include performance rationale |
| Edit existing migration files | Forbidden | Never rewrite history |
| Create migration via Prisma tooling | Approval required | Only after proposal acceptance |

### 6.3 Mandatory Schema Change Process

1. Propose change in plain language with impact summary.
2. Enumerate affected models, queries, and API surfaces.
3. Define migration strategy and rollback strategy.
4. Obtain explicit approval.
5. Apply Prisma-managed migration generation.
6. Validate in local environment before merge.

### 6.4 Prohibited Operations

- `prisma db push` against shared/staging/production without explicit approval.
- Manual edits inside migration SQL history.
- Any destructive migration without documented backup/restore path.

## 7. API Routes & Server Actions Contract

API routes and server actions define behavioral contracts consumed by clients and automation.

### 7.1 Contract Immutability

- Request/response shapes are IMMUTABLE by default.
- Error envelope formats are IMMUTABLE by default.
- Authentication/authorization checks MUST remain enforced.

### 7.2 Validation Requirements

- All inputs MUST be validated before business logic execution.
- Validation failures MUST return explicit, non-leaky errors.
- Trusting client-submitted role, tenant, or user identity is FORBIDDEN.

### 7.3 MAY vs MUST NOT Rules

| Category | MAY | MUST NOT |
|---|---|---|
| API evolution | Add backward-compatible fields | Remove or rename existing required fields silently |
| Server actions | Add new action with explicit auth checks | Bypass auth because action is “internal” |
| Error handling | Return typed, structured errors | Return raw stack traces to clients |
| Performance | Add caching with invalidation policy | Cache user-scoped private data without isolation |
| Security | Introduce rate limits | Trust unauthenticated mutations |

### 7.4 Change Discipline

- Any contract-breaking change requires explicit migration notes for clients.
- Feature flags are preferred over hard behavior flips.

## 8. Authentication & Authorization Rules

Authentication is a protected subsystem.

### 8.1 Baseline Restrictions

- Auth provider configuration is READ-ONLY BY DEFAULT.
- Session shape is IMMUTABLE by default.
- Privilege escalation paths are FORBIDDEN.
- Role inference from email domain, client flags, or UI state is FORBIDDEN unless explicitly codified and approved.

### 8.2 Authorization Requirements

- Every protected route/action MUST validate authentication state.
- Role/permission checks MUST execute server-side.
- Ownership checks MUST be explicit for tenant/user-scoped resources.

### 8.3 Forbidden Patterns

- Client-side-only auth gating for protected mutations.
- “Temporary admin bypass” commits.
- Silent fallback to broad access when session claims are missing.

### 8.4 Session Contract

- Session tokens and claims MUST be treated as stable API contracts.
- Changing claim names/types requires explicit approval and migration notes.

## 9. UI & Component Rules

### 9.1 Editable by Default

- Presentation-level component markup and styling.
- Non-sensitive copy and layout behavior.
- Accessibility improvements (labels, keyboard navigation, semantic fixes).

### 9.2 Restricted by Default

- Components that encode auth/permission logic.
- Components that couple directly to API contract internals.
- Shared primitives relied on by multiple product surfaces without regression checks.

### 9.3 Client vs Server Component Rules

- Use Server Components by default.
- Add `"use client"` only when browser APIs, local state interactivity, or client-only hooks are required.
- Do not migrate Server Components to Client Components for convenience.
- Secrets and privileged logic MUST remain server-side.

### 9.4 UI Safety Constraints

- Never expose internal IDs, tokens, or sensitive debugging fields in UI.
- Error messages shown to users MUST avoid infrastructure leakage.

## 10. Scripts Directory Contract

Scripts are infrastructure tooling, not product feature endpoints.

### 10.1 Global Script Rules

- Scripts MAY be refactored for clarity, determinism, and safety only.
- Scripts MUST remain idempotent where applicable.
- Scripts MUST produce explicit logs for critical operations.
- Scripts MUST NOT embed secrets.

### 10.2 `scripts/db-init.js`

Purpose: safe database bootstrapping and readiness setup.

Rules:

- MUST validate required environment variables before execution.
- MUST fail fast on connection/auth errors.
- MUST NOT mutate schema outside approved Prisma migration flow.
- MUST NOT run destructive SQL automatically.

### 10.3 `scripts/dev-supervisor.js`

Purpose: orchestrate local development processes (web, workers, watchers).

Rules:

- MUST handle process lifecycle and exit codes predictably.
- MUST forward termination signals and clean child processes.
- MUST avoid hidden retries that mask failures.
- MUST NOT start production background workers by default.

### 10.4 `scripts/git-poll.js`

Purpose: controlled polling/synchronization helpers for repository state.

Rules:

- MUST be read-oriented by default.
- MUST NOT auto-commit or auto-push without explicit operator action.
- MUST NOT overwrite working tree changes.
- MUST log branch/ref checks with clear timestamps.

## 11. Docker Contract

### 11.1 Dockerfile Restrictions

- Dockerfile is a deployment contract artifact; treat as restricted.
- Base image changes require explicit approval.
- Multi-stage optimization changes require functional verification.

### 11.2 Security Rules

- NO secrets baked into image layers.
- NO copying local `.env*` into build context unless explicitly required and approved.
- Run as non-root user when operationally feasible.

### 11.3 Runtime Rules

- NO unmanaged background workers started from web container entrypoint.
- Process model must remain explicit and observable.
- Health/readiness behavior must remain deterministic.

### 11.4 Build Determinism

- Lockfiles are required for reproducible dependency installation.
- Avoid unpinned download/install behavior in Docker build stages.

## 12. AI Change Modes

### 12.1 Mode A: Diff-Based (Default)

Use minimal diffs targeting only necessary lines.

Required behavior:

- Preserve unaffected code.
- Keep public contracts stable.
- Provide concise justification for each modified file.

### 12.2 Mode B: Full File Replacement (Explicit Only)

Allowed only with explicit instruction.

Required behavior:

- Explain why diff-based edit is unsafe or impractical.
- Preserve required headers/contracts unless intentionally changed with approval.

### 12.3 Mode C: Multi-File Refactor (Approval + Explanation)

Allowed only after explicit approval.

Required behavior:

- Declare scope before editing.
- List impacted contracts and regression risks.
- Provide rollback strategy.

## 13. Change Permission Matrix

| Area | Default Permission | Requires Explicit Approval | Forbidden by Default |
|---|---|---|---|
| UI styles and presentational components | Yes | No | No |
| Content text/copy (non-legal) | Yes | No | No |
| API response schema changes | No | Yes | Silent breaking changes |
| Auth provider configuration | No | Yes | Unreviewed provider replacement |
| Session shape/claims | No | Yes | Removing claims without migration |
| Prisma schema changes | No | Yes | Direct apply without proposal |
| `prisma/migrations` edits | No | N/A | Yes |
| Environment variable additions/removals | No | Yes | Inventing undocumented keys |
| Docker base image/runtime model | No | Yes | Secret injection, hidden daemons |
| Build/lint/test scripts | Yes (safe changes) | If behavior-altering | Disabling quality gates silently |
| Dependency major upgrades | No | Yes | Unreviewed lockfile drift in production path |
| CI/CD deployment logic | No | Yes | Bypassing required checks |

## 14. Hard Stop Conditions

AI MUST HALT IMMEDIATELY when any condition below is triggered:

1. Requested change conflicts with this manual’s critical safety rules.
2. Database migration or schema mutation is implied but unapproved.
3. Auth/session/authorization contract changes are requested without explicit approval.
4. Secret material appears in logs, diffs, or requested output.
5. Required environment values are unavailable and cannot be safely mocked.
6. Deployment target constraints are unknown for a release-impacting change.
7. Repository state is inconsistent (missing contract files, conflicting configs) and resolution is ambiguous.

When halted, AI must output: precise blocker, impacted area, and exact clarification required.

## 15. Recommended Workflow (Safe Modification Process)

Follow this sequence for all non-trivial changes:

```text
1. Read README.md (this file) and active task request.
2. Identify affected contracts (env, API, auth, schema, Docker, scripts).
3. Classify change mode (Diff / Full File / Multi-File).
4. If critical zone: prepare proposal before edits.
5. Implement smallest safe diff.
6. Run local validation (typecheck/lint/tests/build as applicable).
7. Verify no secrets or contract regressions.
8. Summarize files changed, risks, and rollback path.
```

### 15.1 Suggested Validation Commands

```bash
# dependency install
pnpm install

# static checks
pnpm run lint

# compile-time and build integrity
pnpm run build

# local runtime smoke test
pnpm run dev
```

Use additional repository-specific checks when present.

## 16. Deployment Targets

Supported deployment targets:

1. **Vercel** for Next.js application hosting.
2. **Docker-compatible platforms** (container orchestrators, PaaS container runtimes).
3. **Managed PostgreSQL providers** for durable relational storage.

### 16.1 Deployment Rules

- Runtime configuration must come from environment variables, not committed files.
- Build-time and runtime secrets must be platform-managed.
- Database credentials must use least-privilege accounts.
- Pre-deploy checks must include schema compatibility validation.

### 16.2 Target-Specific Notes

- Vercel: confirm server/runtime features align with App Router and configured edge/node modes.
- Docker platforms: ensure container health checks and startup command are explicit.
- Managed PostgreSQL: enforce SSL requirements and connection pooling strategy as needed.

## 17. License Notice

This repository is part of a template system.

- Usage, redistribution, and sublicensing MAY be restricted by template owner terms.
- Consumers MUST verify licensing and commercial usage rights before distribution.
- AI MUST NOT assume permissive reuse rights unless license text explicitly confirms them.

## 18. Operational Commands Reference

```bash
# local development
pnpm run dev

# production build
pnpm run build

# start production server (after build)
pnpm run start

# lint
pnpm run lint
```

If custom automation scripts are introduced, document exact invocation and expected side effects in this file.

## 19. Final Directive

The governing objective of this project is long-lived production reliability under explicit contracts.

All contributors, human and AI, MUST optimize for **stability, safety, and maintainability over speed of modification**.

**PRINCIPLE: IF A CHANGE CANNOT BE MADE SAFELY, IT MUST NOT BE MADE UNTIL CONSTRAINTS ARE EXPLICITLY RESOLVED.**
