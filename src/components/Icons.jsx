// Lightweight stroke-based icon set. Kept as plain inline SVG so the project
// has zero icon-library dependency. Every icon accepts a `size` prop and
// inherits color via `currentColor`, so it follows the surrounding text color.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconStar({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <polygon points="12 2.5 15.09 9.26 22.5 10.14 17 15.14 18.5 22.5 12 18.77 5.5 22.5 7 15.14 1.5 10.14 8.91 9.26" />
    </svg>
  )
}

export function IconPulse({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <polyline points="2 13 7 13 9.5 19 14.5 5 17 13 22 13" />
    </svg>
  )
}

export function IconDollar({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <line x1="12" y1="1.5" x2="12" y2="22.5" />
      <path d="M17 6.5c0-2-2-3.2-5-3.2s-5 1.3-5 3.3 2.2 2.7 5 3.4 5 1.5 5 3.5-2 3.4-5 3.4-5-1.2-5-3.2" />
    </svg>
  )
}

export function IconPercentRing({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" />
      <line x1="8" y1="16" x2="16" y2="8" />
      <circle cx="9" cy="9" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconUsers({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20c0-3.6 2.8-6 6.2-6s6.2 2.4 6.2 6" />
      <circle cx="17" cy="8.5" r="2.6" />
      <path d="M15.5 14.2c2.9.3 5 2.5 5 5.8" />
    </svg>
  )
}

export function IconFolder({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M3 6.2c0-.9.7-1.6 1.6-1.6h4.3l1.8 2.2h8.7c.9 0 1.6.7 1.6 1.6v10c0 .9-.7 1.6-1.6 1.6H4.6C3.7 20 3 19.3 3 18.4V6.2Z" />
    </svg>
  )
}

export function IconAlert({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 3.5 22 20.5H2Z" />
      <line x1="12" y1="10" x2="12" y2="14.5" />
      <circle cx="12" cy="17.3" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconArrowLeft({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <line x1="20" y1="12" x2="5" y2="12" />
      <polyline points="10.5 6 4.5 12 10.5 18" />
    </svg>
  )
}

export function IconSun({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <line x1="12" y1="1.5" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22.5" />
      <line x1="4.2" y1="4.2" x2="6" y2="6" />
      <line x1="18" y1="18" x2="19.8" y2="19.8" />
      <line x1="1.5" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22.5" y2="12" />
      <line x1="4.2" y1="19.8" x2="6" y2="18" />
      <line x1="18" y1="6" x2="19.8" y2="4.2" />
    </svg>
  )
}

export function IconMoon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M20.5 14.7A8.7 8.7 0 1 1 9.3 3.5a7 7 0 0 0 11.2 11.2Z" />
    </svg>
  )
}

export function IconWallet({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M3 7.2c0-1 .8-1.8 1.8-1.8h13.4c1 0 1.8.8 1.8 1.8v10c0 1-.8 1.8-1.8 1.8H4.8C3.8 19 3 18.2 3 17.2Z" />
      <path d="M15.5 12.3h3.2a1 1 0 0 1 1 1v1.4a1 1 0 0 1-1 1h-3.2a1.7 1.7 0 0 1 0-3.4Z" />
    </svg>
  )
}
