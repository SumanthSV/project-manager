export default function MetricCard({ icon, label, highlight = false, align = 'start', children }) {
  return (
    <div className={`metric-card ${highlight ? 'metric-card--highlight' : ''}`}>
      <div className="metric-card__icon" aria-hidden="true">
        {icon}
      </div>
      <p className="metric-card__label">{label}</p>
      <div className={`metric-card__body metric-card__body--${align}`}>{children}</div>
    </div>
  )
}
