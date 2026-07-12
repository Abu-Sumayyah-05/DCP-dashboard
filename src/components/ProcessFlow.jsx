import { Factory } from 'lucide-react'
import { processFlow } from '../data/mockData'

const machineImages = import.meta.glob('../assets/machines/*', {
  eager: true,
  import: 'default',
})

const getMachineImage = (imageName) => {
  const directMatch = machineImages[`../assets/machines/${imageName}`]

  if (directMatch) {
    return directMatch
  }

  if (imageName === 'preheater.jpg') {
    return machineImages['../assets/machines/preheater2.jpg']
  }

  return null
}

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

      <div className="flex items-center min-w-[820px]">
        {processFlow.map((stage, idx) => {
          const style = statusStyles[stage.status] || statusStyles.healthy
          const isLast = idx === processFlow.length - 1
          const imageSrc = getMachineImage(stage.image)

          return (
            <div key={stage.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-2 shrink-0 w-[104px]">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-xl overflow-hidden bg-slate-800 ring-2 ${style.ring}`}>
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={stage.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Factory size={26} className="text-slate-300" />
                      </div>
                    )}
                  </div>
                  <span
                    className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${style.dot}`}
                  />
                </div>
                <p className="text-slate-300 text-xs text-center leading-tight">
                  {stage.id}. {stage.name}
                </p>
              </div>

              {!isLast && (
                <div className="flex-1 h-px bg-slate-700 mx-3 mb-8" />
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