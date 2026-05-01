# registry-saiteja

Hosted [shadcn](https://ui.shadcn.com) registry for **Sai Ram Labs** — distributing **Aura**, the saiteja.ai design system. Tokens, components, and the four signature inheritance hooks every factory app stamps in.

Live endpoint: `https://registry.saiteja.ai/r/registry.json`

For the design system itself, read [`AGENT.md`](./AGENT.md) (the spine), [`SKILL.md`](./SKILL.md) (registry inventory), [`RECIPES.md`](./RECIPES.md), [`MOTION.md`](./MOTION.md), [`docs/voice.md`](./docs/voice.md), and [`CHANGELOG.md`](./CHANGELOG.md).

---

## Quick install

### Tokens (install first — every other block depends on them)

```sh
npx shadcn@latest add https://registry.saiteja.ai/r/sairam-tokens.json
```

### The four signature hooks (must be wired in every factory app)

```sh
npx shadcn@latest add https://registry.saiteja.ai/r/aura-mark.json    # breathing ring
npx shadcn@latest add https://registry.saiteja.ai/r/aura-credit.json  # footer mark
npx shadcn@latest add https://registry.saiteja.ai/r/aura-boot.json    # console signature
# (selection color comes for free with the tokens)
```

### Individual blocks

```sh
npx shadcn@latest add https://registry.saiteja.ai/r/status-badge.json
npx shadcn@latest add https://registry.saiteja.ai/r/skeleton-block.json
npx shadcn@latest add https://registry.saiteja.ai/r/inline-error.json
npx shadcn@latest add https://registry.saiteja.ai/r/tab-bar.json
npx shadcn@latest add https://registry.saiteja.ai/r/theme-chip.json
npx shadcn@latest add https://registry.saiteja.ai/r/pull-quote.json
npx shadcn@latest add https://registry.saiteja.ai/r/empty-state.json
npx shadcn@latest add https://registry.saiteja.ai/r/card-with-meta.json
```

---

## What's in the registry (v0.2.0 Aura)

| Slug | Type | Description |
|---|---|---|
| `sairam-tokens` | style | Navy ink + periwinkle palette, Geist, three motion timings, `aura-breathe` keyframe |
| `aura-mark` | component | Breathing ring — the brand's single canonical visual |
| `aura-credit` | component | Footer mark — *quietly forged at saiteja.ai* (hook #1) |
| `aura-boot` | lib | Console-signature printer (hook #2) |
| `status-badge` | component | Mono pill — live / building / ready / idle / reviewing / failed |
| `skeleton-block` | component | Shimmer placeholder for inline loaders |
| `inline-error` | component | Calm warning banner with soft red wash |
| `tab-bar` | component | Mono-label tabs |
| `theme-chip` | component | Tag pill |
| `pull-quote` | component | Display italic quote |
| `empty-state` | component | Empty surface with one italic |
| `card-with-meta` | component | The standard plate |

See `CHANGELOG.md` for the full v0.1 → v0.2 migration.

---

## Local development

```sh
nvm use   # pins to Node 20 via .nvmrc
npm ci
npm run lint
npm run registry:build   # → public/r/registry.json + per-item JSONs
node scripts/check-registry-deps.mjs  # verify registryDependencies
npm run build            # → out/ (static export for CF Pages)
```

---

## Contributing (adding a new block)

1. Create `registry/default/blocks/<slug>/<slug>.tsx`
2. Add an entry to `registry.json` (`name`, `type`, `files`, `registryDependencies`)
3. Add it to `src/app/page.tsx` homepage preview
4. Push a branch, open a PR — CI gates must pass before merge
5. Merge → CF Pages auto-deploys

Branch protection requires `ci` status check to pass.

---

## Companion: factory library reference

[`RECOMMENDED_LIBRARIES.md`](./RECOMMENDED_LIBRARIES.md) is a separate curated list of third-party libraries (charts, maps, animation, etc.) that factory agents fetch before installing dependencies. Aura tokens + components ARE the design system; `RECOMMENDED_LIBRARIES.md` is opinionated outside-the-design-system picks.
