import { sparePartsAtRisk } from '../data/mockData'

const riskStyles = {
  High: 'text-orange-400',
  Medium: 'text-amber-400',
  Low: 'text-emerald-400',
}

export default function SparePartsAtRisk() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-sm font-semibold">SPARE PARTS AT RISK</h2>
        <button className="text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors">
          View all
        </button>
      </div>

      <table className="w-full min-w-[620px] text-sm">
        <thead>
          <tr className="text-slate-500 text-[11px] uppercase tracking-wide">
            <th className="text-left font-medium pb-2">Part</th>
            <th className="text-left font-medium pb-2">Equipment</th>
            <th className="text-left font-medium pb-2">Risk</th>
            <th className="text-left font-medium pb-2">Est. Need Date</th>
          </tr>
        </thead>
        <tbody>
          {sparePartsAtRisk.map((row) => (
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
  )
}