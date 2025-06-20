import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Mein Portfolio',
  description: 'Portfolio von Sandro Schmid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav className="bg-gray-900 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-white font-bold text-xl">
                Portfolio
              </Link>
              
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  About me
                </Link>
                <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        {children}
        
        <footer className="bg-gray-900 border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2025 Sandro Schmid. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
