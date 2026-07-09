import PlantKPIs from '../components/PlantKPIs'
import MTBFCharts from '../components/MTBFCharts'

export default function ReportsKPIsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Reports & KPIs</h1>
        <p className="text-slate-400 text-sm">Plant performance metrics and reliability trends</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <PlantKPIs />
        <MTBFCharts />
      </div>
    </div>
  )
}