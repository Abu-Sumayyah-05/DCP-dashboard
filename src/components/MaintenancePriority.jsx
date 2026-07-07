import { Clock } from 'lucide-react'
import { maintenancePriority } from '../data/mockData'

const riskStyles = {
  Critical: 'bg-red-500/15 text-red-400',
  High: 'bg-orange-500/15 text-orange-400',
  Medium: 'bg-amber-500/15 text-amber-400',
  Low: 'bg-emerald-500/15 text-emerald-400',
}

const impactStyles = {
  'Very High': 'text-red-400',
  High: 'text-orange-400',
  Medium: 'text-amber-400',
  Low: 'text-emerald-400',
}

export default function MaintenancePriority() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col overflow-x-auto">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={16} className="text-slate-400" />
        <h2 className="text-white text-sm font-semibold">
          MAINTENANCE PRIORITY <span className="text-slate-500 font-normal">(Top 5)</span>
        </h2>
      </div>

      <table className="w-full min-w-[620px] text-sm">
        <thead>
          <tr className="text-slate-500 text-[11px] uppercase tracking-wide">
            <th className="text-left font-medium pb-2 w-8">#</th>
            <th className="text-left font-medium pb-2">Equipment</th>
            <th className="text-left font-medium pb-2">Risk</th>
            <th className="text-left font-medium pb-2">RUL</th>
            <th className="text-left font-medium pb-2">Impact</th>
          </tr>
        </thead>
        <tbody>
          {maintenancePriority.map((row) => (
            <tr key={row.rank} className="border-t border-slate-800">
              <td className="py-2.5 text-slate-400">{row.rank}</td>
              <td className="py-2.5 text-white font-medium">{row.equipment}</td>
              <td className="py-2.5">
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${riskStyles[row.risk]}`}>
                  {row.risk}
                </span>
              </td>
              <td className="py-2.5 text-slate-300">{row.rul}</td>
              <td className={`py-2.5 font-medium ${impactStyles[row.impact]}`}>
                {row.impact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}