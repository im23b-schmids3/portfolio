import './globals.css'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'Sandro Schmid - Portfolio',
  description: 'Portfolio von Sandro Schmid',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
    <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    </head>
    <body>
        <Navigation />
        
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
