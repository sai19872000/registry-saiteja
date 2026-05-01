# CHANGELOG

## 0.2.0 — Aura · 2026-05

The full rebrand. Replaces the cosmic+bookish indigo-violet system with the navy-ink + periwinkle Aura set. Same registry slug (`saiteja-aura`), updated tokens, four signature hooks formalized.

### Added
- **`aura-mark`** — the breathing ring component, the brand's single canonical visual
- **`aura-credit`** — footer mark with `quietly forged at saiteja.ai`
- **`aura-boot`** — console signature printer for app boot
- **`AGENT.md`** — single-brief agent doc at registry root
- **`RECIPES.md`** — seven step-by-step paths
- **`MOTION.md`** — three-timing motion spec with reduced-motion contract
- **`docs/voice.md`** — voice rules + banned word list + tone stress tests
- **`docs/snippets.md`** — copy/paste fragments
- New keyframe: `aura-breathe` (4s ease-in-out, the brand's only canonical animation)
- New keyframe: `pulse-dot` (1.4s, scoped to status badges)

### Changed
- **Tokens (sairam-tokens.css)** — full rewrite:
  - `--bg` indigo `#1a1a2e` → navy ink `#0A0E1A`
  - `--surface` `#252544` → steel `#1B2236`
  - `--accent` violet `#8B7FD8` → periwinkle `#8AB6FF`
  - `--fg` cream `#F5F1E8` → cream `#F4F1EA`
  - Display font Fraunces → Geist (Inter fallback)
  - Mono font JetBrains Mono → Geist Mono
  - Display weight 400 → 300, italic 400 → 200
  - Tracking display `-0.02em` → `-0.025em` (tighter)
  - Body text size 18px → 17px
  - Three motion timings (was four — removed `--duration-quick`)
  - Removed `--shadow-md`/`--shadow-lg` drops; the brand uses hairlines
  - Light mode revised: cream `#F4F1EA` bg + deep periwinkle `#3A6CFF` accent
- **Status badge** — added `reviewing` state, `pulse-dot` animation, mono labels with `0.15em` tracking
- **Skeleton block** — slower shimmer (1.8s vs 1.4s); brand-aligned timing
- **Empty state** — display weight 300, optional italic phrase appended (one soft beat)
- **Card with meta** — accent crumb prefixed with `◐` ring glyph; hover swaps to `--surface-raised`
- **Pull quote** — italic 200 weight (was 400 italic); accent left rule (was border)
- **Tab bar** — accent underline on active (was bottom-fill); 220ms ease standard
- **Inline error** — softer wash (`rgba(255,107,107,.06)`), 2px left rule (was 4px)
- **Theme chip** — uppercase mono with `0.15em` tracking (was sentence case)

### Removed
- `--duration-quick` token (collapsed into `--duration-fast`)
- Drop shadows on cards and surfaces (replaced with hairline borders)
- Decorative use of italic in body copy (now reserved for the one soft beat per page)

### Migration notes

For apps on 0.1.x:

1. Reinstall tokens: `npx shadcn@latest add https://registry.saiteja.ai/r/sairam-tokens.json`
2. Add the Geist `@import` to the top of your global stylesheet (above other rules)
3. Install the four signature hooks: `aura-mark`, `aura-credit`, `aura-boot`, plus the `::selection` rule which inherits via tokens
4. Run the diagnose-drift checklist (RECIPES.md §7)

If you hard-coded any of the old hex values (`#1a1a2e`, `#8B7FD8`, `#F5F1E8`), grep and replace with the token names.

---

## 0.1.0 — initial cosmic+bookish · 2026-Q1

Initial token set. Indigo-violet base, Fraunces + JetBrains Mono, four base components. Deprecated by 0.2.0.
