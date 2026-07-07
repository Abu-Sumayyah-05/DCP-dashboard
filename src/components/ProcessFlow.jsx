import { Factory } from 'lucide-react'
import { processFlow } from '../data/mockData'

const statusStyles = {
  healthy: { dot: 'bg-emerald-400', ring: 'ring-emerald-400/30' },
  watch: { dot: 'bg-amber-400', ring: 'ring-amber-400/30' },
  'high-risk': { dot: 'bg-orange-500', ring: 'ring-orange-500/30' },
  critical: { dot: 'bg-red-500', ring: 'ring-red-500/30' },
  offline: { dot: 'bg-slate-500', ring: 'ring-slate-500/30' },
}

const legend = [
  { label: 'Healthy', color: 'bg-emerald-400' },
  { label: 'Watch', color: 'bg-amber-400' },
  { label: 'High Risk', color: 'bg-orange-500' },
  { label: 'Critical', color: 'bg-red-500' },
  { label: 'Offline', color: 'bg-slate-500' },
]

export default function ProcessFlow() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 overflow-x-auto">
      <h2 className="text-white text-sm font-semibold mb-5">PLANT PROCESS FLOW</h2>

      <div className="flex items-center min-w-[640px]">
        {processFlow.map((stage, idx) => {
          const style = statusStyles[stage.status] || statusStyles.healthy
          const isLast = idx === processFlow.length - 1

          return (
            <div key={stage.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-lg bg-slate-800 flex items-center justify-center ring-2 ${style.ring}`}
                  >
                    <Factory size={26} className="text-slate-300" />
                  </div>
                  <span
                    className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${style.dot}`}
                  />
                </div>
                <p className="text-slate-300 text-xs text-center whitespace-nowrap">
                  {stage.id}. {stage.name}
                </p>
              </div>

              {!isLast && (
                <div className="flex-1 h-px bg-slate-700 mx-2 mb-6" />
              )}
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-slate-800 min-w-[640px]">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
            <span className="text-slate-400 text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}