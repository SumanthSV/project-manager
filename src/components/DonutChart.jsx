import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks.js'

const SIZE = 132
const STROKE = 20

export default function DonutChart({ data, title }) {
  const radius = (SIZE - STROKE) / 2
  const circumference = 2 * Math.PI * radius
  const total = data.reduce((sum, d) => sum + d.value, 0)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [drawn, setDrawn] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return
    const id = requestAnimationFrame(() => setDrawn(true))
    return () => cancelAnimationFrame(id)
  }, [prefersReducedMotion])

  let cumulative = 0

  return (
    <div className="chart-card">
      <h4 className="chart-card__title">{title}</h4>
      <div className="donut-chart">
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label={title}>
          <circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={radius}
            className="donut-chart__track"
            strokeWidth={STROKE}
          />
          {data.map((segment) => {
            const fraction = segment.value / total
            const segLength = fraction * circumference
            const dashArray = `${segLength} ${circumference - segLength}`
            const dashOffset = -cumulative
            cumulative += segLength
            return (
              <circle
                key={segment.label}
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={radius}
                strokeWidth={STROKE}
                className={`donut-chart__segment donut-chart__segment--c${segment.colorKey}`}
                strokeDasharray={dashArray}
                strokeDashoffset={drawn ? dashOffset : circumference}
                transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}
              />
            )
          })}
        </svg>
        <ul className="donut-chart__legend">
          {data.map((segment) => (
            <li key={segment.label} className="donut-chart__legend-item">
              <span className={`donut-chart__swatch donut-chart__swatch--c${segment.colorKey}`} />
              <span className="donut-chart__legend-label">{segment.label}</span>
              <span className="donut-chart__legend-value">{segment.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
