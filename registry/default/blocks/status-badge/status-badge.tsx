// Generic status badge — maps status strings to color + pulse config.
// Extend CONFIG to add new statuses. Unknown statuses render as "Unknown".
type Status = string

interface StatusBadgeProps {
  status: Status
}

type BadgeConfig = { label: string; color: string; bg: string; pulse: boolean }

const CONFIG: Record<string, BadgeConfig> = {
  ingesting: {
    label: 'Ingesting…',
    color: 'var(--accent-warm)',
    bg: 'rgba(201, 169, 110, 0.12)',
    pulse: true,
  },
  ready: {
    label: 'Ready',
    color: 'var(--ok)',
    bg: 'rgba(90, 158, 123, 0.12)',
    pulse: false,
  },
  failed: {
    label: 'Failed',
    color: 'var(--danger)',
    bg: 'rgba(217, 94, 94, 0.12)',
    pulse: false,
  },
}

const FALLBACK: BadgeConfig = {
  label: 'Unknown',
  color: 'var(--fg-muted)',
  bg: 'rgba(138, 139, 168, 0.12)',
  pulse: false,
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const cfg = CONFIG[status] ?? FALLBACK
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-1)',
        padding: '2px var(--sp-2)',
        borderRadius: '999px',
        fontSize: 'var(--text-xs)',
        lineHeight: 'var(--lh-xs)',
        fontFamily: 'var(--font-mono)',
        color: cfg.color,
        background: cfg.bg,
        transition: `color var(--duration-slow) var(--ease-standard),
                     background var(--duration-slow) var(--ease-standard)`,
      }}
    >
      {cfg.pulse && (
        <span
          aria-hidden="true"
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: cfg.color,
            display: 'inline-block',
            animation: 'pulse-dot 1.4s ease-in-out infinite',
          }}
        />
      )}
      {cfg.label}
    </span>
  )
}
