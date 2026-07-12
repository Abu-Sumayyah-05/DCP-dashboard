import {
  Activity,
  ShieldCheck,
  Clock,
  BarChart3,
  Eye,
  AlertOctagon,
  CircleCheck,
} from 'lucide-react'
import StatCard from '../components/StatCard'
import ProcessFlow from '../components/ProcessFlow'
import MaintenancePriority from '../components/MaintenancePriority'
import RecentAlerts from '../components/RecentAlerts'
import EquipmentHealthTable from '../components/EquipmentHealthTable'
import ActOnThis from '../components/ActOnThis'
import Predictions from '../components/Predictions'
import PlantKPIs from '../components/PlantKPIs'
import SparePartsAtRisk from '../components/SparePartsAtRisk'
import { plantStats } from '../data/mockData'

export default function Overview({ onNavigate }) {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Row 1: Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-7 gap-4">
        <StatCard
          icon={Activity}
          label="Overall Plant Health"
          value={`${plantStats.overallHealth.value}%`}
          valueColor="text-emerald-400"
          status={plantStats.overallHealth.status}
        />
        <StatCard
          icon={ShieldCheck}
          label="Reliability Index"
          value={`${plantStats.reliabilityIndex.value}%`}
          valueColor="text-emerald-400"
          status={plantStats.reliabilityIndex.status}
        />
        <StatCard
          icon={Clock}
          label="Availability"
          value={`${plantStats.availability.value}%`}
          valueColor="text-emerald-400"
          status={plantStats.availability.status}
        />
        <StatCard
          icon={BarChart3}
          label="Predicted Downtime Risk"
          value={plantStats.predictedDowntimeRisk.value}
          valueColor="text-emerald-400"
          status={plantStats.predictedDowntimeRisk.status}
        />
        <StatCard
          icon={Eye}
          label="Equipment Under Observation"
          value={plantStats.equipmentUnderObservation.value}
          valueColor="text-amber-400"
          status={plantStats.equipmentUnderObservation.status}
        />
        <StatCard
          icon={AlertOctagon}
          label="Critical Alerts"
          value={plantStats.criticalAlerts.value}
          valueColor="text-red-400"
          status={plantStats.criticalAlerts.status}
        />
        <StatCard
          icon={CircleCheck}
          label="Plant Status"
          value={plantStats.plantStatus.value}
          valueColor="text-emerald-400"
        />
      </div>

      {/* Row 2: Process flow preview */}
      <ProcessFlow />

      {/* Row 3: Alerts preview + Maintenance priority preview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <RecentAlerts limit={3} onViewAll={() => onNavigate('alerts')} />
        <MaintenancePriority limit={3} onViewAll={() => onNavigate('maintenance-planner')} />
      </div>

      {/* Row 4: Equipment preview + Predictions preview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <EquipmentHealthTable limit={4} onViewAll={() => onNavigate('equipment')} />
        <Predictions limit={3} onViewAll={() => onNavigate('predictions')} />
      </div>

      {/* Row 5: Act on this preview + Spare parts preview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ActOnThis limit={2} onViewAll={() => onNavigate('maintenance-planner')} />
        <SparePartsAtRisk limit={3} onViewAll={() => onNavigate('spare-parts')} />
      </div>

      {/* Row 6: Plant KPIs preview */}
      <PlantKPIs limit={3} onViewAll={() => onNavigate('reports-kpis')} />
    </div>
  )
}