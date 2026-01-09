import { ChevronRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-900">About Us</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Who We Are</h2>
        <p className="text-lg">
          Algorithmic Minds is a student-centered educational project created for the ELO Competition. Our focus is to explain Artificial Intelligence in a way that is simple, responsible, and useful for schools.
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Team Name Inspiration</h2>
        <p className="text-lg">
          The name <span className="font-bold text-indigo-700">Algorithmic Minds</span> is inspired by Al-Khwarizmi, a famous mathematician and scholar. His work led to the word <em>algorithm</em>, which is the foundation of modern computing and AI.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why This Project?</h2>
        <p className="text-lg mb-4">
          Today, AI tools are widely used, but many students and teachers do not fully understand how to use them correctly. This project aims to show that:
        </p>
        <ul className="space-y-2 text-lg">
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>AI can support learning</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>AI should be used responsibly</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
            <span>Human thinking is always important</span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Project Goal</h2>
        <p className="text-lg">
          To help students and teachers use AI as a learning assistant, not as a shortcut or replacement for thinking.
        </p>
      </div>
    </div>
  )
}