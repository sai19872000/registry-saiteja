# Sai Ram Labs — Recommended Libraries (v1, 2026-05)

**Audience**: factory agents (`architect`, `ux`, `dev_frontend`, `dev_backend`,
`data`) when choosing libraries for a new build.

**Bias**: opinionated. Per category we pick **1 default** plus **at most 1
alternative for a specific case**. Curated > exhaustive — when an agent
picks a library outside this list, they must justify it in their
`## Decisions` section per `factory-decision-register`.

**When to reach beyond this list**: only when the canonical pick
genuinely doesn't fit (a real, named limitation — not "I prefer
something else"). Document the reason.

**Maintenance**: this file is the source of truth. Agents fetch it from
`https://raw.githubusercontent.com/sai19872000/registry-saiteja/main/RECOMMENDED_LIBRARIES.md`
or the deployed registry site. Update via PR; revisit quarterly.

**Pairs with Aura** — the saiteja.ai design system (tokens + 12
components) lives in this same repo. Agents must install Aura tokens +
the four inheritance hooks (`aura-mark`, `aura-credit`, `aura-boot`,
selection) BEFORE reaching for category libraries below. See
[`AGENT.md`](./AGENT.md) and [`SKILL.md`](./SKILL.md) for the install
order. Aura covers the brand surface; this list covers everything else
(maps / charts / animation / etc.).

---

## Maps & geo viz

| Pick | When | Install |
|---|---|---|
| **react-map-gl + Mapbox GL JS** | default for production maps with vector tiles, smooth zoom, 3D terrain, custom styling | `npm add react-map-gl mapbox-gl` |
| **MapLibre GL JS** | when you can't accept Mapbox's pricing / token requirement (free fork of Mapbox GL v1) | `npm add maplibre-gl react-map-gl` |
| **react-simple-maps** | choropleth-only (countries / states colored by data), no tile interaction needed | `npm add react-simple-maps` |

**When to reach beyond**: don't reach for Leaflet unless you need a specific
plugin from its ecosystem — Mapbox GL / MapLibre have superseded it for
quality.

## Charts & data viz

| Pick | When | Install |
|---|---|---|
| **Recharts** | default for dashboards, line/bar/area/pie/scatter charts, ≤10K data points | `npm add recharts` |
| **Apache ECharts (echarts-for-react)** | when you need >10K points, heatmaps, sankey, 3D charts, or 50+ chart types | `npm add echarts echarts-for-react` |

**When to reach beyond**: for true brand differentiation, drop to **Visx**
(D3 primitives in React) — but that's a craft project, not a default.

## Tables & data grids

| Pick | When | Install |
|---|---|---|
| **TanStack Table + TanStack Virtual** | default headless table — sort, filter, pagination, virtualization for 50K+ rows | `npm add @tanstack/react-table @tanstack/react-virtual` |
| **AG Grid Community** | enterprise spreadsheet-grade UX — column pinning, grouping, in-cell editing, range selection | `npm add ag-grid-react ag-grid-community` |

**Defaults**: pair TanStack Table with shadcn's `<Table>` block for
presentation. AG Grid is the right call only when the product literally
needs spreadsheet UX.

## Animation

| Pick | When | Install |
|---|---|---|
| **Motion (formerly Framer Motion)** | default — declarative React animations, layout transitions, gestures, AnimatePresence | `npm add motion` |
| **GSAP** | timeline-heavy scroll-driven storytelling, SVG morphing, animations outside React's render cycle | `npm add gsap` (free MIT for most uses) |

**Anti-pattern**: hand-rolled CSS keyframes for anything beyond a fade.
Use Motion.

## Iconography

| Pick | When | Install |
|---|---|---|
| **Phosphor Icons** | default — 9000+ icons, 6 weights (thin / light / regular / bold / fill / duotone), visual differentiation | `npm add @phosphor-icons/react` |
| **Tabler Icons** | dashboards / admin panels — 5900+ icons on consistent 24×24 grid, dense-information optimized | `npm add @tabler/icons-react` |

**Banned by default** (per `factory-ui-design`): Lucide, Heroicons —
they're the AI-generated default look. Use them only with explicit
justification (e.g. project lock-in).

## Forms & validation

| Pick | When | Install |
|---|---|---|
| **React Hook Form + Zod** | default — uncontrolled inputs, ref-based, integrates with shadcn `<Form>` block | `npm add react-hook-form zod @hookform/resolvers` |
| **TanStack Form** | multi-step wizards, complex configuration screens where end-to-end TS inference matters | `npm add @tanstack/react-form` |

**For Server Actions**: pair RHF with `Conform` to avoid client/server
schema drift.

## State management

| Pick | When | Install |
|---|---|---|
| **Zustand** | default for global client state — 3KB, no boilerplate | `npm add zustand` |
| **Jotai** | atomic / derived state where you want fine-grained re-renders | `npm add jotai` |

**Don't reach for Redux Toolkit** for new projects unless you need the
strict pattern enforcement that comes with it (large team / time-travel
debugging).

**Server state lives in TanStack Query** (next section), not in any
client state library. Don't conflate.

## Server state & data fetching

| Pick | When | Install |
|---|---|---|
| **TanStack Query** | default for any client-side data fetching with caching / mutations | `npm add @tanstack/react-query` |
| **SWR** | tiny side projects where TanStack Query (~13KB) is over-budget; SWR is ~4KB | `npm add swr` |

**Pair with React Server Components** when on Next.js 15+ — RSC for
initial load, TanStack Query for client-side caching / mutations /
optimistic updates.

## Real-time

| Pick | When | Install |
|---|---|---|
| **Native Server-Sent Events (EventSource)** | default — one-way push (live feeds, notifications, leaderboards, vote tallies, status streams) | built-in |
| **Native WebSocket / `partysocket`** | bidirectional (chat, collab editor, multiplayer). `partysocket` adds reconnect + offline buffering | `npm add partysocket` |

**Don't add socket.io** unless you're consuming an existing socket.io
backend — it's heavyweight for greenfield.

## Auth (frontend integration)

| Pick | When | Install |
|---|---|---|
| **Clerk** | default — pre-built sign-in/up UI, social providers, MFA, organization mgmt, 10K MAU free | `npm add @clerk/clerk-react` (or `@clerk/nextjs`) |
| **Better Auth** | when you want zero vendor lock-in, self-hosted, TS-first; passkeys + 2FA + RBAC out of the box | `npm add better-auth` |

**Don't reach for Supabase Auth** standalone (UI is community-maintained
since 2024); only use Supabase Auth if you're already on Supabase for
DB.

## Markdown / rich-text editor

| Pick | When | Install |
|---|---|---|
| **Tiptap** | default — ProseMirror under the hood, plugin ecosystem, ~4.6KB gzipped | `npm add @tiptap/react @tiptap/starter-kit` |
| **Plate** | shadcn-aligned, when you want maximum UI control over the editor surface | `npm add @udecode/plate-common` (+ the plate plugins you need) |

**For static markdown rendering** (not editing): `react-markdown +
remark-gfm` is the default; add `rehype-highlight` for code blocks.

## Drag and drop

| Pick | When | Install |
|---|---|---|
| **@dnd-kit** | default — accessible, ~10KB core, modern hooks API | `npm add @dnd-kit/core @dnd-kit/sortable` |
| **Pragmatic drag-and-drop (Atlassian)** | Jira/Trello-scale performance, headless, zero-abstraction overhead | `npm add @atlaskit/pragmatic-drag-and-drop` |

**Don't use react-beautiful-dnd** — Atlassian deprecated it; the
community fork `hello-pangea/dnd` is fine for legacy continuity but new
work goes to dnd-kit.

## File upload

| Pick | When | Install |
|---|---|---|
| **react-dropzone** | default UI component — handles drag-drop + validation; you wire the upload endpoint | `npm add react-dropzone` |
| **UploadThing** | full-stack option — handles S3, validation, webhooks, type-safe end-to-end | `npm add uploadthing @uploadthing/react` |

**For >100MB / resumable / chunked uploads**: Uppy + Tus protocol is the
right answer; reach for it explicitly.

## Date / time

| Pick | When | Install |
|---|---|---|
| **react-day-picker (v9+) + date-fns** | default for date / range picking; integrates with shadcn `<Calendar>` | `npm add react-day-picker date-fns` |
| **MUI X Date Pickers** | when you're already on Material UI | `npm add @mui/x-date-pickers` |

**Date math always uses date-fns** (not Moment, not dayjs unless you're
on legacy code). date-fns ships tree-shakable functions and modern TS.

## Search / command palette / fuzzy

| Pick | When | Install |
|---|---|---|
| **cmdk** (`⌘K`) | default for command palettes — unstyled, accessible, integrates with shadcn `<Command>` | `npm add cmdk` |
| **Fuse.js** | client-side fuzzy search across datasets ≤10K items | `npm add fuse.js` |
| **uFuzzy** | larger lists or where Fuse's quality/perf hits a wall | `npm add @leeoniya/ufuzzy` |

**For server-side search**: don't bolt on a library — point at
Postgres `tsvector` / Meilisearch / Typesense.

## Notifications / toasts

| Pick | When | Install |
|---|---|---|
| **Sonner** | default — built for React 18+, integrates with shadcn `<Toaster>`, ~3KB | `npm add sonner` |
| **react-hot-toast** | when you need promise-based toasts (`.promise(loadingFn, {success, error})`) | `npm add react-hot-toast` |

## 3D / WebGL

| Pick | When | Install |
|---|---|---|
| **react-three-fiber + drei** | default for any 3D in React — declarative scenes, helpers for cameras/lights/loaders | `npm add three @react-three/fiber @react-three/drei` |

**Pair with**: `@react-three/rapier` for physics, `@react-three/postprocessing`
for effects. Reach for raw three.js only when you need imperative
control over the render loop.

## Schema validation

| Pick | When | Install |
|---|---|---|
| **Zod** | default — broad ecosystem, integrates with RHF, tRPC, Drizzle | `npm add zod` |
| **Valibot** | client-bundle-sensitive (auth pages, marketing forms) where 12KB → 1KB matters | `npm add valibot` |

**ArkType** is impressive (TS-first, fastest) but ecosystem still
catching up. Reach for it on greenfield where ergonomics matter most.

## AI / LLM integration (frontend)

| Pick | When | Install |
|---|---|---|
| **Vercel AI SDK** | default for chat UIs, streaming completions, tool calling — `useChat` / `useCompletion` hooks | `npm add ai @ai-sdk/openai @ai-sdk/anthropic` |
| **LangChain.js** | agent orchestration (multi-step tools, memory, reasoning chains) — pair with Vercel AI SDK for the UI layer | `npm add langchain @langchain/core` |

**For RAG**: LlamaIndex.TS is the right retrieval layer; Vercel AI SDK
streams the answer.

## Audio

| Pick | When | Install |
|---|---|---|
| **Wavesurfer.js (`@wavesurfer/react`)** | default for audio playback with waveform display — players, podcasts, audio editors | `npm add wavesurfer.js @wavesurfer/react` |
| **Howler.js** | game-style sound effects, audio sprites, 3D spatial audio | `npm add howler` |

---

## Headless primitives (already implicit)

These are the building blocks beneath shadcn — agents shouldn't
re-import them directly unless extending shadcn:

- **Radix UI** — primitives behind shadcn (`@radix-ui/react-*`)
- **Tailwind CSS** — styling layer
- **clsx / tailwind-merge** — class composition

When using shadcn-registry blocks, these come along for free.

---

## Tooling not on this list

- **i18n**: no canonical pick yet — fire when needed (likely `next-intl`
  for Next.js, `react-i18next` for SPAs)
- **PDF generation**: depends on need (server-side: `puppeteer` /
  `playwright` PDF mode; client-side: `react-pdf`)
- **Email composition**: `react-email` if rendering React → HTML email
- **Email delivery**: `resend` SDK — fits the rest of the stack
- **Color manipulation**: `culori` (modern), or `tinycolor2` (legacy)

These will graduate onto the main list once we ship a product that
needs them — adding speculatively bloats the curated list.

---

## How agents use this

1. At task start, `architect` and `dev_frontend` fetch this file (or read
   the cached snapshot in their session).
2. When picking a library for a category covered here, default to the
   first row.
3. If the project genuinely needs the second row's case, pick it.
4. If neither fits, pick something else AND document the reason in your
   output's `## Decisions` section per `factory-decision-register`.

The list is opinionated on purpose. Surprises us → revise the list, not
the agent.
