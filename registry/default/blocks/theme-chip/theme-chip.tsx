// Small pill label — for tags, themes, categories.
interface ThemeChipProps {
  label: string
}

export function ThemeChip({ label }: ThemeChipProps) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '2px var(--sp-3)',
        borderRadius: '999px',
        border: '1px solid var(--border-strong)',
        fontSize: 'var(--text-small)',
        fontFamily: 'var(--font-mono)',
        color: 'var(--fg-muted)',
        lineHeight: 'var(--lh-small)',
        background: 'var(--surface-raised)',
        userSelect: 'none',
      }}
    >
      {label}
    </span>
  )
}
