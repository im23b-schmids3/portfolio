'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <nav className="bg-gray-900 border-b border-gray-800 relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Sandro Schmid
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-blue-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              About me
            </Link>
            <Link 
              href="/skills" 
              className={`transition-colors ${
                isActive('/skills') 
                  ? 'text-blue-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/projects" 
              className={`transition-colors ${
                isActive('/projects') 
                  ? 'text-blue-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-400 font-medium' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Burger Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu*/}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700 shadow-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-3 rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                  isActive('/')
                    ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={closeMenu}
                style={{
                  animation: 'slideInFromTop 0.3s ease-out 0s forwards',
                  opacity: 0,
                  transform: 'translateY(-20px)'
                }}
              >
                About me
              </Link>
              <Link
                href="/skills"
                className={`block px-3 py-3 rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                  isActive('/skills')
                    ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={closeMenu}
                style={{
                  animation: 'slideInFromTop 0.3s ease-out 0.1s forwards',
                  opacity: 0,
                  transform: 'translateY(-20px)'
                }}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className={`block px-3 py-3 rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                  isActive('/projects')
                    ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={closeMenu}
                style={{
                  animation: 'slideInFromTop 0.3s ease-out 0.2s forwards',
                  opacity: 0,
                  transform: 'translateY(-20px)'
                }}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-3 rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                  isActive('/contact')
                    ? 'text-blue-400 bg-blue-900/20 border-l-2 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
                onClick={closeMenu}
                style={{
                  animation: 'slideInFromTop 0.3s ease-out 0.3s forwards',
                  opacity: 0,
                  transform: 'translateY(-20px)'
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInFromTop {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
} 