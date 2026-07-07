import { Calendar } from 'lucide-react'
import { bestMaintenanceWindow } from '../data/mockData'

export default function BestMaintenanceWindow() {
  const { dateRange, note, recommendedFor } = bestMaintenanceWindow

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={16} className="text-slate-400" />
        <h2 className="text-white text-sm font-semibold">BEST MAINTENANCE WINDOW</h2>
      </div>

      <p className="text-emerald-400 text-lg font-bold mb-1 break-words">{dateRange}</p>
      <p className="text-slate-400 text-xs mb-4">({note})</p>

      <p className="text-slate-400 text-xs mb-2">Recommended for:</p>
      <ul className="space-y-1">
        {recommendedFor.map((item) => (
          <li key={item} className="text-slate-300 text-sm flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-slate-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}