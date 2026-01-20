import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="mb-3">
              <img
                src="https://i.imgur.com/q2A2PQh.png"
                alt="DJ Walli Logo"
                className="h-16 object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Walter Weilmünster
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Alles aus einer Hand für Ihre Veranstaltung
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/wallismobiledisco"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-orange-400" />
              </a>
              <a
                href="https://www.instagram.com/djwalli_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-orange-400" />
              </a>
              <a
                href="https://www.youtube.com/@walter25800"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-orange-500/20 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-gray-400 hover:text-orange-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-white font-semibold mb-3">Kontakt</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="tel:+4902065529674" className="hover:text-orange-400 transition-colors">
                  02065 529674
                </a>
              </li>
              <li>
                <a href="tel:+491602763524" className="hover:text-orange-400 transition-colors">
                  0160 2763524
                </a>
              </li>
              <li>
                <a href="mailto:info@djwalli.de" className="hover:text-orange-400 transition-colors">
                  info@djwalli.de
                </a>
              </li>
              <li className="text-xs">
                Brahmsstraße 1<br />47226 Duisburg
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-semibold mb-3">Leistungen</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>DJ Service</li>
              <li>Eventtechnik & PA-Verleih</li>
              <li>Fotografie & Videografie</li>
              <li>Hochzeiten</li>
              <li>Geburtstage</li>
              <li>Firmenfeiern & Karneval</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-semibold mb-3">Rechtliches</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>
                <Link to="/impressum" className="hover:text-orange-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-orange-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="hover:text-orange-400 transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                  EU-Streitbeilegung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} DJ Walli - Walter Weilmünster. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
