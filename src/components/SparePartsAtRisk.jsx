import { sparePartsAtRisk } from '../data/mockData'

const riskStyles = {
  High: 'text-orange-400',
  Medium: 'text-amber-400',
  Low: 'text-emerald-400',
}

export default function SparePartsAtRisk({ limit, onViewAll }) {
  const rows = limit ? sparePartsAtRisk.slice(0, limit) : sparePartsAtRisk

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col min-w-0 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">SPARE PARTS AT RISK</h2>
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
        <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="text-slate-500 text-[11px] uppercase tracking-wide">
            <th className="text-left font-medium pb-2">Part</th>
            <th className="text-left font-medium pb-2">Equipment</th>
            <th className="text-left font-medium pb-2">Risk</th>
            <th className="text-left font-medium pb-2">Est. Need Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.part} className="border-t border-slate-800">
              <td className="py-2.5 text-white font-medium whitespace-nowrap">{row.part}</td>
              <td className="py-2.5 text-slate-300">{row.equipment}</td>
              <td className={`py-2.5 font-medium ${riskStyles[row.risk]}`}>{row.risk}</td>
              <td className="py-2.5 text-slate-300">{row.needBy}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}