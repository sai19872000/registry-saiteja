# registry-saiteja

Hosted [shadcn](https://ui.shadcn.com) registry for **Sai Ram Labs** — cosmic+bookish design tokens and reusable UI blocks.

Live endpoint: `https://registry.saiteja.ai/r/registry.json`

---

## Quick install

### Design tokens (install first)

```sh
npx shadcn add -r https://registry.saiteja.ai/r/registry.json sairam-tokens
```

### Individual blocks

```sh
npx shadcn add -r https://registry.saiteja.ai/r/registry.json status-badge
npx shadcn add -r https://registry.saiteja.ai/r/registry.json skeleton-block
npx shadcn add -r https://registry.saiteja.ai/r/registry.json inline-error
npx shadcn add -r https://registry.saiteja.ai/r/registry.json tab-bar
npx shadcn add -r https://registry.saiteja.ai/r/registry.json theme-chip
npx shadcn add -r https://registry.saiteja.ai/r/registry.json pull-quote
npx shadcn add -r https://registry.saiteja.ai/r/registry.json empty-state
npx shadcn add -r https://registry.saiteja.ai/r/registry.json card-with-meta
```

### All blocks at once

```sh
npx shadcn add -r https://registry.saiteja.ai/r/registry.json \
  sairam-tokens status-badge skeleton-block inline-error tab-bar \
  theme-chip pull-quote empty-state card-with-meta
```

---

## What's in the registry

| Slug | Type | Description |
|---|---|---|
| `sairam-tokens` | style | Fraunces+JetBrains Mono, indigo-violet palette, spacing, motion vars |
| `status-badge` | component | Pill badge with pulse dot for ingesting/ready/failed states |
| `skeleton-block` | component | Shimmer placeholder with configurable h/w |
| `inline-error` | component | Error banner with optional retry + dismiss |
| `tab-bar` | component | Generic tab bar (generic keys, caller-controlled state) |
| `theme-chip` | component | Small pill label for tags/categories (mono font) |
| `pull-quote` | component | Blockquote with left accent border |
| `empty-state` | component | Display-headline empty state with subtext + action slot |
| `card-with-meta` | component | Content card with title/meta/cover/actions slots + optional href |

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

Branch protection requires `ci` status check to pass. No 1-review requirement (one-person org).

---

## Architect spec

`/home/sai/factory/outputs/20260425_144022/architect_shadcn_registry_20260425_144023.md`
