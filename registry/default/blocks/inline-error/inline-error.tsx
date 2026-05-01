// Aura inline error — calm warning banner with optional retry + dismiss.
interface InlineErrorProps {
  message: string
  onRetry?: () => void
  dismissible?: boolean
  onDismiss?: () => void
}

export function InlineError({ message, onRetry, dismissible, onDismiss }: InlineErrorProps) {
  return (
    <div
      role="alert"
      style={{
        color: 'var(--fg)',
        fontSize: 'var(--text-small)',
        lineHeight: 'var(--lh-small)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-3)',
        padding: 'var(--sp-3) var(--sp-4)',
        background: 'rgba(255, 107, 107, 0.06)',
        borderRadius: 'var(--r-md)',
        borderLeft: '2px solid var(--danger)',
      }}
    >
      <span style={{ flex: 1 }}>{message}</span>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            cursor: 'pointer',
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: 'var(--tracking-mono)',
            textTransform: 'uppercase',
            padding: 0,
          }}
        >
          retry
        </button>
      )}
      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--fg-muted)',
            cursor: 'pointer',
            fontSize: 'var(--text-body)',
            padding: 0,
            lineHeight: 1,
          }}
        >
          ×
        </button>
      )}
    </div>
  )
}
