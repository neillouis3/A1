import { ChevronRight } from 'lucide-react'

export default function AIEducationPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-900">AI in Education</h1>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How AI Supports Learning</h2>
        <p className="text-lg">
          AI can be a powerful educational tool when used correctly. It supports both students and teachers.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">A. AI for Students</h2>
        <p className="text-lg mb-4">AI can help students by:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Explaining the meaning of difficult words</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Giving tips to improve sentences</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Helping organize paragraphs</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Summarizing reading passages</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Supporting ESL learners with language clarity</span>
          </li>
        </ul>
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-sm"><strong>Example:</strong> A student writes a sentence → AI suggests how to improve grammar or clarity.</p>
          <p className="text-sm text-red-700 font-semibold mt-2">⚠️ Students must read, understand, and learn from the suggestions.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">B. AI for Teachers</h2>
        <p className="text-lg mb-4">AI can support teachers by:</p>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
            <span>Suggesting lesson ideas</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
            <span>Creating practice quiz questions</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
            <span>Helping write feedback sentences</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
            <span>Supporting differentiated learning</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" />
            <span>Saving planning time</span>
          </li>
        </ul>
        <div className="bg-green-50 p-4 rounded">
          <p className="text-sm"><strong>Example:</strong> A teacher asks AI for quiz ideas → Teacher reviews and edits before using.</p>
        </div>
      </div>

      <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Key Message</h3>
        <p className="text-lg">
          AI supports learning, but teachers guide the process and students do the thinking.
        </p>
      </div>
    </div>
  )
}