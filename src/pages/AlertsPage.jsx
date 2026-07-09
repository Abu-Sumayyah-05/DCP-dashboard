import RecentAlerts from '../components/RecentAlerts'

export default function AlertsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Alerts</h1>
        <p className="text-slate-400 text-sm">Full alert history across the plant</p>
      </div>
      <RecentAlerts />
    </div>
  )
}