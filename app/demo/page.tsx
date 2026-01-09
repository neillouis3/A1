'use client'
import { useState } from 'react'

export default function DemoPage() {
  const [demoInput, setDemoInput] = useState('')
  const [demoResult, setDemoResult] = useState('')
  const [demoType, setDemoType] = useState('word')

  const handleDemo = () => {
    if (!demoInput.trim()) {
      setDemoResult('Please enter some text to analyze.')
      return
    }

    if (demoType === 'word') {
      setDemoResult(`📖 Definition: "${demoInput}" - This is a simulated definition. In a real application, this would provide a clear, grade-appropriate explanation with example sentences.`)
    } else {
      setDemoResult(`✏️ Improvement Tips: Your sentence could be enhanced by checking grammar, clarity, and structure. This is a demonstration - a real tool would provide specific suggestions.`)
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-900">Try It / Demo</h1>
      
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Interactive Learning Demo</h2>
        <p className="text-lg">
          This section shows how AI can be used responsibly for learning support.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-3">Select Demo Type:</label>
          <div className="flex gap-4">
            <button
              onClick={() => { setDemoType('word'); setDemoResult(''); setDemoInput(''); }}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                demoType === 'word'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📝 Word Explanation
            </button>
            <button
              onClick={() => { setDemoType('sentence'); setDemoResult(''); setDemoInput(''); }}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                demoType === 'sentence'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ✏️ Sentence Improvement
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-2">
              {demoType === 'word' ? 'Enter a word:' : 'Enter a sentence:'}
            </label>
            <input
              type="text"
              value={demoInput}
              onChange={(e) => setDemoInput(e.target.value)}
              placeholder={demoType === 'word' ? 'e.g., algorithm' : 'e.g., I go to school yesterday.'}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
            />
          </div>

          <button
            onClick={handleDemo}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Analyze
          </button>

          {demoResult && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-lg">{demoResult}</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
        <h3 className="text-xl font-semibold text-red-800 mb-2">Important Notice</h3>
        <p className="text-lg text-red-900">
          This tool is for learning support only. It helps students improve skills—it is not for cheating or copying work.
        </p>
      </div>
    </div>
  )
}