const statusColors = {
  Good: 'text-emerald-400',
  Monitored: 'text-amber-400',
  'Requires attention': 'text-red-400',
  'No immediate risk': 'text-slate-400',
  'Running Normally': 'text-emerald-400',
}

export default function StatCard({ icon: Icon, label, value, valueColor, status, statusColor }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col gap-2 min-w-0 h-full">
      <div className="flex items-center gap-2 text-slate-400 text-[11px] font-medium uppercase tracking-wide">
        {Icon && <Icon size={14} className="shrink-0" />}
        <span className="truncate">{label}</span>
      </div>
      <p className={`text-2xl font-bold leading-none ${valueColor || 'text-white'}`}>
        {value}
      </p>
      {status && (
        <p className={`text-xs font-medium ${statusColor || statusColors[status] || 'text-slate-400'}`}>
          {status}
        </p>
      )}
    </div>
  )
}