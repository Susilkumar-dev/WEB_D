// frontend/src/components/ExploreCards.jsx - UPDATED
import { FileCode, Palette, Code, ChevronRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAnimation3D } from '../context/Animation3DContext.jsx'

const ExploreCards = () => {
  const { get3DTransform, getFloatAnimation } = useAnimation3D()

  const cards = [
    {
      title: 'HTML Notes',
      description: 'Learn HTML structure, tags, semantics, forms, and HTML5 features',
      icon: <FileCode className="h-12 w-12" />,
      path: '/html-notes',
      color: 'from-[#DC2626] to-[#F59E0B]',
      topics: 16,
      gradient: 'bg-gradient-to-br from-[#DC2626] to-[#F59E0B]'
    },
    {
      title: 'CSS Notes',
      description: 'Master CSS styling, layouts, animations, and responsive design',
      icon: <Palette className="h-12 w-12" />,
      path: '/css-notes',
      color: 'from-[#2563EB] to-[#0EA5E9]',
      topics: 9,
      gradient: 'bg-gradient-to-br from-[#2563EB] to-[#0EA5E9]'
    },
    {
      title: 'JavaScript Notes',
      description: 'Understand JavaScript fundamentals, DOM, events, and async programming',
      icon: <Code className="h-12 w-12" />,
      path: '/js-notes',
      color: 'from-[#16A34A] to-[#22C55E]',
      topics: 15,
      gradient: 'bg-gradient-to-br from-[#16A34A] to-[#22C55E]'
    }
  ]

  return (
    <section className="py-20 relative">
      {/* Background 3D Roadmap */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-[800px] h-[800px] roadmap-3d">
          <div className="absolute inset-0 border-2 border-dashed border-[var(--primary)]/20 
                         rounded-full animate-3d-rotate" />
          <div className="absolute inset-0 border-2 border-dashed border-[var(--primary)]/10 
                         rounded-full animate-3d-rotate" style={{ animationDelay: '5s' }} />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Start Your Learning Journey
        </h2>
        <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Choose your path and start learning web development step by step
        </p>
        
        {/* 3D Roadmap Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link key={index} to={card.path}>
              <div className={`glass-card p-8 h-full transition-all duration-500 
                             group cursor-pointer card-3d ${getFloatAnimation()}`}
                   style={{ 
                     animationDelay: `${index * 200}ms`,
                     transform: get3DTransform(30) 
                   }}>
                
                {/* 3D Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${card.gradient} rounded-2xl 
                                blur-xl opacity-50`} />
                  <div className={`w-20 h-20 rounded-2xl ${card.gradient} p-4 relative 
                                group-hover:scale-110 transition-transform duration-300`}
                       style={{ transform: get3DTransform(20) }}>
                    <div className="text-white">
                      {card.icon}
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--primary)] 
                              transition-colors">
                  {card.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  {card.description}
                </p>
                
                {/* Progress Indicator */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[var(--text-secondary)]">Progress</span>
                    <span className="font-bold">0/{card.topics}</span>
                  </div>
                  <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/70 
                                  rounded-full progress-bar-3d w-0 group-hover:w-1/3 
                                  transition-all duration-1000" />
                  </div>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                  <span className="text-sm text-[var(--text-muted)]">
                    {card.topics} topics
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm text-[var(--primary)] mr-2">
                      Start Learning
                    </span>
                    <ChevronRight className="h-5 w-5 text-[var(--primary)] 
                                            group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Roadmap Connection Lines */}
        <div className="hidden md:flex justify-center items-center mt-12">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] 
                        to-transparent rounded-full" />
          <div className="mx-8 text-[var(--text-muted)] text-sm">
            Follow the Path →
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] 
                        to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default ExploreCards