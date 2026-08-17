import MetricCard from './MetricCard.jsx'
import ProgressRing from './ProgressRing.jsx'
import CountUpValue from './CountUpValue.jsx'
import TrendChart from './TrendChart.jsx'
import DonutChart from './DonutChart.jsx'
import PipelineStepper from './PipelineStepper.jsx'
import { IconStar, IconPulse, IconDollar, IconPercentRing } from './Icons.jsx'

export default function ProjectCard({ project, colorKey }) {
  return (
    <article className="project-card" aria-labelledby={`project-${project.id}-title`}>
      <header className="project-card__header">
        <div className="project-card__heading">
          <h3 id={`project-${project.id}-title`} className="project-card__name">
            {project.name}
          </h3>
          <span className={`project-card__type-badge project-card__type-badge--c${colorKey}`}>
            {project.category}
          </span>
        </div>
        <p className="project-card__code">{project.code}</p>
      </header>

      <dl className="project-card__meta">
        <div>
          <dt>Type</dt>
          <dd>{project.type}</dd>
        </div>
        <div>
          <dt>Start date</dt>
          <dd>{project.startDate}</dd>
        </div>
        <div>
          <dt>End date</dt>
          <dd>{project.endDate}</dd>
        </div>
      </dl>

      <PipelineStepper status={project.status} />

      <div className="metrics-grid">
        <MetricCard icon={<IconStar />} label="Value Added">
          <p className="metric-card__text">{project.valueAdded}</p>
        </MetricCard>

        <MetricCard icon={<IconPulse />} label="Business Impact">
          <p className="metric-card__text">{project.businessImpact}</p>
        </MetricCard>

        <MetricCard icon={<IconDollar />} label="Cost Saving" highlight align="center">
          <CountUpValue value={project.costSaving} />
        </MetricCard>

        <MetricCard icon={<IconPercentRing />} label="AI Involvement" align="center">
          <ProgressRing value={project.aiInvolvement} colorKey={colorKey} label="AI Involvement" />
        </MetricCard>
      </div>

      <div className="charts-grid">
        <TrendChart data={project.trend} title="Cost Savings Trend (YTD)" />
        <DonutChart data={project.allocation} title="Effort Allocation" />
      </div>
    </article>
  )
}
