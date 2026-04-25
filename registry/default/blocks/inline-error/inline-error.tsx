// Inline error banner with optional retry and dismiss actions.
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
        color: 'var(--danger)',
        fontSize: 'var(--text-small)',
        lineHeight: 'var(--lh-small)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--sp-2)',
        padding: 'var(--sp-2) var(--sp-3)',
        background: 'rgba(217, 94, 94, 0.08)',
        borderRadius: 'var(--r-sm)',
        border: '1px solid rgba(217, 94, 94, 0.2)',
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
            fontSize: 'var(--text-small)',
            fontFamily: 'var(--font-primary)',
            textDecoration: 'underline',
            padding: 0,
          }}
        >
          Try again
        </button>
      )}
      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss error"
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
