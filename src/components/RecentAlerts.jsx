import { AlertTriangle, Activity, CheckCircle2 } from 'lucide-react'
import { recentAlerts } from '../data/mockData'

const levelStyles = {
  critical: { icon: AlertTriangle, color: 'text-red-400 bg-red-500/15' },
  warning: { icon: Activity, color: 'text-amber-400 bg-amber-500/15' },
  ok: { icon: CheckCircle2, color: 'text-emerald-400 bg-emerald-500/15' },
}

export default function RecentAlerts() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">RECENT ALERTS</h2>
        <button className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-3 min-w-0">
        {recentAlerts.map((alert, idx) => {
          const style = levelStyles[alert.level] || levelStyles.ok
          const Icon = style.icon
          return (
            <div key={idx} className="flex items-start gap-3 min-w-0">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${style.color}`}>
                <Icon size={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm leading-tight">
                  <span className="font-medium">{alert.equipment}</span>
                  <span className="text-slate-400"> — {alert.message}</span>
                </p>
              </div>
              <span className="text-slate-500 text-xs whitespace-nowrap shrink-0">
                {alert.time}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}