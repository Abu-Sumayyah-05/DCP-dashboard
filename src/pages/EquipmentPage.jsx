import EquipmentHealthTable from '../components/EquipmentHealthTable'
import EquipmentDetail from '../components/EquipmentDetail'

export default function EquipmentPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Equipment</h1>
        <p className="text-slate-400 text-sm">Health scores, remaining useful life, and detailed diagnostics</p>
      </div>
      <EquipmentHealthTable />
      <EquipmentDetail />
    </div>
  )
}