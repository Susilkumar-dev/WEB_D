// frontend/src/pages/HtmlNotes.jsx
import { useState, useEffect } from 'react'
import { useAnimation3D } from '../context/Animation3DContext.jsx'
import { htmlNotesData } from '../data/htmlNotes.jsx'
import { 
  BookOpen, FileText, Hash, Code, LinkIcon, Image, List, 
  Table, FormInput, Film, Layout, Globe, Eye, CheckCircle,
  ChevronLeft, ChevronRight, Zap, Target, Layers, Clock,
  TrendingUp, Users, Award, CheckSquare, ChevronDown, ChevronUp
} from 'lucide-react'
import toast from 'react-hot-toast'

const HtmlNotes = () => {
  const [activeTopic, setActiveTopic] = useState('html-introduction')
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('html-progress')
    return saved ? JSON.parse(saved) : { 'html-introduction': true }
  })
  const [expandedSections, setExpandedSections] = useState({})
  const { get3DTransform, getFloatAnimation } = useAnimation3D()

  // Save progress
  useEffect(() => {
    localStorage.setItem('html-progress', JSON.stringify(progress))
  }, [progress])

  const currentNote = htmlNotesData.find(note => note.id === activeTopic)
  const totalTopics = htmlNotesData.length
  const completedTopics = Object.values(progress).filter(Boolean).length
  const progressPercentage = Math.round((completedTopics / totalTopics) * 100)

  const handleTopicClick = (topicId) => {
    setActiveTopic(topicId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMarkComplete = (topicId) => {
    setProgress(prev => ({ ...prev, [topicId]: true }))
    toast.success('Topic marked as complete! 🎉')
  }

  const toggleSection = (sectionIndex) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex]
    }))
  }

  // Stats data
  const stats = [
    { 
      icon: <BookOpen className="h-5 w-5" />, 
      label: 'Total Topics', 
      value: totalTopics,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: <CheckSquare className="h-5 w-5" />, 
      label: 'Completed', 
      value: completedTopics,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <Clock className="h-5 w-5" />, 
      label: 'Avg Time', 
      value: '15 min',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: <TrendingUp className="h-5 w-5" />, 
      label: 'Progress', 
      value: `${progressPercentage}%`,
      color: 'from-orange-500 to-red-500'
    }
  ]

  // Learning path categories
  const learningPaths = [
    { title: 'Foundation', topics: htmlNotesData.slice(0, 5), color: 'border-blue-500' },
    { title: 'Elements', topics: htmlNotesData.slice(5, 10), color: 'border-green-500' },
    { title: 'Advanced', topics: htmlNotesData.slice(10), color: 'border-purple-500' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-30"></div>
              <h1 className="text-5xl md:text-6xl font-bold relative">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  HTML Notes
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Comprehensive guide to HTML with interactive examples and practical exercises
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass-card p-6 backdrop-blur-sm"
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  transform: get3DTransform(10)
                }}
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Learning Path */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              {/* Progress Card */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                    Your Progress
                  </h3>
                  <span className="text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {completedTopics} of {totalTopics} topics completed
                </div>
              </div>

              {/* Learning Path */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-6 flex items-center">
                  <Layers className="h-5 w-5 mr-2 text-green-500" />
                  Learning Path
                </h3>
                
                <div className="space-y-6">
                  {learningPaths.map((path, pathIdx) => (
                    <div key={pathIdx} className="space-y-3">
                      <div className="flex items-center">
                        <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${path.color.split('border-')[1]}`} />
                        <h4 className="ml-3 font-bold text-gray-700 dark:text-gray-300">
                          {path.title}
                        </h4>
                      </div>
                      
                      <div className="space-y-2 ml-5">
                        {path.topics.map((topic, idx) => (
                          <button
                            key={topic.id}
                            onClick={() => handleTopicClick(topic.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all duration-300
                                       flex items-center justify-between group
                                       ${activeTopic === topic.id 
                                         ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800'
                                         : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                       }`}
                          >
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3
                                            ${progress[topic.id] 
                                              ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white'
                                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                            }`}>
                                {topic.order}
                              </div>
                              <div className="text-left">
                                <div className={`font-medium text-sm
                                              ${activeTopic === topic.id 
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-gray-700 dark:text-gray-300'
                                              }`}>
                                  {topic.title}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {topic.difficulty} • {topic.estimatedTime}min
                                </div>
                              </div>
                            </div>
                            {progress[topic.id] && (
                              <CheckSquare className="h-5 w-5 text-green-500" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note Content Area */}
          <div className="lg:w-3/4">
            {currentNote ? (
              <div className="space-y-8">
                {/* Topic Header */}
                <div className="glass-card p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold
                                      ${currentNote.difficulty === 'beginner' 
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                        : currentNote.difficulty === 'intermediate'
                                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                      }`}>
                          {currentNote.difficulty}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          {currentNote.estimatedTime} min read
                        </div>
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {currentNote.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        {currentNote.sections?.[0]}
                      </p>
                    </div>
                    <button
                      onClick={() => handleMarkComplete(currentNote.id)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                               ${progress[currentNote.id]
                                 ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                                 : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                               }`}
                    >
                      {progress[currentNote.id] ? '✓ Completed' : 'Mark Complete'}
                    </button>
                  </div>

                  {/* Topic Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        const idx = htmlNotesData.findIndex(t => t.id === activeTopic)
                        if (idx > 0) handleTopicClick(htmlNotesData[idx - 1].id)
                      }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      disabled={htmlNotesData.findIndex(t => t.id === activeTopic) === 0}
                    >
                      <ChevronLeft className="h-5 w-5 mr-2" />
                      Previous
                    </button>
                    
                    <div className="text-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Topic {currentNote.order} of {totalTopics}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        const idx = htmlNotesData.findIndex(t => t.id === activeTopic)
                        if (idx < totalTopics - 1) handleTopicClick(htmlNotesData[idx + 1].id)
                      }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      disabled={htmlNotesData.findIndex(t => t.id === activeTopic) === totalTopics - 1}
                    >
                      Next
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </button>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="glass-card p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                        📝 Content Overview
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {currentNote.sections?.map((section, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold mr-3">
                              {idx + 1}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">
                                {section}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main Content with Beautiful Styling */}
                    <div 
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: currentNote.content }}
                      style={{
                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        lineHeight: '1.8'
                      }}
                    />

                    {/* Examples Section */}
                    {currentNote.examples && currentNote.examples.length > 0 && (
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <Code className="h-6 w-6 mr-3 text-blue-500" />
                          Practical Examples
                        </h3>
                        
                        <div className="space-y-8">
                          {currentNote.examples.map((example, idx) => (
                            <div 
                              key={idx}
                              className="glass-card p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                              style={{ transform: get3DTransform(5) }}
                            >
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-green-500" />
                                {example.title}
                              </h4>
                              
                              <div className="mb-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
                                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {example.explanation}
                                </div>
                              </div>

                              <div className="relative">
                                <div className="absolute top-3 right-3 flex items-center space-x-2">
                                  <div className="flex space-x-1">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                  </div>
                                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                                    example.html
                                  </span>
                                </div>
                                
                                <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed mt-4">
                                  <code className="font-mono">
                                    {example.code}
                                  </code>
                                </pre>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Interview Questions Section */}
                    {currentNote.id === 'html-interview' && (
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <Users className="h-6 w-6 mr-3 text-purple-500" />
                          Interview Questions & Answers
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                            <h4 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">
                              💼 Common Interview Questions
                            </h4>
                            <div className="space-y-6">
                              {/* Question 1 */}
                              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                                  1. What is the purpose of DOCTYPE in HTML?
                                </h5>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-green-800 dark:text-green-300 font-medium">
                                    DOCTYPE tells the browser which version of HTML the document is using. It helps the browser render the page correctly and ensures proper parsing.
                                  </p>
                                </div>
                              </div>

                              {/* Question 2 */}
                              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                                  2. Explain the difference between &lt;div&gt; and &lt;span&gt;
                                </h5>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-green-800 dark:text-green-300 font-medium">
                                    &lt;div&gt; is a block-level element used for grouping content, while &lt;span&gt; is an inline element used for styling text within content. Div creates a new line, span stays inline.
                                  </p>
                                </div>
                              </div>

                              {/* Question 3 */}
                              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                                  3. What are HTML5 semantic elements?
                                </h5>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-green-800 dark:text-green-300 font-medium">
                                    Semantic elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;aside&gt;, and &lt;footer&gt; clearly describe their meaning to both browsers and developers, improving accessibility and SEO.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Resources Section */}
                    {currentNote.resources && currentNote.resources.length > 0 && (
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <BookOpen className="h-6 w-6 mr-3 text-orange-500" />
                          Additional Resources
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentNote.resources.map((resource, idx) => (
                            <a
                              key={idx}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                            >
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold mr-4">
                                  <BookOpen className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {resource.title}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">
                                    {resource.url}
                                  </div>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Learning Tips */}
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-yellow-500" />
                    Learning Tips
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { title: 'Practice Daily', desc: 'Build small HTML pages every day to reinforce concepts' },
                      { title: 'Use Semantic Tags', desc: 'Always use appropriate HTML5 semantic elements' },
                      { title: 'Validate Your Code', desc: 'Use W3C Validator to ensure proper HTML structure' }
                    ].map((tip, idx) => (
                      <div 
                        key={idx}
                        className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
                        style={{ 
                          animationDelay: `${idx * 200}ms`,
                          transform: get3DTransform(5)
                        }}
                      >
                        <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 mb-4">
                          <Zap className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                          {tip.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {tip.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <div className="text-gray-400 mb-6">
                  <BookOpen className="h-24 w-24 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Select a Topic
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Choose a topic from the learning path to start learning HTML
                </p>
                <button
                  onClick={() => handleTopicClick('html-introduction')}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Start with Introduction
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HtmlNotes