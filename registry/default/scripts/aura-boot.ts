// Aura console signature — print on app boot.
//
// One of the four inheritance hooks. Call at app entry (e.g. _app.tsx, layout.tsx,
// or your earliest client-side script) so the brand mark lands in DevTools.
//
// Idempotent: safe to call multiple times in dev/HMR.
let printed = false

export function printAuraSignature() {
  if (typeof window === 'undefined' || printed) return
  printed = true
  console.log(
    '%c◐ quietly forged at saiteja.ai',
    'color:#8AB6FF;font-family:monospace;letter-spacing:.15em',
  )
}
