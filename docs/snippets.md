# Aura snippets — copy/paste fragments

For when you don't want to install a registry item, just grab a piece of pattern. Every snippet uses Aura tokens, so it inherits automatically once `sairam-tokens.css` is loaded.

---

## 1. The crumb + headline header

```tsx
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
    lineHeight: 'var(--lh-h1)',
    marginTop: 'var(--sp-3)',
    color: 'var(--fg)',
  }}>
    your headline, <em style={{ fontWeight: 200, fontStyle: 'italic', color: 'var(--fg-muted)' }}>one soft beat</em>
  </h1>
</header>
```

---

## 2. The hairline divider

```tsx
<hr style={{
  border: 'none',
  borderTop: '1px solid var(--border)',
  margin: 'var(--sp-12) 0',
}} />
```

Don't use `<hr />` defaults. Don't use a colored bar.

---

## 3. The text link with arrow

```tsx
<a href="..." style={{
  color: 'var(--accent)',
  textDecoration: 'none',
  fontFamily: 'var(--font-primary)',
  fontSize: 'var(--text-body)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--sp-2)',
  borderBottom: '1px solid transparent',
  transition: 'border-color var(--duration-fast) var(--ease-standard)',
}}
onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
  open the docs <span aria-hidden>→</span>
</a>
```

This is the brand's only "button". A hairline underlines on hover, that's the affordance.

---

## 4. The mono micro-label

```tsx
<span style={{
  fontFamily: 'var(--font-mono)',
  fontSize: 'var(--text-xs)',
  letterSpacing: 'var(--tracking-mono)',
  textTransform: 'uppercase',
  color: 'var(--fg-muted)',
}}>
  build · 4128
</span>
```

Used everywhere — over titles, under stats, beside cards. The brand's typographic rhythm.

---

## 5. The page boot (Next.js / Vite)

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

---

## 6. The full head matter

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>your title · saiteja.ai</title>

  <!-- Geist (with Inter fallback in tokens) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@200..700&family=Geist+Mono:wght@400..600&display=swap" rel="stylesheet" />

  <!-- Aura tokens -->
  <link rel="stylesheet" href="/styles/sairam-tokens.css" />

  <meta name="theme-color" content="#0A0E1A" />
</head>
<body>
  <!-- ... -->
</body>
</html>
```

---

## 7. The breathing ring (raw SVG)

If you can't import the React component, here's the raw markup:

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="saiteja.ai">
  <circle cx="12" cy="12" r="10" stroke="#8AB6FF" stroke-width=".4" opacity=".4" />
  <circle cx="12" cy="12" r="6"  stroke="#8AB6FF" stroke-width=".4" opacity=".7" />
  <circle cx="12" cy="12" r="3"  fill="#8AB6FF" style="transform-origin:center;animation:aura-breathe 4s ease-in-out infinite" />
</svg>
```

The `aura-breathe` keyframe lives in `sairam-tokens.css`.

---

## 8. The agent prompt header

When you brief another agent (Claude, Cursor, etc.) on this brand, paste this in front:

```
You are working on a saiteja.ai factory app, built on the Aura design system.

Read these in order before starting:
1. AGENT.md (the spine — non-negotiable rules)
2. The recipe in RECIPES.md that matches your task
3. MOTION.md if you're touching animation
4. docs/voice.md if you're writing copy

Hard constraints:
- All four inheritance hooks present (AuraCredit, printAuraSignature, ::selection, AuraMark)
- No exclamation marks
- One italic phrase per page maximum
- Three motion timings only (120 / 220 / 480ms)
- One easing (var(--ease-standard))
- Navy ink (#0A0E1A) + periwinkle (#8AB6FF), no third color

When done, run the diagnose-drift checklist (RECIPES.md §7).
```
