import { useState } from 'react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Overview from './pages/Overview'
import ProcessFlowPage from './pages/ProcessFlowPage'
import EquipmentPage from './pages/EquipmentPage'
import AlertsPage from './pages/AlertsPage'
import PredictionsPage from './pages/PredictionsPage'
import MaintenancePlannerPage from './pages/MaintenancePlannerPage'
import SparePartsPage from './pages/SparePartsPage'
import ReportsKPIsPage from './pages/ReportsKPIsPage'
import AIAssistantPage from './pages/AIAssistantPage'

export default function App() {
  const [activePage, setActivePage] = useState('overview')

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview onNavigate={setActivePage} />
      case 'process-flow':
        return <ProcessFlowPage />
      case 'equipment':
        return <EquipmentPage />
      case 'alerts':
        return <AlertsPage />
      case 'predictions':
        return <PredictionsPage />
      case 'maintenance-planner':
        return <MaintenancePlannerPage />
      case 'spare-parts':
        return <SparePartsPage />
      case 'reports-kpis':
        return <ReportsKPIsPage />
      case 'ai-assistant':
        return <AIAssistantPage />
      default:
        return <Overview onNavigate={setActivePage} />
    }
  }

  return (
    <div className="flex min-h-dvh flex-col lg:flex-row bg-slate-950 overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-slate-950">
          {renderPage()}
        </main>
      </div>
    </div>
  )
}