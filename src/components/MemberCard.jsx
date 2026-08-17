import { IconFolder, IconAlert } from './Icons.jsx'
import { formatCompactCurrency } from '../utils/format.js'

export default function MemberCard({ member, onSelect }) {
  const totalSavings = member.projects.reduce((sum, p) => sum + p.costSaving, 0)
  const projectCount = member.projects.length

  return (
    <button
      type="button"
      className="member-card"
      onClick={() => onSelect(member.id)}
      aria-label={`Open ${member.name}'s dashboard — ${member.role}, ${projectCount} project${
        projectCount === 1 ? '' : 's'
      }`}
    >
      <span className={`member-card__avatar member-card__avatar--c${member.colorKey}`} aria-hidden="true">
        {member.initials}
      </span>

      <span className="member-card__info">
        <span className="member-card__name">{member.name}</span>
        <span className="member-card__role">{member.role}</span>

        <span className="member-card__badges">
          <span className="badge badge--muted">
            <IconFolder size={14} />
            {projectCount} project{projectCount === 1 ? '' : 's'}
          </span>
          <span className="badge badge--muted">{formatCompactCurrency(totalSavings)}</span>
          {member.alert && (
            <span className="badge badge--alert">
              <IconAlert size={13} />1 alert
            </span>
          )}
        </span>
      </span>

      <span className="member-card__chevron" aria-hidden="true">
        →
      </span>
    </button>
  )
}
