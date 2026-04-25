// Empty state with display headline, subtext, and optional action slot.
// .sairam-empty-headline gets full optical-size treatment at 768px+.
import { type ReactNode } from 'react'

const emptyHeadlineStyle = `
@media (min-width: 768px) {
  .sairam-empty-headline {
    font-variation-settings: 'opsz' 72;
  }
}
`

interface EmptyStateProps {
  headline: string
  subtext?: string
  action?: ReactNode
}

export function EmptyState({ headline, subtext, action }: EmptyStateProps) {
  return (
    <>
      <style>{emptyHeadlineStyle}</style>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--sp-4)',
          textAlign: 'center',
          padding: 'var(--sp-12) var(--sp-6)',
        }}
      >
        <h1
          className="sairam-empty-headline"
          style={{
            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--fg)',
          }}
        >
          {headline}
        </h1>
        {subtext && (
          <p style={{ fontSize: 'var(--text-body)', color: 'var(--fg-muted)', lineHeight: 'var(--lh-body)' }}>
            {subtext}
          </p>
        )}
        {action && <div>{action}</div>}
      </div>
    </>
  )
}
