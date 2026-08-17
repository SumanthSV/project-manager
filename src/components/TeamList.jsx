import MemberCard from './MemberCard.jsx'
import { formatCompactCurrency } from '../utils/format.js'

export default function TeamList({ members, onSelect }) {
  const projectCount = members.reduce((sum, m) => sum + m.projects.length, 0)
  const totalSavings = members.reduce(
    (sum, m) => sum + m.projects.reduce((s, p) => s + p.costSaving, 0),
    0,
  )
  const avgAi = Math.round(
    members
      .flatMap((m) => m.projects)
      .reduce((sum, p, _, arr) => sum + p.aiInvolvement / arr.length, 0),
  )

  return (
    <section className="view view--landing">
      <div className="page-intro">
        <p className="page-intro__eyebrow">Team Project Tracker</p>
        <h1 className="page-intro__title">Team Project Dashboard</h1>
        <p className="page-intro__subtitle">
          Select a team member to review their project assignments, pipeline progress and
          performance metrics.
        </p>
      </div>

      <div className="stat-strip" role="list">
        <div className="stat-pill" role="listitem">
          <span className="stat-pill__value">{members.length}</span>
          <span className="stat-pill__label">Team members</span>
        </div>
        <div className="stat-pill" role="listitem">
          <span className="stat-pill__value">{projectCount}</span>
          <span className="stat-pill__label">Active projects</span>
        </div>
        <div className="stat-pill" role="listitem">
          <span className="stat-pill__value">{formatCompactCurrency(totalSavings)}</span>
          <span className="stat-pill__label">Total savings (YTD)</span>
        </div>
        <div className="stat-pill" role="listitem">
          <span className="stat-pill__value">{avgAi}%</span>
          <span className="stat-pill__label">Avg. AI involvement</span>
        </div>
      </div>

      <h2 className="section-heading">Team members</h2>
      <div className="member-grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
