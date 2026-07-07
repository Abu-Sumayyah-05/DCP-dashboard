import { Factory } from 'lucide-react'
import { rotaryKilnDetail } from '../data/mockData'

export default function EquipmentDetail() {
  const { name, riskLabel, healthScore, remainingUsefulLife, keyParameters, failureProbability } =
    rotaryKilnDetail

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">
          EQUIPMENT DETAIL — <span className="text-red-400">{name.toUpperCase()}</span>
        </h2>
        <span className="bg-red-500/15 text-red-400 text-xs font-medium px-2 py-0.5 rounded">
          {riskLabel}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: image + health score */}
        <div>
          <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center mb-3">
            <Factory size={40} className="text-slate-600" />
          </div>
          <p className="text-slate-400 text-xs mb-1">Health Score</p>
          <p className="text-3xl font-bold text-red-400 leading-none mb-3">{healthScore}%</p>
          <p className="text-slate-400 text-xs mb-1">Remaining Useful Life</p>
          <p className="text-lg font-semibold text-white">{remainingUsefulLife}</p>
        </div>

        {/* Right: key parameters */}
        <div>
          <p className="text-slate-400 text-xs mb-2">Key Parameters (Live)</p>
          <div className="space-y-1.5">
            {keyParameters.map((param) => (
              <div key={param.label} className="flex items-center justify-between text-xs">
                <span className="text-slate-400">{param.label}</span>
                <span className="text-white font-medium">{param.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Failure probability bars */}
      <div className="mt-5 pt-4 border-t border-slate-800">
        <p className="text-slate-400 text-xs mb-3">Failure Probability (Top 4)</p>
        <div className="space-y-2.5">
          {failureProbability.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-slate-300">{item.label}</span>
                <span className="text-slate-400">{item.value}%</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}