// Shimmer skeleton placeholder block.
// Depends on sairam-tokens for CSS variables.
// Shimmer keyframes are inlined here rather than in sairam-tokens.css.
const shimmerStyle = `
@keyframes sairam-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`

interface SkeletonBlockProps {
  height?: string
  width?: string
  className?: string
}

export function SkeletonBlock({ height = '1rem', width = '100%', className = '' }: SkeletonBlockProps) {
  return (
    <>
      <style>{shimmerStyle}</style>
      <div
        className={className}
        style={{
          height,
          width,
          background: 'linear-gradient(90deg, var(--surface-raised) 25%, var(--border-strong) 50%, var(--surface-raised) 75%)',
          backgroundSize: '200% 100%',
          animation: 'sairam-shimmer 1.5s ease-in-out infinite',
          borderRadius: 'var(--r-sm)',
        }}
        aria-hidden="true"
      />
    </>
  )
}
