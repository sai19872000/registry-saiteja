// Static homepage — lists registry blocks + design tokens.
// No server components, no route handlers, no revalidate.
// Static-export compatible (output: 'export' in next.config.ts).

const BLOCKS = [
  { slug: "sairam-tokens", type: "style", description: "Aura tokens — navy-ink + periwinkle palette, Geist, three motion timings, aura-breathe keyframe" },
  { slug: "aura-mark", type: "component", description: "Breathing ring — the brand's single canonical visual (signature hook)" },
  { slug: "aura-credit", type: "component", description: "Footer mark — quietly forged at saiteja.ai (inheritance hook #1)" },
  { slug: "aura-boot", type: "lib", description: "Console-signature printer for app boot (inheritance hook #2)" },
  { slug: "status-badge", type: "component", description: "Mono pill — live / building / ready / idle / reviewing / failed with pulse dot" },
  { slug: "skeleton-block", type: "component", description: "Shimmer placeholder for inline loaders" },
  { slug: "inline-error", type: "component", description: "Calm warning banner with soft red wash + 2px left rule" },
  { slug: "tab-bar", type: "component", description: "Mono-label tabs, caller-controlled active state" },
  { slug: "theme-chip", type: "component", description: "Tag pill" },
  { slug: "pull-quote", type: "component", description: "Display italic quote with left accent border" },
  { slug: "empty-state", type: "component", description: "Empty surface with one italic + action slot" },
  { slug: "card-with-meta", type: "component", description: "The standard plate — title / meta / cover / actions, optional href" },
]

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", fontFamily: "var(--font-primary)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "var(--sp-12) var(--sp-6)" }}>
        {/* Header */}
        <header style={{ marginBottom: "var(--sp-12)" }}>
          <h1 style={{ fontSize: "var(--text-h1)", fontWeight: 300, lineHeight: "var(--lh-h1)", marginBottom: "var(--sp-3)", letterSpacing: "var(--tracking-display)" }}>
            saiteja-aura
          </h1>
          <p style={{ fontSize: "var(--text-body)", color: "var(--fg-muted)", lineHeight: "var(--lh-body)" }}>
            <em style={{ fontWeight: 200 }}>quietly forged</em> — the saiteja.ai design system. Tokens, components, and the four signature inheritance hooks every factory app stamps in.
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
          >{`# Tokens first — every other block depends on them
npx shadcn@latest add https://registry.saiteja.ai/r/sairam-tokens.json

# The four signature hooks (must be wired in every factory app)
npx shadcn@latest add https://registry.saiteja.ai/r/aura-mark.json
npx shadcn@latest add https://registry.saiteja.ai/r/aura-credit.json
npx shadcn@latest add https://registry.saiteja.ai/r/aura-boot.json
# (selection color comes free with the tokens)

# Then any block you need
npx shadcn@latest add https://registry.saiteja.ai/r/status-badge.json
npx shadcn@latest add https://registry.saiteja.ai/r/card-with-meta.json`}</pre>
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
