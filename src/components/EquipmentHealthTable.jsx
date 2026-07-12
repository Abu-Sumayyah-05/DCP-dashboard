import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { equipmentHealth } from '../data/mockData'

const statusStyles = {
  Healthy: 'text-emerald-400',
  Watch: 'text-amber-400',
  'High Risk': 'text-red-400',
}

const barColor = (score) => {
  if (score >= 90) return 'bg-emerald-400'
  if (score >= 75) return 'bg-amber-400'
  return 'bg-red-500'
}

const trendColor = (status) => {
  if (status === 'High Risk') return '#f87171'
  if (status === 'Watch') return '#fbbf24'
  return '#34d399'
}

export default function EquipmentHealthTable({ limit, onViewAll }) {
  const rows = limit ? equipmentHealth.slice(0, limit) : equipmentHealth

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 min-w-0 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">EQUIPMENT HEALTH OVERVIEW</h2>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
          >
            View all
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
        <thead>
          <tr className="text-slate-500 text-[11px] uppercase tracking-wide">
            <th className="text-left font-medium pb-2">Equipment</th>
            <th className="text-left font-medium pb-2">Health Score</th>
            <th className="text-left font-medium pb-2">Status</th>
            <th className="text-left font-medium pb-2">RUL</th>
            <th className="text-left font-medium pb-2">Trend (7D)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((eq) => (
            <tr key={eq.name} className="border-t border-slate-800">
              <td className="py-2.5 text-white font-medium whitespace-nowrap">{eq.name}</td>
              <td className="py-2.5">
                <div className="flex items-center gap-2 w-32">
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${barColor(eq.healthScore)}`}
                      style={{ width: `${eq.healthScore}%` }}
                    />
                  </div>
                  <span className="text-slate-300 text-xs w-8 shrink-0">{eq.healthScore}%</span>
                </div>
              </td>
              <td className={`py-2.5 font-medium ${statusStyles[eq.status]}`}>{eq.status}</td>
              <td className="py-2.5 text-slate-300">{eq.rul}</td>
              <td className="py-2.5 w-20">
                <div className="h-8 w-20">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={eq.trend.map((v) => ({ v }))}>
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke={trendColor(eq.status)}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}