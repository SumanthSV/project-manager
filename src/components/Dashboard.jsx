import ProjectCard from './ProjectCard.jsx'
import { IconArrowLeft, IconAlert } from './Icons.jsx'

export default function Dashboard({ member, onBack }) {
  return (
    <section className="view view--dashboard">
      <button type="button" className="back-button" onClick={onBack}>
        <IconArrowLeft size={16} />
        Back to Team
      </button>

      <header className="dashboard-header">
        <span className={`dashboard-header__avatar dashboard-header__avatar--c${member.colorKey}`}>
          {member.initials}
        </span>
        <div>
          <h1 className="dashboard-header__name">{member.name}</h1>
          <p className="dashboard-header__role">{member.role}</p>
        </div>
      </header>

      {member.alert && (
        <div className="alert-banner" role="status">
          <IconAlert size={17} />
          <span>{member.alert}</span>
        </div>
      )}

      <div className="project-list">
        {member.projects.map((project) => (
          <ProjectCard key={project.id} project={project} colorKey={member.colorKey} />
        ))}
      </div>
    </section>
  )
}
