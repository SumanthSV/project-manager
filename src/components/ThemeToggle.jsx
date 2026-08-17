import { IconSun, IconMoon } from './Icons.jsx'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
    >
      <span className={`theme-toggle__icon ${!isDark ? 'is-active' : ''}`}>
        <IconSun size={15} />
      </span>
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <span className={`theme-toggle__icon ${isDark ? 'is-active' : ''}`}>
        <IconMoon size={15} />
      </span>
    </button>
  )
}
