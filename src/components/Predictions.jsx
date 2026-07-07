import { Sparkles } from 'lucide-react'
import { predictions } from '../data/mockData'

const dotColors = {
  High: 'bg-red-500',
  Medium: 'bg-amber-400',
  Low: 'bg-emerald-400',
}

const valueColors = {
  High: 'text-red-400',
  Medium: 'text-amber-400',
  Low: 'text-emerald-400',
}

export default function Predictions() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={16} className="text-slate-400" />
        <h2 className="text-white text-sm font-semibold">PREDICTIONS</h2>
      </div>

      <div className="space-y-3 flex-1 min-w-0">
        {predictions.map((p) => (
          <div key={p.equipment} className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <span className={`w-2 h-2 rounded-full shrink-0 ${dotColors[p.level]}`} />
              <div className="min-w-0">
                <p className="text-white text-sm truncate">{p.equipment} Failure Probability</p>
                <p className={`text-xs ${valueColors[p.level]}`}>{p.level}</p>
              </div>
            </div>
            <span className={`text-sm font-semibold shrink-0 ${valueColors[p.level]}`}>
              {p.probability}%
            </span>
          </div>
        ))}
      </div>

      <button className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors mt-4 text-left">
        View all predictions
      </button>
    </div>
  )
}