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
import EquipmentDetail from '../components/EquipmentDetail'
import ActOnThis from '../components/ActOnThis'
import Predictions from '../components/Predictions'
import PlantKPIs from '../components/PlantKPIs'
import MTBFCharts from '../components/MTBFCharts'
import SparePartsAtRisk from '../components/SparePartsAtRisk'
import BestMaintenanceWindow from '../components/BestMaintenanceWindow'
import AIAssistant from '../components/AIAssistant'
import { plantStats } from '../data/mockData'

export default function Overview() {
  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Row 1: Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7 gap-4">
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

      {/* Row 2: Process flow + Maintenance priority + Recent alerts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="col-span-1">
          <ProcessFlow />
        </div>
        <div className="col-span-1">
          <MaintenancePriority />
        </div>
        <div className="col-span-1">
          <RecentAlerts />
        </div>
      </div>

      {/* Row 3: Equipment health + Equipment detail + Act on this + Predictions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
        <div className="col-span-1">
          <EquipmentHealthTable />
        </div>
        <div className="col-span-1">
          <EquipmentDetail />
        </div>
        <div className="col-span-1">
          <ActOnThis />
        </div>
        <div className="col-span-1">
          <Predictions />
        </div>
      </div>

      {/* Row 4: Plant KPIs + MTBF/MTTR + Spare parts + Best window + AI assistant */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-4">
        <div className="col-span-1">
          <PlantKPIs />
        </div>
        <div className="col-span-1">
          <MTBFCharts />
        </div>
        <div className="col-span-1">
          <SparePartsAtRisk />
        </div>
        <div className="col-span-1">
          <BestMaintenanceWindow />
        </div>
        <div className="col-span-1">
          <AIAssistant />
        </div>
      </div>
    </div>
  )
}