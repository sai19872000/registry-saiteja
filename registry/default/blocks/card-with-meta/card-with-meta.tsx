// Generic content card with title, meta row, cover image slot, and actions row.
// L1 decision: renamed from BookCard to CardWithMeta — "book"-specific names
// dropped for reusability. react-router-dom and react-query deps removed;
// navigation via plain href prop (renders <a>) or omit for non-linked variant.
// next/image not used — caller passes an <img> element or any node as cover prop
// to avoid requiring unoptimized loader config in the consumer.
import { type ReactNode } from 'react'

interface CardWithMetaProps {
  title: string
  meta?: ReactNode
  cover?: ReactNode
  actions?: ReactNode
  href?: string
}

const cardStyle = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: 'var(--sp-3)',
  background: 'var(--surface-raised)',
  border: '1px solid var(--border-strong)',
  borderRadius: 'var(--r-xl)',
  padding: 'var(--sp-6)',
  textDecoration: 'none',
  boxShadow: 'var(--shadow-sm)',
  transition: `box-shadow var(--duration-base) var(--ease-standard),
               border-color var(--duration-base) var(--ease-standard)`,
}

function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement
  el.style.boxShadow = 'var(--shadow-md)'
  el.style.borderColor = 'var(--accent)'
}

function handleMouseLeave(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget as HTMLElement
  el.style.boxShadow = 'var(--shadow-sm)'
  el.style.borderColor = 'var(--border-strong)'
}

export function CardWithMeta({ title, meta, cover, actions, href }: CardWithMetaProps) {
  const content = (
    <>
      {cover && <div>{cover}</div>}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--sp-2)' }}>
        <h3
          style={{
            fontSize: 'var(--text-h3)',
            fontWeight: 600,
            lineHeight: 'var(--lh-h3)',
            color: 'var(--fg)',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            flex: 1,
          }}
        >
          {title}
        </h3>
      </div>
      {meta && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', flexWrap: 'wrap' }}>
          {meta}
        </div>
      )}
      {actions && <div>{actions}</div>}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        aria-label={title}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
    </div>
  )
}
