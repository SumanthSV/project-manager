import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks.js'

/**
 * Circular progress indicator. Animates its stroke on mount by relying on a
 * CSS transition on `stroke-dashoffset` — we render at 0 first, then flip to
 * the real value one frame later so the browser has something to transition
 * from.
 */
export default function ProgressRing({
  value,
  size = 108,
  strokeWidth = 10,
  colorKey = 1,
  label,
}) {
  const clamped = Math.max(0, Math.min(100, value))
  const prefersReducedMotion = usePrefersReducedMotion()
  const [animated, setAnimated] = useState(prefersReducedMotion ? clamped : 0)

  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimated(clamped)
      return
    }
    const id = requestAnimationFrame(() => setAnimated(clamped))
    return () => cancelAnimationFrame(id)
  }, [clamped, prefersReducedMotion])

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (animated / 100) * circumference

  return (
    <div
      className="progress-ring"
      role="img"
      aria-label={`${label ? label + ': ' : ''}${clamped}%`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="progress-ring__track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={`progress-ring__value progress-ring__value--c${colorKey}`}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="progress-ring__label">
        <span className="progress-ring__number">{clamped}</span>
        <span className="progress-ring__percent">%</span>
      </div>
    </div>
  )
}
