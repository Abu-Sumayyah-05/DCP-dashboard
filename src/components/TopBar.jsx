import { Bell, Cloud, ChevronDown, User } from 'lucide-react'

export default function TopBar() {
  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const timeStr = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <header className="bg-slate-950 border-b border-slate-800 flex flex-col gap-4 px-4 sm:px-6 py-4 shrink-0 lg:flex-row lg:items-center lg:justify-between">
      <div className="min-w-0">
        <h1 className="text-white text-base sm:text-lg font-semibold leading-tight truncate">
          DANGOTE CEMENT PLANT
        </h1>
        <p className="text-slate-400 text-xs">
          Predictive Maintenance &amp; Reliability Dashboard
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:justify-end">
        <div className="flex items-center gap-2 text-slate-300 text-sm shrink-0">
          <Cloud size={18} className="text-slate-400" />
          <div className="leading-tight">
            <p className="font-medium text-white">31°C</p>
            <p className="text-[11px] text-slate-400">Partly Cloudy</p>
          </div>
        </div>

        <button className="relative text-slate-300 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
            7
          </span>
        </button>

        <div className="text-sm text-slate-300 leading-tight shrink-0">
          <p className="text-white font-medium">{dateStr}</p>
          <p className="text-[11px] text-slate-400">{timeStr}</p>
        </div>

        <div className="flex items-center gap-2 pl-0 sm:pl-4 sm:border-l border-slate-800 shrink-0">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
            <User size={16} className="text-slate-300" />
          </div>
          <div className="leading-tight">
            <p className="text-white text-sm font-medium">Plant Manager</p>
            <p className="text-[11px] text-slate-400">Admin</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </header>
  )
}