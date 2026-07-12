import { CheckSquare, ChevronRight } from 'lucide-react'
import { actOnThis } from '../data/mockData'

const priorityStyles = {
  High: 'text-orange-400',
  Medium: 'text-amber-400',
  Low: 'text-emerald-400',
}

export default function ActOnThis({ limit, onViewAll }) {
  const items = limit ? actOnThis.slice(0, limit) : actOnThis

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col min-w-0 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CheckSquare size={16} className="text-slate-400" />
          <h2 className="text-white text-sm font-semibold">ACT ON THIS</h2>
        </div>
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
        {items.map((item, idx) => (
          <button
            key={idx}
            className="w-full text-left bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg p-3 transition-colors flex items-center justify-between gap-3"
          >
            <div className="min-w-0">
              <p className="text-white text-sm font-medium leading-snug mb-2">{item.title}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                <span className="text-slate-500">
                  Priority{' '}
                  <span className={`font-medium ${priorityStyles[item.priority]}`}>
                    {item.priority}
                  </span>
                </span>
                <span className="text-slate-500">
                  Due in <span className="text-slate-300 font-medium">{item.dueIn}</span>
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="text-slate-500 shrink-0" />
          </button>
        ))}
      </div>
    </div>
  )
}