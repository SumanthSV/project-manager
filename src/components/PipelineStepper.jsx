const STAGES = ['Draft', 'EA Review', 'TAC', 'SARB', 'Completed']

export default function PipelineStepper({ status }) {
  if (status === 'Rejected') {
    return (
      <div className="pipeline pipeline--rejected" aria-label="Pipeline status: Rejected">
        <span className="pipeline__rejected-badge">Rejected</span>
      </div>
    )
  }

  const currentIndex = STAGES.indexOf(status)

  return (
    <ol className="pipeline" aria-label={`Pipeline status: ${status}`}>
      {STAGES.map((stage, i) => {
        const state = i < currentIndex ? 'done' : i === currentIndex ? 'active' : 'upcoming'
        return (
          <li key={stage} className={`pipeline__step pipeline__step--${state}`}>
            <span className="pipeline__dot" aria-hidden="true">
              {state === 'done' ? '✓' : ''}
            </span>
            <span className="pipeline__step-label">{stage}</span>
          </li>
        )
      })}
    </ol>
  )
}
