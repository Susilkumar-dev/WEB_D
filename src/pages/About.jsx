// frontend/src/pages/About.jsx
import { Target, Zap, BookOpen, Code2, Globe, Sparkles } from 'lucide-react'

const About = () => {
  // Team data removed as requested

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Structured Learning',
      description: 'A clear, defined path to master modern web technologies in 2026.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Current Technology',
      description: 'Up-to-date resources covering the latest frameworks and AI tools.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Academic Approach',
      description: 'Focusing on core concepts, theory, and practical application.'
    }
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About The <span className="gradient-text">Project</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            A comprehensive study resource designed to navigate the complexities 
            of the 2026 web development landscape.
          </p>
        </div>
      </section>

      {/* Project Story / Context */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12">
            <div className="flex items-center mb-8">
              <Code2 className="h-10 w-10 text-primary-600 dark:text-primary-400 mr-4" />
              <h2 className="text-3xl font-bold">Project Background</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-6">
                Welcome to DevRoadmap 2026. This platform was developed as an educational 
                project to address the growing complexity of becoming a full-stack developer. 
                With the rapid evolution of AI-assisted coding, server components, and edge 
                computing, the barrier to entry for new students has never been higher.
              </p>
              <p className="mb-6">
                This project serves as a digital study guide, organizing scattered information 
                into a coherent curriculum. It focuses purely on the technical roadmap required 
                to build scalable applications in the current year.
              </p>
              <p>
                Whether for academic research, self-study, or final year project reference, 
                DevRoadmap aims to provide a reliable structure for learning the fundamentals 
                alongside cutting-edge tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Project Objectives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass-card p-8">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Scope / Future Scope */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 border-l-4 border-primary-500">
             <div className="flex items-start">
                <Globe className="h-8 w-8 text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                   <h3 className="text-2xl font-bold mb-4">Future Scope</h3>
                   <p className="text-gray-600 dark:text-gray-300">
                     As web standards continue to evolve, this project aims to integrate 
                     interactive coding environments and AI-driven curriculum adjustments. 
                     The goal is to maintain a living document of the state of the web in 2026 and beyond.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats / Impact (Modified for Project Context) */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">2026</div>
                <div className="text-gray-600 dark:text-gray-400">Curriculum Year</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Tech Stacks Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">Open</div>
                <div className="text-gray-600 dark:text-gray-400">Source Initiative</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">∞</div>
                <div className="text-gray-600 dark:text-gray-400">Learning Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About