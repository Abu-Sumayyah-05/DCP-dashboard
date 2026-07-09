import { ArrowUp, ArrowDown } from 'lucide-react'
import { plantKPIs } from '../data/mockData'

export default function PlantKPIs({ limit, onViewAll }) {
  const items = limit ? plantKPIs.slice(0, limit) : plantKPIs

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">PLANT KPIs (Today's)</h2>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
          >
            View all
          </button>
        )}
      </div>

      <div className="space-y-3">
        {items.map((kpi) => {
          const isUp = kpi.direction === 'up'
          const Icon = isUp ? ArrowUp : ArrowDown
          return (
            <div key={kpi.label} className="flex items-center justify-between text-sm">
              <span className="text-slate-400">{kpi.label}</span>
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