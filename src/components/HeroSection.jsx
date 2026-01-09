// frontend/src/components/HeroSection.jsx - UPDATED
import { ArrowRight, Sparkles, Globe, Cpu, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAnimation3D } from '../context/Animation3DContext.jsx'

const HeroSection = () => {
  const { get3DTransform, getFloatAnimation } = useAnimation3D()

  return (
    <section className="relative py-20 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-10 left-10 w-72 h-72 bg-[var(--primary)]/10 
                       rounded-full mix-blend-multiply filter blur-3xl ${getFloatAnimation()}`} 
             style={{ transform: get3DTransform(50) }} />
        <div className={`absolute bottom-10 right-10 w-72 h-72 bg-[var(--primary)]/10 
                       rounded-full mix-blend-multiply filter blur-3xl ${getFloatAnimation()} delay-1000`} 
             style={{ transform: get3DTransform(30) }} />
        
        {/* Floating Icons */}
        <div className={`absolute top-1/4 right-1/4 ${getFloatAnimation()} delay-500`}>
          <Globe className="h-12 w-12 text-[var(--primary)]/30" style={{ transform: get3DTransform(40) }} />
        </div>
        <div className={`absolute bottom-1/4 left-1/4 ${getFloatAnimation()} delay-700`}>
          <Cpu className="h-12 w-12 text-[var(--primary)]/30" style={{ transform: get3DTransform(40) }} />
        </div>
        <div className={`absolute top-1/3 left-1/3 ${getFloatAnimation()} delay-300`}>
          <Zap className="h-8 w-8 text-[var(--primary)]/20" style={{ transform: get3DTransform(20) }} />
        </div>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        {/* Badge with 3D effect */}
        <div className="inline-flex items-center px-4 py-2 rounded-full 
                       bg-[var(--hover-bg)] dark:bg-[var(--hover-bg)] 
                       text-[var(--primary)] mb-6 card-3d"
             style={{ transform: get3DTransform(10) }}>
          <Sparkles className="h-4 w-4 mr-2" />
          The Ultimate Web Dev Learning Platform
        </div>
        
        {/* Main Heading with 3D Text */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">Master</span>
          <span className="gradient-text" style={{ transform: get3DTransform(5) }}>
            Web Development
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-3xl mx-auto">
          Learn HTML, CSS, and JavaScript through structured roadmaps, 
          interactive notes, and hands-on examples. Start your journey today!
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/explore">
            <button className="btn-primary flex items-center card-3d group" 
                    style={{ transform: get3DTransform(15) }}>
              Start Learning Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
          <Link to="/about">
            <button className="btn-secondary card-3d" style={{ transform: get3DTransform(10) }}>
              Learn More
            </button>
          </Link>
        </div>
        
        {/* Stats with 3D Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: '100+', label: 'Topics' },
            { value: '500+', label: 'Examples' },
            { value: '10k+', label: 'Learners' },
            { value: '50+', label: 'Hours' }
          ].map((stat, idx) => (
            <div key={idx} 
                 className={`glass-card p-6 text-center roadmap-step-3d ${getFloatAnimation()}`}
                 style={{ animationDelay: `${idx * 200}ms`, transform: get3DTransform(20) }}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection