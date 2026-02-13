import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import AGB from './pages/AGB'
import CookieConsent from './components/CookieConsent'
import CookieSettingsButton from './components/CookieSettingsButton'
import MultiStepContactForm from './components/MultiStepContactForm'
import WhatsAppButton from './components/WhatsAppButton'
import AboutModal from './components/AboutModal'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [showCookieSettings, setShowCookieSettings] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showAboutModal, setShowAboutModal] = useState(false)
  const [preselectedEventType, setPreselectedEventType] = useState<string | undefined>(undefined)

  const openBookingForm = (eventType?: string) => {
    setPreselectedEventType(eventType)
    setShowBookingForm(true)
  }

  const closeBookingForm = () => {
    setShowBookingForm(false)
    setPreselectedEventType(undefined)
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen relative bg-black">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://i.imgur.com/BNqQxmL.jpeg')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/85" />
        </div>

        <div className="relative z-10">
          <ScrollToTop />
          <Navigation
            onOpenBooking={() => openBookingForm()}
            onOpenAbout={() => setShowAboutModal(true)}
          />
          <Routes>
            <Route path="/" element={<Home onOpenBooking={openBookingForm} onOpenAbout={() => setShowAboutModal(true)} />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
          </Routes>
          <Footer />
        </div>

        <MultiStepContactForm
          isOpen={showBookingForm}
          onClose={closeBookingForm}
          preselectedEventType={preselectedEventType}
        />
        <AboutModal
          isOpen={showAboutModal}
          onClose={() => setShowAboutModal(false)}
        />
        <CookieConsent
          isOpen={showCookieSettings}
          onClose={() => setShowCookieSettings(false)}
        />
        <CookieSettingsButton onClick={() => setShowCookieSettings(true)} />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}

export default App
