// frontend/src/components/FeatureSection.jsx
import { BookOpen, Code, TrendingUp, Users } from 'lucide-react'

const FeatureSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Structured Learning',
      description: 'Follow curated roadmaps from basics to advanced concepts'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Interactive Notes',
      description: 'Live code examples and hands-on practice'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Progress Tracking',
      description: 'Monitor your learning journey with visual progress'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Driven',
      description: 'Learn from community contributions and discussions'
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose DevRoadmap?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          We provide the best learning experience with modern tools and approaches
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection