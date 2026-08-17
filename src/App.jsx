import { useEffect, useState } from 'react'
import teamData from './data/teamData.js'
import TeamList from './components/TeamList.jsx'
import Dashboard from './components/Dashboard.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

const THEME_KEY = 'team-dashboard-theme'

export default function App() {
  const [selectedMemberId, setSelectedMemberId] = useState(null)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem(THEME_KEY) || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  const selectedMember = teamData.find((m) => m.id === selectedMemberId) || null

  function handleSelect(memberId) {
    setSelectedMemberId(memberId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBack() {
    setSelectedMemberId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function toggleTheme() {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="app-shell">
      <div className="app-topbar">
        <span className="app-topbar__brand">📊 Project Tracker</span>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </div>

      <main className="app-main">
        <div
          key={selectedMember ? selectedMember.id : 'landing'}
          className="view-transition"
        >
          {selectedMember ? (
            <Dashboard member={selectedMember} onBack={handleBack} />
          ) : (
            <TeamList members={teamData} onSelect={handleSelect} />
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>Team Project Tracker — internal demo dashboard. All data shown is sample data.</p>
      </footer>
    </div>
  )
}
