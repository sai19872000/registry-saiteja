# AGENT.md · the single brief

You are building or extending a saiteja.ai factory app. This is the only doc you must read before you start. Everything else (RECIPES, MOTION, SKILL) is a reference; this is the spine.

---

## What Aura is

Aura is the saiteja.ai design system. It distributes as tokens + components and stamps four signature hooks into every app that uses it. The brand idea is **quietly forged**: a small, opinionated set of choices that feels carefully made — never loud, never generic, never AI-slop.

You will recognize an Aura app instantly:
- Navy ink background (`#0A0E1A`), periwinkle accent (`#8AB6FF`)
- Geist (or Inter) display, weights 200/300, with italic for soft beats
- A single breathing ring that pulses on a 4-second sine
- Mono micro-labels in uppercase with `0.15em` tracking
- Hairline borders, almost no shadow, no gradients
- One animation language, three timings (120/220/480ms)

If your output doesn't have those signatures, it's drifted.

---

## The four inheritance hooks (non-negotiable)

A factory app inherits Aura **only if all four are wired**:

1. **`<AuraCredit />`** in the footer — `quietly forged at saiteja.ai` next to the breathing mark
2. **`printAuraSignature()`** at app boot — the DevTools console must show `◐ quietly forged at saiteja.ai`
3. **`::selection`** rule from `sairam-tokens.css` — text selection turns periwinkle
4. **`<AuraMark />`** as the splash / primary loading visual — never a generic spinner

Miss any one and the app is Aura-adjacent, not Aura-stamped. Wire all four before you ship.

---

## The voice rules (one-line memory)

- **Lowercase, except proper nouns and the start of headlines.** Mono labels are uppercase. That's the only exception.
- **One italic per page.** A soft beat — `let's begin`, `still listening`, `just a moment`. Never two.
- **No exclamation marks. Ever.** If excitement leaks in, rewrite.
- **Short sentences.** A long one earns its length only by saying something true.
- **Never over-promise.** "we'll try" beats "we will". Quiet confidence > loud claims.
- **No marketing verbs.** Avoid: unleash, transform, supercharge, revolutionize, empower, leverage, robust, seamless, cutting-edge.

If a sentence sounds like a SaaS landing page, rewrite it.

---

## The visual rules (one-line memory)

- **Color**: navy ink, cream text, periwinkle accent. Don't introduce a third hue without the system owner's go-ahead.
- **Spacing**: 8-step scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96). Pick from the scale; don't invent.
- **Type**: 300 for display, 200 italic for soft beats, 400 for body, mono for labels. Letter-spacing `-0.025em` on display, `0.15em` on mono labels.
- **Radius**: 4 / 6 / 8 / 16 / 100px (pill). Pill is for chips and the breathing ring container only.
- **Shadow**: don't. Use a hairline border (`var(--shadow-sm)`). The brand does not float.
- **Motion**: three timings (120 / 220 / 480ms), one easing (`var(--ease-standard)`). One animation per surface.
- **Iconography**: line-only, 1.5px stroke, currentColor. No filled icons; no emoji unless the user is talking to themselves in chat.

When in doubt: less.

---

## Decision tree

| You need… | Reach for… | Don't reach for… |
| --- | --- | --- |
| Loading state | `<AuraMark />` | spinner emoji, dots loader |
| Empty state | `<EmptyState />` with one italic phrase | a giant illustration |
| Tag / category | `<ThemeChip />` | colored badges with icons |
| Status indicator | `<StatusBadge status="live" />` | green dot + "Online" |
| Card | `<CardWithMeta />` | drop-shadowed div |
| Call to action | text link with accent + arrow | gradient button |
| Section divider | hairline `border-top: 1px solid var(--border)` | a colored bar |

---

## What you must not do

- Add a third brand color
- Use `box-shadow` for visual emphasis (only for the live-state glow)
- Animate two things on the same surface at the same time
- Use Inter, Roboto, or Arial when Geist is available
- Write a headline with an exclamation mark
- Use marketing verbs in body copy
- Show a generic spinner anywhere
- Use emoji as decoration in production UI
- Make a button bigger than it needs to be

---

## The fast paths

Read **RECIPES.md** for step-by-step paths. The most common:

- **Ship a new app** — recipe 1
- **Inherit Aura into someone else's app** — recipe 2
- **Add a new section to an Aura page** — recipe 6
- **Diagnose drift** — recipe 7

When in doubt, read the recipe; don't improvise.

---

## When you're done

Before you call the work done, verify:

1. All four inheritance hooks present
2. No exclamation marks in copy
3. No more than one italic per page
4. Background is navy ink, accent is periwinkle, no third hue
5. Console prints the signature on boot
6. `prefers-reduced-motion` actually disables the breath (the tokens stylesheet handles this; just don't override it)

If all six are true, ship it.
