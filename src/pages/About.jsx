// frontend/src/pages/About.jsx - UPDATED
import { Users, Target, Zap, BookOpen, Globe, Award, Heart, Code2 } from 'lucide-react'

const About = () => {
  const team = [
    { 
      name: 'Alex Johnson', 
      role: 'Lead Developer & Instructor', 
      bio: 'Full-stack developer with 8+ years experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Sarah Williams', 
      role: 'UI/UX Designer', 
      bio: 'Specialized in creating beautiful learning interfaces',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Mike Chen', 
      role: 'Content Creator', 
      bio: 'Creates engaging educational content',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    { 
      name: 'Emma Davis', 
      role: 'Community Manager', 
      bio: 'Builds and supports our learning community',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Our Mission',
      description: 'Make web development education accessible and effective for everyone.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Our Vision',
      description: 'Become the leading platform for structured web development learning.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Our Approach',
      description: 'Combine theory with hands-on practice through interactive examples.'
    }
  ]

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About <span className="gradient-text">DevRoadmap</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We're passionate about making web development education accessible, 
            interactive, and effective for learners worldwide.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12">
            <div className="flex items-center mb-8">
              <Code2 className="h-10 w-10 text-primary-600 dark:text-primary-400 mr-4" />
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="mb-6">
                DevRoadmap was founded in 2023 by a team of passionate developers and educators 
                who noticed a gap in web development education. Many learners struggled with 
                unstructured resources and overwhelming amounts of information.
              </p>
              <p className="mb-6">
                Our mission is simple: provide clear, structured paths for learning web development. 
                We break down complex topics into digestible chunks, provide interactive examples, 
                and guide learners from beginner to advanced levels.
              </p>
              <p>
                Today, thousands of developers use DevRoadmap to accelerate their learning journey. 
                We continue to grow and improve, driven by our community's feedback and the 
                ever-evolving web development landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
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

      {/* Team */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Passionate individuals dedicated to improving web development education
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-50" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-gray-800 mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">10,000+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Learners</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Learning Topics</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About