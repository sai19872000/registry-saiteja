// Generic tab bar. Pass your own tab keys + labels via the tabs prop.
// Caller controls active state and change handler.
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
        background: 'var(--surface)',
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
              flex: 1,
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
              padding: 'var(--sp-3) var(--sp-4)',
              cursor: 'pointer',
              fontSize: 'var(--text-small)',
              fontFamily: 'var(--font-primary)',
              fontWeight: isActive ? 600 : 400,
              color: isActive ? 'var(--fg)' : 'var(--fg-muted)',
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
