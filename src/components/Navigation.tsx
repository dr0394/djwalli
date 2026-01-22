import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavigationProps {
  onOpenBooking: (eventType?: string) => void
  onOpenAbout: () => void
}

const Navigation = ({ onOpenBooking, onOpenAbout }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src="https://i.imgur.com/q2A2PQh.png"
              alt="DJ Walli Logo"
              className="h-16 md:h-20 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollTo('hero')} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              Start
            </button>
            <button onClick={onOpenAbout} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              Wer bin ich
            </button>
            <button onClick={() => scrollTo('leistungen')} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              Leistungen
            </button>
            <button onClick={() => scrollTo('anlaesse')} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              Anlässe
            </button>
            <button onClick={() => scrollTo('vorteile')} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              Vorteile
            </button>
            <button onClick={() => scrollTo('faq')} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              FAQ
            </button>
            <button onClick={() => scrollTo('kontakt')} className="text-white hover:text-orange-400 transition-colors text-sm uppercase tracking-wider">
              Kontakt
            </button>

            <button
              onClick={onOpenBooking}
              className="group relative overflow-hidden px-6 py-2.5 ml-4 transition-all duration-300 rounded"
              style={{
                backgroundImage: 'linear-gradient(to right, #FF6C01, #FF8C3A)',
                boxShadow: '0 0 0 rgba(255, 108, 1, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 108, 1, 0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 108, 1, 0.4)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-black font-bold text-sm tracking-wider uppercase">
                Anfragen
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollTo('hero')} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              Start
            </button>
            <button onClick={() => { onOpenAbout(); setIsOpen(false); }} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              Wer bin ich
            </button>
            <button onClick={() => scrollTo('leistungen')} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              Leistungen
            </button>
            <button onClick={() => scrollTo('anlaesse')} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              Anlässe
            </button>
            <button onClick={() => scrollTo('vorteile')} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              Vorteile
            </button>
            <button onClick={() => scrollTo('faq')} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              FAQ
            </button>
            <button onClick={() => scrollTo('kontakt')} className="block w-full text-left text-white hover:text-orange-400 transition-colors py-2 text-sm uppercase tracking-wider">
              Kontakt
            </button>

            <button
              onClick={() => {
                onOpenBooking()
                setIsOpen(false)
              }}
              className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold rounded text-sm tracking-wider uppercase"
            >
              Anfragen
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
