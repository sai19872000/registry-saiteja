// Aura tab bar — generic tabs. Mono labels, hairline rule, accent underline.
interface Tab<T extends string = string> {
  key: T
  label: string
}

interface TabBarProps<T extends string = string> {
  tabs: Tab<T>[]
  activeTab: T
  onTabChange: (tab: T) => void
  ariaLabel?: string
}

export function TabBar<T extends string = string>({
  tabs,
  activeTab,
  onTabChange,
  ariaLabel = 'Tabs',
}: TabBarProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      style={{
        display: 'flex',
        borderBottom: '1px solid var(--border)',
        background: 'transparent',
        flexShrink: 0,
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeTab
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${tab.key}`}
            id={`tab-${tab.key}`}
            onClick={() => onTabChange(tab.key)}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: `1px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
              padding: 'var(--sp-3) var(--sp-6)',
              cursor: 'pointer',
              fontSize: 'var(--text-xs)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: 'var(--tracking-mono)',
              textTransform: 'uppercase',
              color: isActive ? 'var(--accent)' : 'var(--fg-muted)',
              transition: `color var(--duration-base) var(--ease-standard),
                           border-color var(--duration-base) var(--ease-standard)`,
              marginBottom: '-1px',
            }}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
