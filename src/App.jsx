import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Overview from './pages/Overview'

export default function App() {
  const [activePage, setActivePage] = useState('overview')

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview />
      default:
        return (
          <div className="p-6">
            <p className="text-slate-400 text-sm">
              This page ("{activePage}") hasn't been built yet — Overview is the only page wired up so far.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-slate-950 overflow-x-hidden">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="flex-1 flex min-w-0 flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}