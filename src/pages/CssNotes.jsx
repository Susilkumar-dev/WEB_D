// frontend/src/pages/CssNotes.jsx
import { useState, useEffect } from 'react'
import { useAnimation3D } from '../context/Animation3DContext.jsx'
import { cssNotesData } from '../data/cssNotes.jsx'
import { 
  BookOpen, FileText, Hash, Code, LinkIcon, Image, List, 
  Table, FormInput, Film, Layout, Globe, Eye, CheckCircle,
  ChevronLeft, ChevronRight, Zap, Target, Layers, Clock,
  TrendingUp, Users, Award, CheckSquare, Palette, Brush,
  Type, Grid, Circle, Square, Triangle, Pentagon,
  AlignLeft, AlignCenter, AlignRight, Bold, Italic,
  Underline, Minus, Maximize, MinusCircle, Code2,
  Box, Layers as LayersIcon, Sparkles, GitBranch,
  GitPullRequest, Wind, Cloud, Droplets, CloudRain,
  CloudSnow, CloudLightning, CloudDrizzle, CloudFog,
  CloudSun, CloudMoon, Sun, Moon, Star, Zap as ZapIcon
} from 'lucide-react'
import toast from 'react-hot-toast'

const CssNotes = () => {
  const [activeTopic, setActiveTopic] = useState('css-introduction')
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('css-progress')
    return saved ? JSON.parse(saved) : { 'css-introduction': true }
  })
  const [expandedSections, setExpandedSections] = useState({})
  const { get3DTransform, getFloatAnimation } = useAnimation3D()

  // Save progress
  useEffect(() => {
    localStorage.setItem('css-progress', JSON.stringify(progress))
  }, [progress])

  const currentNote = cssNotesData.find(note => note.id === activeTopic)
  const totalTopics = cssNotesData.length
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
      color: 'from-purple-500 to-pink-500'
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
      value: '20 min',
      color: 'from-blue-500 to-cyan-500'
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
    { 
      title: 'Fundamentals', 
      topics: cssNotesData.slice(0, 7), 
      color: 'border-purple-500',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      title: 'Layout & Design', 
      topics: cssNotesData.slice(7, 15), 
      color: 'border-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Advanced Concepts', 
      topics: cssNotesData.slice(15, 22), 
      color: 'border-green-500',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Modern CSS', 
      topics: cssNotesData.slice(22), 
      color: 'border-orange-500',
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  // CSS Learning tips
  const cssTips = [
    { title: 'Use DevTools', desc: 'Master Chrome DevTools for debugging and live editing' },
    { title: 'Mobile First', desc: 'Always design for mobile first, then enhance for larger screens' },
    { title: 'CSS Variables', desc: 'Use CSS custom properties for consistent theming' },
    { title: 'Flexbox & Grid', desc: 'Master both Flexbox and Grid for modern layouts' },
    { title: 'Avoid !important', desc: 'Use specificity and cascade instead of !important' },
    { title: 'Performance', desc: 'Optimize CSS for performance - minimize and concatenate files' }
  ]

  // CSS Tools
  const cssTools = [
    { name: 'PostCSS', desc: 'Transform CSS with JavaScript', icon: <Code2 className="h-5 w-5" /> },
    { name: 'Sass/SCSS', desc: 'CSS preprocessor with advanced features', icon: <Sparkles className="h-5 w-5" /> },
    { name: 'Tailwind', desc: 'Utility-first CSS framework', icon: <Wind className="h-5 w-5" /> },
    { name: 'CSS Modules', desc: 'Locally scoped CSS by default', icon: <Box className="h-5 w-5" /> },
    { name: 'Styled Components', desc: 'CSS-in-JS library for React', icon: <GitBranch className="h-5 w-5" /> },
    { name: 'Bootstrap', desc: 'Popular CSS framework', icon: <LayersIcon className="h-5 w-5" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-30"></div>
              <h1 className="text-5xl md:text-6xl font-bold relative">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  CSS Notes
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
              Master CSS from basics to advanced with interactive examples, animations, and modern techniques
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
                    <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
                    Your Progress
                  </h3>
                  <span className="text-sm font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
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
                  <Layers className="h-5 w-5 mr-2 text-purple-500" />
                  Learning Path
                </h3>
                
                <div className="space-y-6">
                  {learningPaths.map((path, pathIdx) => (
                    <div key={pathIdx} className="space-y-3">
                      <div className="flex items-center">
                        <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${path.gradient}`} />
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
                                         ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800'
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
                                                ? 'text-purple-600 dark:text-purple-400'
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

              {/* CSS Tools */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-blue-500" />
                  CSS Tools & Frameworks
                </h3>
                <div className="space-y-3">
                  {cssTools.map((tool, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="p-2 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 text-white mr-3">
                        {tool.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-gray-800 dark:text-gray-200">
                          {tool.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {tool.desc}
                        </div>
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
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Palette className="h-4 w-4 mr-1" />
                          CSS
                        </div>
                      </div>
                      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {currentNote.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        {currentNote.description || currentNote.sections?.[0]}
                      </p>
                    </div>
                    <button
                      onClick={() => handleMarkComplete(currentNote.id)}
                      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300
                               ${progress[currentNote.id]
                                 ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                                 : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                               }`}
                    >
                      {progress[currentNote.id] ? '✓ Completed' : 'Mark Complete'}
                    </button>
                  </div>

                  {/* Topic Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => {
                        const idx = cssNotesData.findIndex(t => t.id === activeTopic)
                        if (idx > 0) handleTopicClick(cssNotesData[idx - 1].id)
                      }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                      disabled={cssNotesData.findIndex(t => t.id === activeTopic) === 0}
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
                        const idx = cssNotesData.findIndex(t => t.id === activeTopic)
                        if (idx < totalTopics - 1) handleTopicClick(cssNotesData[idx + 1].id)
                      }}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                      disabled={cssNotesData.findIndex(t => t.id === activeTopic) === totalTopics - 1}
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
                        🎨 Content Overview
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {currentNote.sections?.map((section, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
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
                      className="css-content"
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
                          <Code className="h-6 w-6 mr-3 text-purple-500" />
                          Practical Examples
                        </h3>
                        
                        <div className="space-y-8">
                          {currentNote.examples.map((example, idx) => (
                            <div 
                              key={idx}
                              className="glass-card p-6 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
                              style={{ transform: get3DTransform(5) }}
                            >
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-green-500" />
                                {example.title}
                              </h4>
                              
                              <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border border-purple-100 dark:border-purple-800">
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
                                    style.css
                                  </span>
                                </div>
                                
                                <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm leading-relaxed mt-4">
                                  <code className="font-mono">
                                    {example.code}
                                  </code>
                                </pre>

                                {/* Live Preview if available */}
                                {example.preview && (
                                  <div className="mt-6">
                                    <h5 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200 flex items-center">
                                      <Eye className="h-5 w-5 mr-2 text-blue-500" />
                                      Live Preview
                                    </h5>
                                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
                                      <div 
                                        className="css-preview"
                                        dangerouslySetInnerHTML={{ __html: example.preview }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CSS Properties Reference */}
                    {currentNote.id === 'css-properties' && (
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <Hash className="h-6 w-6 mr-3 text-blue-500" />
                          CSS Properties Reference
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-4 text-blue-700 dark:text-blue-400">
                              📋 Common Properties
                            </h4>
                            <div className="space-y-3">
                              {[
                                { prop: 'color', desc: 'Text color' },
                                { prop: 'background-color', desc: 'Background color' },
                                { prop: 'font-size', desc: 'Text size' },
                                { prop: 'margin', desc: 'Outside spacing' },
                                { prop: 'padding', desc: 'Inside spacing' },
                                { prop: 'border', desc: 'Border styling' }
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                                  <code className="font-mono text-purple-600 dark:text-purple-400">{item.prop}</code>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                            <h4 className="font-bold text-lg mb-4 text-purple-700 dark:text-purple-400">
                              🎯 Advanced Properties
                            </h4>
                            <div className="space-y-3">
                              {[
                                { prop: 'transform', desc: '2D/3D transformations' },
                                { prop: 'animation', desc: 'CSS animations' },
                                { prop: 'flex', desc: 'Flexbox layout' },
                                { prop: 'grid', desc: 'CSS Grid layout' },
                                { prop: 'filter', desc: 'Visual effects' },
                                { prop: 'clip-path', desc: 'Clipping paths' }
                              ].map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                                  <code className="font-mono text-blue-600 dark:text-blue-400">{item.prop}</code>
                                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interview Questions Section */}
                    {currentNote.id === 'css-interview' && (
                      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                          <Users className="h-6 w-6 mr-3 text-purple-500" />
                          CSS Interview Questions & Answers
                        </h3>
                        
                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                            <h4 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-3">
                              💼 Common CSS Interview Questions
                            </h4>
                            <div className="space-y-6">
                              {/* Question 1 */}
                              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                                  1. What's the difference between margin and padding?
                                </h5>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-green-800 dark:text-green-300 font-medium">
                                    Margin is the space outside an element's border, while padding is the space inside the border, between the border and the content.
                                  </p>
                                </div>
                              </div>

                              {/* Question 2 */}
                              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                                  2. Explain CSS box model
                                </h5>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-green-800 dark:text-green-300 font-medium">
                                    The CSS box model consists of content, padding, border, and margin. It defines how elements are sized and spaced in relation to each other.
                                  </p>
                                </div>
                              </div>

                              {/* Question 3 */}
                              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                                <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                                  3. What's the difference between Flexbox and Grid?
                                </h5>
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                  <p className="text-green-800 dark:text-green-300 font-medium">
                                    Flexbox is for one-dimensional layouts (either row or column), while Grid is for two-dimensional layouts (both rows and columns). Use Flexbox for components and Grid for overall page layout.
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
                              className="group p-4 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
                            >
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                                  <BookOpen className="h-5 w-5" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
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

                {/* CSS Learning Tips */}
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Zap className="h-6 w-6 mr-3 text-yellow-500" />
                    CSS Mastery Tips
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cssTips.slice(0, 3).map((tip, idx) => (
                      <div 
                        key={idx}
                        className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
                        style={{ 
                          animationDelay: `${idx * 200}ms`,
                          transform: get3DTransform(5)
                        }}
                      >
                        <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
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
                  
                  {/* More tips in a grid */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cssTips.slice(3).map((tip, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 rounded-lg border border-blue-100 dark:border-blue-800"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-2"></div>
                          <h5 className="font-medium text-sm text-gray-800 dark:text-gray-200">
                            {tip.title}
                          </h5>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 ml-4">
                          {tip.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CSS Challenges */}
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Target className="h-6 w-6 mr-3 text-red-500" />
                    CSS Challenges
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                      <h4 className="font-bold text-lg mb-3 text-green-700 dark:text-green-400">
                        🎯 Beginner Challenges
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Create a responsive navigation bar</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Style a form with CSS</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span>Build a CSS-only card component</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl">
                      <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">
                        ⚡ Advanced Challenges
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Target className="h-4 w-4 text-purple-500 mr-2" />
                          <span>Create a CSS-only animated loader</span>
                        </li>
                        <li className="flex items-center">
                          <Target className="h-4 w-4 text-purple-500 mr-2" />
                          <span>Build a responsive grid layout</span>
                        </li>
                        <li className="flex items-center">
                          <Target className="h-4 w-4 text-purple-500 mr-2" />
                          <span>Implement dark/light mode toggle</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <div className="text-gray-400 mb-6">
                  <Palette className="h-24 w-24 mx-auto opacity-50" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  Select a CSS Topic
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Choose a topic from the learning path to start mastering CSS
                </p>
                <button
                  onClick={() => handleTopicClick('css-introduction')}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Start with CSS Introduction
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CssNotes