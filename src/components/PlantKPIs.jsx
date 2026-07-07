import { ArrowUp, ArrowDown } from 'lucide-react'
import { plantKPIs } from '../data/mockData'

export default function PlantKPIs() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-sm font-semibold mb-4">PLANT KPIs (Today's)</h2>

      <div className="space-y-3">
        {plantKPIs.map((kpi) => {
          const isUp = kpi.direction === 'up'
          const Icon = isUp ? ArrowUp : ArrowDown
          return (
            <div key={kpi.label} className="flex items-center justify-between gap-3 text-sm">
              <span className="text-slate-400 min-w-0 break-words">{kpi.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">{kpi.value}</span>
                <span
                  className={`flex items-center gap-0.5 text-xs font-medium ${
                    isUp ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  <Icon size={12} />
                  {kpi.change}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}