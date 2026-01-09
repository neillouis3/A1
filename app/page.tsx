import Link from 'next/link'
import { Brain, Lightbulb, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-blue-900">Algorithmic Minds</h1>
        <p className="text-2xl text-blue-600 italic">Where Learning Meets Artificial Intelligence</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg shadow-md">
        <p className="text-lg leading-relaxed">
          Algorithmic Minds is an educational website designed to show how Artificial Intelligence (AI) can support learning in a simple, safe, and ethical way. This website is created for students from Grades 5–12 and teachers who want help with learning, teaching, and planning. Our goal is to make AI easy to understand and useful for education—not confusing or harmful.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Link href="/what-is-ai" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Brain className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Learn About AI</h3>
          <p className="text-gray-600">Discover what AI is in simple terms</p>
        </Link>
        
        <Link href="/demo" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Try Our Demo</h3>
          <p className="text-gray-600">Experience AI learning tools</p>
        </Link>
        
        <Link href="/ethics" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Shield className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ethical AI Use</h3>
          <p className="text-gray-600">Learn responsible AI practices</p>
        </Link>
      </div>
    </div>
  )
}