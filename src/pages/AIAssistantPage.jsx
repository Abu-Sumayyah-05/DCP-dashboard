import AIAssistant from '../components/AIAssistant'

export default function AIAssistantPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-white text-xl font-semibold">AI Assistant</h1>
        <p className="text-slate-400 text-sm">Ask questions about plant health, maintenance, and predictions</p>
      </div>
      <div className="max-w-2xl">
        <AIAssistant />
      </div>
    </div>
  )
}