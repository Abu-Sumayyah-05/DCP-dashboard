import ProcessFlow from '../components/ProcessFlow'

export default function ProcessFlowPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">Process Flow</h1>
        <p className="text-slate-400 text-sm">Live status of each stage in the production line</p>
      </div>
      <ProcessFlow />
    </div>
  )
}