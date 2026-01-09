export default function ImpactPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-blue-900">Usage & Impact</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-5xl mb-2">👩‍🎓</div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Student Users</h3>
          <p className="text-4xl font-bold text-blue-600">___</p>
          <p className="text-sm text-gray-600 mt-2">(Placeholder - To be updated)</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="text-5xl mb-2">👨‍🏫</div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Teacher Users</h3>
          <p className="text-4xl font-bold text-green-600">___</p>
          <p className="text-sm text-gray-600 mt-2">(Placeholder - To be updated)</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Program Details</h2>
        <div className="space-y-3">
          <p className="text-lg"><span className="font-semibold">📘 Grade Levels:</span> Grades 5–12</p>
          <p className="text-lg"><span className="font-semibold">📚 Subjects Supported:</span> English, ESL, General Learning</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">How Was It Used?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Vocabulary improvement</span>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Writing support</span>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Lesson planning assistance</span>
          </div>
          <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span>Reading comprehension support</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
        <h3 className="text-xl font-semibold text-green-800 mb-3">Example Impact Statement</h3>
        <p className="text-lg italic">
          "Students from Grades 5–12 and teachers used the website to improve writing, vocabulary, and lesson planning using ethical AI practices."
        </p>
      </div>
    </div>
  )
}