import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { mtbfData } from '../data/mockData'

function MiniChart({ data, color }) {
  return (
    <div className="h-12 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data.map((v) => ({ v }))}>
          <Line type="monotone" dataKey="v" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function MTBFCharts() {
  const { mtbf, mttr } = mtbfData

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
      <h2 className="text-white text-sm font-semibold mb-4">MTBF / MTTR (This Month)</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-slate-400 text-xs mb-1">MTBF</p>
          <p className="text-2xl font-bold text-emerald-400 leading-none">
            {mtbf.value} <span className="text-sm font-medium text-slate-400">{mtbf.unit}</span>
          </p>
          <p className="text-emerald-400 text-xs font-medium mt-1">↑ {mtbf.change}</p>
          <MiniChart data={mtbf.trend} color="#34d399" />
        </div>

        <div>
          <p className="text-slate-400 text-xs mb-1">MTTR</p>
          <p className="text-2xl font-bold text-red-400 leading-none">
            {mttr.value} <span className="text-sm font-medium text-slate-400">{mttr.unit}</span>
          </p>
          <p className="text-red-400 text-xs font-medium mt-1">↓ {mttr.change}</p>
          <MiniChart data={mttr.trend} color="#f87171" />
        </div>
      </div>
    </div>
  )
}