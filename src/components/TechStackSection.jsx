// frontend/src/components/TechStackSection.jsx
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3
} from 'react-icons/si'

const TechStackSection = () => {
  const technologies = [
    { icon: <SiHtml5 />, name: 'HTML5', color: 'text-orange-500' },
    { icon: <SiCss3 />, name: 'CSS3', color: 'text-blue-500' },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: <SiReact />, name: 'React', color: 'text-cyan-500' },
    { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-500' },
    { icon: <SiExpress />, name: 'Express', color: 'text-gray-500' },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-600' },
    { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-blue-400' },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Built With Modern Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Our platform uses the latest web technologies for the best performance and experience
        </p>
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center glass-card p-6 hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`text-4xl ${tech.color} mb-3`}>
                {tech.icon}
              </div>
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStackSection