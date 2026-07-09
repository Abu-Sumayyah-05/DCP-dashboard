import SparePartsAtRisk from '../components/SparePartsAtRisk'

export default function SparePartsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Spare Parts</h1>
        <p className="text-slate-400 text-sm">Parts at risk based on predicted equipment failure</p>
      </div>
      <SparePartsAtRisk />
    </div>
  )
}