// Indented blockquote with left accent border.
interface PullQuoteProps {
  text: string
}

export function PullQuote({ text }: PullQuoteProps) {
  return (
    <blockquote
      style={{
        borderLeft: '3px solid var(--accent)',
        paddingLeft: 'var(--sp-4)',
        margin: 0,
        fontStyle: 'italic',
        fontWeight: 300,
        color: 'var(--fg)',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--lh-body)',
      }}
    >
      {text}
    </blockquote>
  )
}
