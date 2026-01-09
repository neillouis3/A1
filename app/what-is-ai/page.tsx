export default function WhatIsAIPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-900">What Is AI?</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">What Is Artificial Intelligence?</h2>
        <p className="text-lg">
          Artificial Intelligence, or AI, is technology that helps computers learn from information and make helpful decisions. AI does not think like humans—it follows rules and patterns created by people.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Everyday Examples of AI</h2>
        <p className="text-lg mb-4">You already use AI in daily life, such as:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 bg-white p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Spell check while typing</span>
          </div>
          <div className="flex items-center space-x-3 bg-white p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Voice assistants (like Siri or Google Assistant)</span>
          </div>
          <div className="flex items-center space-x-3 bg-white p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Learning apps and games</span>
          </div>
          <div className="flex items-center space-x-3 bg-white p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Recommendation systems (videos, music)</span>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="text-xl font-semibold text-yellow-800 mb-2">Important Reminder</h3>
        <p className="text-lg text-yellow-900">
          AI helps humans, but it does not replace human thinking or learning.
        </p>
      </div>
    </div>
  )
}