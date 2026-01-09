import { BookOpen, Code, CheckCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const TopicDetail = ({ topic, category, onBack, onNext, onPrevious, currentIndex, totalTopics }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to={`/${category}-notes`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {category.toUpperCase()} Topics
          </Link>
        </div>

        {/* Topic Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  topic.difficulty === 'beginner' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                    : topic.difficulty === 'intermediate'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {topic.difficulty}
                </span>
                <span className="ml-4 text-gray-600 dark:text-gray-400">
                  ⏱️ {topic.estimatedTime} min read
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {topic.title}
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {topic.description}
              </p>
            </div>
            <div className="hidden md:block">
              <BookOpen className="h-12 w-12 text-blue-500 dark:text-blue-400" />
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Topic {currentIndex + 1} of {totalTopics}
            </span>
            <button className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Complete
            </button>
          </div>
        </div>

        {/* Topic Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {topic.content}
          </div>
        </div>

        {/* Code Examples */}
        {topic.examples && topic.examples.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
              <Code className="h-6 w-6 mr-3 text-blue-500" />
              Code Examples
            </h2>
            <div className="space-y-8">
              {topic.examples.map((example, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {example.title}
                  </h3>
                  <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm md:text-base">
                    <code>{example.code}</code>
                  </pre>
                  {example.explanation && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-blue-800 dark:text-blue-300">
                        💡 {example.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practice Questions */}
        {topic.practiceQuestions && topic.practiceQuestions.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              🧠 Practice Questions
            </h2>
            <div className="space-y-6">
              {topic.practiceQuestions.map((question, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                    {question.question}
                  </p>
                  <div className="space-y-2">
                    {question.options?.map((option, optIdx) => (
                      <div key={optIdx} className="flex items-center">
                        <input 
                          type="radio" 
                          id={`q${idx}-opt${optIdx}`}
                          name={`question-${idx}`}
                          className="h-4 w-4 text-blue-600"
                        />
                        <label 
                          htmlFor={`q${idx}-opt${optIdx}`}
                          className="ml-2 text-gray-700 dark:text-gray-300"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  {question.answer && (
                    <div className="mt-4 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-green-800 dark:text-green-300 font-medium">
                        Answer: {question.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mb-12">
          <button
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
              currentIndex === 0
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            ← Previous Topic
          </button>
          <button
            onClick={onNext}
            disabled={currentIndex === totalTopics - 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center ${
              currentIndex === totalTopics - 1
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Next Topic →
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopicDetail