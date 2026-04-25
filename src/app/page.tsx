// Static homepage — lists registry blocks + design tokens.
// No server components, no route handlers, no revalidate.
// Static-export compatible (output: 'export' in next.config.ts).

const REGISTRY_URL = "https://registry.saiteja.ai/r/registry.json"

const BLOCKS = [
  { slug: "sairam-tokens", type: "style", description: "Fraunces+JetBrains Mono, indigo-violet palette, spacing, motion vars" },
  { slug: "status-badge", type: "component", description: "Pill badge with pulse dot for ingesting/ready/failed states" },
  { slug: "skeleton-block", type: "component", description: "Shimmer placeholder with configurable height/width" },
  { slug: "inline-error", type: "component", description: "Error banner with optional retry + dismiss" },
  { slug: "tab-bar", type: "component", description: "Generic tab bar, caller-controlled active state" },
  { slug: "theme-chip", type: "component", description: "Small pill label for tags and categories" },
  { slug: "pull-quote", type: "component", description: "Blockquote with left indigo-violet accent border" },
  { slug: "empty-state", type: "component", description: "Display-headline empty state with subtext + action slot" },
  { slug: "card-with-meta", type: "component", description: "Content card with title/meta/cover/actions slots + optional href" },
]

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", fontFamily: "var(--font-primary)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "var(--sp-12) var(--sp-6)" }}>
        {/* Header */}
        <header style={{ marginBottom: "var(--sp-12)" }}>
          <h1 style={{ fontSize: "var(--text-h1)", fontWeight: 600, lineHeight: "var(--lh-h1)", marginBottom: "var(--sp-3)" }}>
            Sai Ram Labs Registry
          </h1>
          <p style={{ fontSize: "var(--text-body)", color: "var(--fg-muted)", lineHeight: "var(--lh-body)" }}>
            Cosmic + bookish design tokens and reusable UI blocks for the factory.
            Hosted at <code style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", color: "var(--accent)" }}>registry.saiteja.ai</code>.
          </p>
        </header>

        {/* How to consume */}
        <section style={{ marginBottom: "var(--sp-12)" }}>
          <h2 style={{ fontSize: "var(--text-h2)", fontWeight: 600, lineHeight: "var(--lh-h2)", marginBottom: "var(--sp-4)" }}>
            How to consume
          </h2>
          <pre
            style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--r-md)",
              padding: "var(--sp-4)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-small)",
              color: "var(--fg)",
              overflowX: "auto",
              lineHeight: 1.7,
            }}
          >{`# Install tokens first
npx shadcn add -r ${REGISTRY_URL} sairam-tokens

# Then any block
npx shadcn add -r ${REGISTRY_URL} status-badge
npx shadcn add -r ${REGISTRY_URL} card-with-meta

# Or all at once
npx shadcn add -r ${REGISTRY_URL} \\
  sairam-tokens status-badge skeleton-block inline-error \\
  tab-bar theme-chip pull-quote empty-state card-with-meta`}</pre>
        </section>

        {/* Block listing */}
        <section>
          <h2 style={{ fontSize: "var(--text-h2)", fontWeight: 600, lineHeight: "var(--lh-h2)", marginBottom: "var(--sp-6)" }}>
            Items ({BLOCKS.length})
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--sp-3)" }}>
            {BLOCKS.map((block) => (
              <div
                key={block.slug}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--sp-4)",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--r-lg)",
                  padding: "var(--sp-4)",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-2)", marginBottom: "var(--sp-1)" }}>
                    <code style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-small)", color: "var(--accent)" }}>
                      {block.slug}
                    </code>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "1px var(--sp-2)",
                        borderRadius: "999px",
                        border: "1px solid var(--border-strong)",
                        fontSize: "var(--text-xs)",
                        fontFamily: "var(--font-mono)",
                        color: "var(--fg-dim)",
                        background: "var(--surface-raised)",
                      }}
                    >
                      {block.type}
                    </span>
                  </div>
                  <p style={{ fontSize: "var(--text-small)", color: "var(--fg-muted)", lineHeight: "var(--lh-small)" }}>
                    {block.description}
                  </p>
                </div>
                <code
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--fg-dim)",
                    whiteSpace: "nowrap",
                  }}
                >
                  npx shadcn add ... {block.slug}
                </code>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ marginTop: "var(--sp-12)", paddingTop: "var(--sp-6)", borderTop: "1px solid var(--border)", color: "var(--fg-dim)", fontSize: "var(--text-small)" }}>
          Sai Ram Labs · Writes go through GitHub PR → CI → CF Pages auto-deploy
        </footer>
      </div>
    </div>
  )
}
