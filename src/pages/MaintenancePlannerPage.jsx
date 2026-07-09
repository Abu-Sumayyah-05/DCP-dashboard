import MaintenancePriority from '../components/MaintenancePriority'
import ActOnThis from '../components/ActOnThis'
import BestMaintenanceWindow from '../components/BestMaintenanceWindow'

export default function MaintenancePlannerPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Maintenance Planner</h1>
        <p className="text-slate-400 text-sm">Priorities, recommended actions, and the best upcoming maintenance window</p>
      </div>
      <MaintenancePriority />
      <div className="grid grid-cols-2 gap-4">
        <ActOnThis />
        <BestMaintenanceWindow />
      </div>
    </div>
  )
}