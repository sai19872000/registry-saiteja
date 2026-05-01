# RECIPES.md · step-by-step paths

Seven paths. Pick the one that matches your task and follow it line by line. If a step says "do X" and you find yourself doing Y, stop — you're improvising.

---

## 1. Ship a new factory app

You're starting from a blank Next.js / Vite / React app and want to put it on the Aura tracks.

```bash
# 1. Install tokens (everything depends on this)
npx shadcn@latest add https://registry.saiteja.ai/r/sairam-tokens.json

# 2. Install the inheritance hooks
npx shadcn@latest add https://registry.saiteja.ai/r/aura-mark.json
npx shadcn@latest add https://registry.saiteja.ai/r/aura-credit.json
npx shadcn@latest add https://registry.saiteja.ai/r/aura-boot.json
```

Then in your root layout or `_app.tsx`:

```tsx
'use client'
import { useEffect } from 'react'
import { printAuraSignature } from '@/lib/aura-boot'
import { AuraCredit } from '@/components/aura-credit'

export default function RootLayout({ children }) {
  useEffect(() => { printAuraSignature() }, [])

  return (
    <html lang="en">
      <body>
        {children}
        <footer style={{ padding: 'var(--sp-12) var(--sp-6)', textAlign: 'center' }}>
          <AuraCredit />
        </footer>
      </body>
    </html>
  )
}
```

Add the Geist `@import` to the **top** of your global stylesheet (above Tailwind directives, above any other `@import`). The token file's comment shows the exact line.

Verify the four hooks:
- [ ] `<AuraCredit />` shows in the footer
- [ ] DevTools console prints `◐ quietly forged at saiteja.ai`
- [ ] Selecting text turns periwinkle
- [ ] Loading states use `<AuraMark />`, not a spinner

---

## 2. Inherit Aura into someone else's app

You have an existing app with its own visual language and want to bring it onto Aura without a full rewrite.

**Don't do a big-bang migration.** Do the four hooks first. The brand reads even when 80% of the app is still old.

1. Add the tokens — `npx shadcn@latest add .../sairam-tokens.json`. Don't apply them globally yet; scope them to a single `<div data-aura>` wrapper around the section you control.
2. Drop `<AuraCredit />` in the footer. Always.
3. Wire `printAuraSignature()` at app boot. Always.
4. Replace one loading state with `<AuraMark />`. Pick the most visible one.

That's the floor. Then expand outward — one screen at a time, one component at a time.

---

## 3. Build a new page on Aura

You have an Aura-installed app and need a new page (settings, dashboard, detail view).

Start with this skeleton:

```tsx
export default function Page() {
  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: 'var(--sp-12) var(--sp-6)' }}>
      <header style={{ marginBottom: 'var(--sp-12)' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          letterSpacing: 'var(--tracking-mono)',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}>
          ◐ chapter 03
        </span>
        <h1 style={{
          fontSize: 'var(--text-h1)',
          fontWeight: 300,
          letterSpacing: 'var(--tracking-display)',
          marginTop: 'var(--sp-3)',
        }}>
          your headline here, <em>one soft beat</em>
        </h1>
      </header>

      {/* sections */}
    </main>
  )
}
```

Rules:
- One `<h1>` per page.
- The `<em>` italic phrase is a soft beat — `still listening`, `just begun`, `nothing yet`. One per page.
- No "hero CTA". A text link with `→` is enough.
- Section spacing: `var(--sp-16)` (64px) between major sections, `var(--sp-8)` between subsections.

---

## 4. Add a new component to the registry

You've designed a block that recurs across apps. Promote it.

1. Build it under `registry/default/blocks/<name>/<name>.tsx`. One file. No barrel exports.
2. Use only token references — no hex codes, no hard-coded font families, no magic numbers.
3. Add an entry to `registry.json`:
   ```json
   {
     "name": "<name>",
     "type": "registry:component",
     "title": "<Title Case>",
     "description": "<one sentence — what it is and when to use it>",
     "registryDependencies": ["sairam-tokens"],
     "files": [
       { "path": "registry/default/blocks/<name>/<name>.tsx", "type": "registry:component" }
     ]
   }
   ```
4. Update `README.md` "What's in the registry" table.
5. Bump `CHANGELOG.md`. Use semver: a new component is a minor bump, a token rename is a major.

---

## 5. Write copy that doesn't drift

Open the doc in your editor. Hit Ctrl-F for each of these and rewrite every hit:

- `!` — every exclamation mark
- `Unleash`, `Transform`, `Supercharge`, `Revolutionize`, `Empower`, `Leverage`, `Robust`, `Seamless`, `Cutting-edge`
- `effortlessly`, `simply`, `easily` — adverb noise
- Two italic phrases on the same page
- A capitalized first letter mid-sentence in body copy
- Headlines that try to be funny

Replace exclamation marks with periods. Replace marketing verbs with the plain verb (`build`, `make`, `try`). Delete the second italic. Lowercase mid-sentence caps.

Then read it out loud. If it sounds like a SaaS landing page, rewrite it.

---

## 6. Add motion to a surface

The brand has three timings and one easing. Don't invent more.

- **120ms** — hover / focus / micro-affordance (border color, opacity tick)
- **220ms** — state changes (panel open, tab switch, modal enter)
- **480ms** — page enter, modal backdrop, splash settle

Easing is always `var(--ease-standard)`. The decelerate / accelerate variants exist but you'll rarely reach for them — only when something physically drops in (decelerate) or out (accelerate).

**One animation per surface at a time.** If the breathing ring is on, nothing else moves. If a panel is sliding in, the page is still.

`prefers-reduced-motion` is wired into the token sheet — leave it alone. Don't try to be clever with `media` queries inside components.

See **MOTION.md** for the full spec.

---

## 7. Diagnose drift

The app feels off but you can't say why. Run this checklist:

- [ ] Background `#0A0E1A`? (open DevTools, inspect `body`)
- [ ] Accent `#8AB6FF`? (or the deep variant `#3A6CFF` in light mode)
- [ ] No third color in the wild? (no greens, no purples, no oranges except `--accent-warm` for warnings)
- [ ] `<AuraCredit />` in footer?
- [ ] Console signature on boot?
- [ ] Text selection periwinkle?
- [ ] At least one breathing ring on the page?
- [ ] No exclamation marks?
- [ ] No more than one italic phrase per page?
- [ ] Mono labels uppercase with `0.15em` tracking?
- [ ] No `box-shadow` other than the live-state glow?
- [ ] One animation per surface?

The first failed check is the drift. Fix it before moving on.
