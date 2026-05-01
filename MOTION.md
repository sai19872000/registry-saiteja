# MOTION.md · the three-timing system

Aura motion is small, slow, and rare. The system is built so an agent can never accidentally invent a fourth timing or a flashy easing. Three durations, one easing, one canonical animation.

---

## The three timings

| Token | Value | When |
| --- | --- | --- |
| `--duration-fast` | **120ms** | hover, focus ring, color shift, micro-affordance |
| `--duration-base` | **220ms** | tab switch, panel open, popover, dropdown, modal enter |
| `--duration-slow` | **480ms** | page enter, splash settle, modal backdrop, hero reveal |

Don't pick a fourth. If you reach for one, you've invented a moment that doesn't exist in the brand.

---

## The easing

```css
--ease-standard: cubic-bezier(0.22, 0.61, 0.36, 1);
```

Almost all motion uses this. It's a soft, very slight overshoot — the kind of curve that makes the surface feel calm, not snappy.

The decelerate (`cubic-bezier(0, 0, 0.2, 1)`) and accelerate (`cubic-bezier(0.4, 0, 1, 1)`) variants exist for rare cases:

- **Decelerate** — a thing dropping into place from above (sheet enter, command palette open)
- **Accelerate** — a thing leaving (toast dismiss, modal close)

You won't use them often. Default to `var(--ease-standard)`.

---

## The canonical animation

There is exactly one animation pattern in the brand: **the breath**.

```css
@keyframes aura-breathe {
  0%, 100% { transform: scale(0.42); opacity: 0.5; }
  50%      { transform: scale(1);    opacity: 1;   }
}
```

Used by `<AuraMark />` for the breathing ring. Cycle is **4 seconds**, ease-in-out — slow enough that you barely notice it, fast enough that it doesn't feel dead.

The status badge's `pulse-dot` animation (1.4s, ease-in-out) is the only other built-in pattern, and it's specifically scoped to live indicators.

Don't write a new keyframe unless you've cleared it with the system owner. Bouncing, swinging, jiggling, and bouncing-back are all anti-Aura.

---

## The "one animation per surface" rule

If a panel is opening (220ms slide), the breathing ring on the same panel **pauses** while the slide is happening, then resumes once the panel is at rest.

If two animations would happen at once on the same visual surface, pick one and delay the other by `var(--duration-slow)` (480ms).

Two simultaneous motions feels like AI slop. One feels like care.

---

## Reduced motion

The token stylesheet wires this:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Don't override it. Don't try to keep "essential" motion alive — if a user has reduced motion on, they want stillness, period.

`<AuraMark />` accepts `state="still"` for contexts where the breath is inappropriate (densely listed status indicators, print, low-power mode). Use it.

---

## Anti-patterns

- **Spinners** — never. Loading is the breathing ring.
- **Bouncing** — never. The brand does not bounce.
- **Stagger reveals** of more than 3 items. If you have 12 cards entering, fade the container, not each card.
- **Scroll-tied animations.** Aura is read, not scrolled-through.
- **Auto-rotating heroes / carousels.** A single still image is more confident.
- **Hover effects that grow / scale up.** Borders shift, colors shift, things don't grow.
- **Page transitions that cover the screen.** The fade is enough.

---

## Quick reference

```tsx
// Hover
transition: 'border-color var(--duration-fast) var(--ease-standard)'

// State change
transition: 'opacity var(--duration-base) var(--ease-standard)'

// Page enter
transition: 'opacity var(--duration-slow) var(--ease-standard)'

// The breath (one place: AuraMark)
animation: 'aura-breathe 4s ease-in-out infinite'
```

That's the whole system.
