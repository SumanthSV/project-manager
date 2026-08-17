import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks.js'

const WIDTH = 320
const HEIGHT = 150
const PAD_TOP = 14
const PAD_BOTTOM = 26
const PAD_X = 8

export default function TrendChart({ data, title, unitPrefix = '$', unitSuffix = 'k' }) {
  const pathRef = useRef(null)
  const [drawn, setDrawn] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const values = data.map((d) => d.value)
  const max = Math.max(...values)
  const min = Math.min(0, ...values)
  const plotW = WIDTH - PAD_X * 2
  const plotH = HEIGHT - PAD_TOP - PAD_BOTTOM

  const xFor = (i) => PAD_X + (i / (data.length - 1)) * plotW
  const yFor = (v) => PAD_TOP + plotH - ((v - min) / (max - min || 1)) * plotH

  const linePoints = data.map((d, i) => `${xFor(i)},${yFor(d.value)}`).join(' ')
  const areaPoints = `${PAD_X},${PAD_TOP + plotH} ${linePoints} ${WIDTH - PAD_X},${PAD_TOP + plotH}`

  useEffect(() => {
    if (prefersReducedMotion) {
      setDrawn(true)
      return
    }
    const id = requestAnimationFrame(() => setDrawn(true))
    return () => cancelAnimationFrame(id)
  }, [prefersReducedMotion])

  const gradientId = 'trendFill-' + (title || 'chart').replace(/\s+/g, '')

  return (
    <div className="chart-card">
      <h4 className="chart-card__title">{title}</h4>
      <svg
        className="trend-chart"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`${title}: trend from ${unitPrefix}${values[0]}${unitSuffix} to ${unitPrefix}${
          values[values.length - 1]
        }${unitSuffix}`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="trend-chart__gradient-start" />
            <stop offset="100%" className="trend-chart__gradient-end" />
          </linearGradient>
        </defs>

        {/* gridlines */}
        {[0.25, 0.5, 0.75].map((f) => (
          <line
            key={f}
            className="trend-chart__grid"
            x1={PAD_X}
            x2={WIDTH - PAD_X}
            y1={PAD_TOP + plotH * f}
            y2={PAD_TOP + plotH * f}
          />
        ))}

        <polygon
          points={areaPoints}
          fill={`url(#${gradientId})`}
          className={`trend-chart__area ${drawn ? 'is-visible' : ''}`}
        />

        <polyline
          ref={pathRef}
          points={linePoints}
          className={`trend-chart__line ${drawn ? 'is-drawn' : ''}`}
        />

        {data.map((d, i) => (
          <circle
            key={d.month}
            cx={xFor(i)}
            cy={yFor(d.value)}
            r={3.2}
            className={`trend-chart__dot ${drawn ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${i * 60 + 300}ms` }}
          />
        ))}

        {data.map((d, i) => (
          <text
            key={d.month}
            x={xFor(i)}
            y={HEIGHT - 6}
            className="trend-chart__axis-label"
            textAnchor="middle"
          >
            {d.month}
          </text>
        ))}
      </svg>
    </div>
  )
}
