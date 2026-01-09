// frontend/src/components/Footer.jsx
import { Code2, Github, Twitter, Linkedin, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

// Change from named export to default export
const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-500/5 via-transparent to-transparent" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold gradient-text">
                DevRoadmap
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Master web development through structured learning paths and interactive notes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">Home</Link></li>
              <li><Link to="/explore" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">Explore</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-bold text-lg mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li><Link to="/html-notes" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">HTML Notes</Link></li>
              <li><Link to="/css-notes" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">CSS Notes</Link></li>
              <li><Link to="/js-notes" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">JavaScript Notes</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get notified about new tutorials and updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-transparent"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-r-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Made with <Heart className="inline h-4 w-4 text-red-500" /> by DevRoadmap Team • © {new Date().getFullYear()} 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Change to default export
export default Footer