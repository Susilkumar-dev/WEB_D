// frontend/src/components/Navbar.jsx - FIXED
import { Link } from 'react-router-dom'
import { Code2, Menu, X, Box, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'HTML Notes', path: '/html-notes' },
    { name: 'CSS Notes', path: '/css-notes' },
    { name: 'JavaScript Notes', path: '/js-notes' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Code2 className="h-8 w-8 text-blue-600 dark:text-cyan-500" />
            <span className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
              DevRoadmap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-500 
                         transition-all duration-300 font-medium hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 
                           transition-all duration-300 active:scale-95
                           border border-gray-200 dark:border-gray-700 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar