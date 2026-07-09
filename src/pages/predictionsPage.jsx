import Predictions from '../components/Predictions'

export default function PredictionsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Predictions</h1>
        <p className="text-slate-400 text-sm">Failure probability forecasts by equipment</p>
      </div>
      <Predictions />
    </div>
  )
}