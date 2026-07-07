import { useState } from 'react'
import { Sparkles, Send } from 'lucide-react'
import { aiSuggestedQuestions } from '../data/mockData'

export default function AIAssistant() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const handleSend = (text) => {
    const question = text ?? input
    if (!question.trim()) return
    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    // Placeholder response — wire this up to a real backend/AI call later
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: `Looking into "${question}"... (connect this to real data next)` },
      ])
    }, 400)
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={16} className="text-slate-400" />
        <h2 className="text-white text-sm font-semibold">AI ASSISTANT</h2>
      </div>

      {messages.length > 0 && (
        <div className="space-y-2 mb-3 max-h-32 overflow-y-auto">
          {messages.map((m, idx) => (
            <p
              key={idx}
              className={`text-xs ${
                m.role === 'user' ? 'text-white' : 'text-slate-400'
              }`}
            >
              <span className="font-medium">{m.role === 'user' ? 'You: ' : 'Assistant: '}</span>
              {m.text}
            </p>
          ))}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSend()
        }}
        className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about your plant..."
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 transition-colors w-full sm:w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        >
          <Send size={16} className="text-white" />
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {aiSuggestedQuestions.map((q) => (
          <button
            key={q}
            onClick={() => handleSend(q)}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full px-3 py-1.5 text-xs text-slate-300 transition-colors"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}