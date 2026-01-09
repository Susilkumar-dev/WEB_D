// frontend/src/pages/Explore.jsx - UPDATED
import { Link } from 'react-router-dom'
import { Star, Clock, Users, Code, FileText, Layers, Terminal, ArrowRight } from 'lucide-react'

const Explore = () => {
  const stats = [
    { icon: <Star />, value: '100+', label: 'Topics Covered' },
    { icon: <Code />, value: '500+', label: 'Code Examples' },
    { icon: <Users />, value: '10k+', label: 'Active Learners' },
    { icon: <Clock />, value: '50+', label: 'Hours of Content' },
  ]

  const learningPaths = [
    {
      title: 'HTML Mastery',
      description: 'Learn HTML structure, semantic elements, forms, and modern HTML5 features',
      icon: <FileText className="h-12 w-12" />,
      path: '/html',
      color: 'from-orange-500 to-red-500',
      topics: 24,
      duration: '12 hours'
    },
    {
      title: 'CSS Styling',
      description: 'Master CSS styling, layouts, animations, and responsive design principles',
      icon: <Layers className="h-12 w-12" />,
      path: '/css',
      color: 'from-blue-500 to-cyan-500',
      topics: 32,
      duration: '18 hours'
    },
    {
      title: 'JavaScript Programming',
      description: 'Learn JavaScript fundamentals, DOM manipulation, async programming, and modern ES6+',
      icon: <Terminal className="h-12 w-12" />,
      path: '/javascript',
      color: 'from-yellow-500 to-green-500',
      topics: 45,
      duration: '25 hours'
    }
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Explore <span className="gradient-text">Learning Paths</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Choose your learning path and master web development step by step.
            Each path includes comprehensive notes, interactive examples, and practice exercises.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                    {stat.icon}
                    <span className="ml-2">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Link key={index} to={path.path}>
                <div className="glass-card p-8 h-full hover:transform hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${path.color} p-4 mb-6`}>
                    <div className="text-white">
                      {path.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{path.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {path.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {path.topics} topics
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {path.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-primary-600 dark:text-primary-400 group-hover:translate-x-2 transition-transform">
                    <span className="font-medium">Start Learning</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center glass-card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Choose Your Path</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Select HTML, CSS, or JavaScript based on your learning goals.
              </p>
            </div>
            <div className="text-center glass-card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Follow the Roadmap</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Progress through topics in a logical order, building knowledge.
              </p>
            </div>
            <div className="text-center glass-card p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Practice & Master</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete exercises and projects to reinforce your learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Explore







