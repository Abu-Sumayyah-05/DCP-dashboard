import {
  LayoutGrid,
  GitBranch,
  Settings,
  Bell,
  LineChart,
  ClipboardList,
  Package,
  BarChart3,
  Bot,
} from 'lucide-react'
import   Dangote from '../assets/image.png'

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'process-flow', label: 'Process Flow', icon: GitBranch },
  { id: 'equipment', label: 'Equipment', icon: Settings },
  { id: 'alerts', label: 'Alerts', icon: Bell, badge: 7 },
  { id: 'predictions', label: 'Predictions', icon: LineChart },
  { id: 'maintenance-planner', label: 'Maintenance Planner', icon: ClipboardList },
  { id: 'spare-parts', label: 'Spare Parts', icon: Package },
  { id: 'reports-kpis', label: 'Reports & KPIs', icon: BarChart3 },
  { id: 'ai-assistant', label: 'AI Assistant', icon: Bot },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="w-full md:w-60 md:h-screen bg-slate-950 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col shrink-0 md:sticky md:top-0 z-20">
      <div className="px-4 sm:px-5 py-4 sm:py-5 border-b border-slate-800 flex items-center justify-between md:justify-start gap-3">
       <img
      src={Dangote}
      alt="Dangote Cement"
      className="w-9 h-9 object-contain shrink-0"
       />
        <div className="leading-tight">
          <p className="text-white text-sm font-semibold">DANGOTE</p>
          <p className="text-slate-400 text-[10px] tracking-wide">CEMENT</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`shrink-0 md:w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <Icon size={18} className="shrink-0" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}