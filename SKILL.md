# SKILL.md · saiteja-aura registry

Distributable component registry for the Aura design system (saiteja.ai). Mirrors the canonical [shadcn registry](https://ui.shadcn.com/docs/registry) format so any agent or app can install via the shadcn CLI.

## Inventory

| Slug | Type | What |
| --- | --- | --- |
| sairam-tokens | style | CSS custom properties (color, type, spacing, motion) + canonical keyframes |
| aura-mark | component | The breathing ring, brand's signature visual |
| aura-credit | component | Footer mark — inheritance hook #1 |
| aura-boot | lib | Console signature printer — inheritance hook #2 |
| status-badge | component | Status pill (live, building, ready, idle, reviewing, failed) |
| skeleton-block | component | Shimmer loader |
| inline-error | component | Calm warning banner |
| tab-bar | component | Mono-label tabs |
| theme-chip | component | Tag pill |
| pull-quote | component | Display italic quote |
| empty-state | component | Empty surface with one italic |
| card-with-meta | component | The standard plate |

## Install

```bash
# Tokens first
npx shadcn@latest add https://registry.saiteja.ai/r/sairam-tokens.json

# The four inheritance hooks (must-have)
npx shadcn@latest add https://registry.saiteja.ai/r/aura-mark.json
npx shadcn@latest add https://registry.saiteja.ai/r/aura-credit.json
npx shadcn@latest add https://registry.saiteja.ai/r/aura-boot.json

# Whatever blocks your app needs
npx shadcn@latest add https://registry.saiteja.ai/r/<slug>.json
```

## For agents

Read in order:
1. `AGENT.md` — the spine
2. `RECIPES.md` — task-shaped paths
3. `MOTION.md` — animation system
4. `docs/voice.md` — copy spec
5. `docs/snippets.md` — copy/paste fragments

## Versioning

`0.2.0` (current) — Aura. See `CHANGELOG.md` for prior versions.
