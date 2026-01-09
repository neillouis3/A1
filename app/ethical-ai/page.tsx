import { Shield, Brain, GraduationCap, Lightbulb } from 'lucide-react'

export default function EthicsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-900">Ethical AI Use</h1>
      
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Responsible Use of AI</h2>
        <p className="text-lg">
          We believe AI should be used carefully and ethically in education.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Ethical Guidelines</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
            <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">AI supports learning, it does not replace it</h3>
              <p className="text-gray-700">AI is a tool to enhance understanding, not a substitute for genuine learning.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <Brain className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Students must think independently</h3>
              <p className="text-gray-700">Critical thinking and personal understanding are essential to education.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-lg">
            <GraduationCap className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Teachers guide how AI is used</h3>
              <p className="text-gray-700">Educators maintain control over the learning process and AI integration.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
            <Lightbulb className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">AI suggestions should always be reviewed</h3>
              <p className="text-gray-700">Never accept AI output without critical evaluation and verification.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-indigo-50 rounded-lg">
            <Shield className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Basic data privacy should be respected</h3>
              <p className="text-gray-700">Student information and work must be protected and used responsibly.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-semibold mb-3">Final Message</h3>
        <p className="text-xl">
          Smart learning happens when humans and technology work together responsibly.
        </p>
      </div>
    </div>
  )
}