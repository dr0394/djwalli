import React, { useState } from 'react'
import { X, ChevronRight, ChevronLeft, Check, User, Calendar, Music, MessageSquare, Mail } from 'lucide-react'

interface MultiStepContactFormProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  phone: string
  event_type: string
  event_date: string
  guest_count: string
  location: string
  services: string[]
  budget: string
  message: string
}

const MultiStepContactForm = ({ isOpen, onClose }: MultiStepContactFormProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [showSummary, setShowSummary] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    guest_count: '',
    location: '',
    services: [],
    budget: '',
    message: ''
  })

  const totalSteps = 3

  const eventTypes = [
    'Hochzeit',
    'Geburtstag',
    'Firmenevent',
    'Silvesterparty',
    'Stadtfest',
    'Jubiläum',
    'Sonstiges'
  ]

  const availableServices = [
    'DJ Service',
    'Lichttechnik',
    'Tontechnik',
    'Videografie',
    'Fotografie',
    'Equipment-Verleih'
  ]

  const budgetOptions = [
    'bis 500€',
    '500€ - 1.000€',
    '1.000€ - 2.000€',
    '2.000€ - 5.000€',
    'über 5.000€'
  ]

  const generateMessageText = () => {
    let text = `Hallo DJ Walli,\n\n`
    text += `ich interessiere mich für Ihre Services und möchte folgende Anfrage stellen:\n\n`

    text += `📋 KONTAKTDATEN\n`
    text += `Name: ${formData.name}\n`
    text += `Email: ${formData.email}\n`
    if (formData.phone) text += `Telefon: ${formData.phone}\n`

    text += `\n🎉 EVENT DETAILS\n`
    if (formData.event_type) text += `Art: ${formData.event_type}\n`
    if (formData.event_date) {
      const date = new Date(formData.event_date)
      text += `Datum: ${date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}\n`
    }
    if (formData.guest_count) text += `Gäste: ca. ${formData.guest_count} Personen\n`
    if (formData.location) text += `Ort: ${formData.location}\n`

    if (formData.services.length > 0) {
      text += `\n🎵 GEWÜNSCHTE SERVICES\n`
      formData.services.forEach(service => {
        text += `• ${service}\n`
      })
    }

    if (formData.budget) {
      text += `\n💰 BUDGET\n`
      text += `${formData.budget}\n`
    }

    if (formData.message) {
      text += `\n📝 WEITERE INFORMATIONEN\n`
      text += `${formData.message}\n`
    }

    text += `\nIch freue mich auf Ihre Rückmeldung!\n\n`
    text += `Mit freundlichen Grüßen\n${formData.name}`

    return text
  }

  const handleWhatsAppSend = () => {
    const message = generateMessageText()
    const whatsappNumber = '491602763524'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  const handleEmailSend = () => {
    const message = generateMessageText()
    const subject = encodeURIComponent(`Anfrage: ${formData.event_type || 'Event'} ${formData.event_date ? 'am ' + new Date(formData.event_date).toLocaleDateString('de-DE') : ''}`)
    const body = encodeURIComponent(message)
    window.open(`mailto:info@djwalli.de?subject=${subject}&body=${body}`, '_blank')
  }

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleComplete = () => {
    setShowSummary(true)
  }

  const handleClose = () => {
    setCurrentStep(1)
    setShowSummary(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      event_type: '',
      event_date: '',
      guest_count: '',
      location: '',
      services: [],
      budget: '',
      message: ''
    })
    onClose()
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email
      case 2:
        return formData.event_type
      case 3:
        return true
      default:
        return false
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen) return null

  const stepIcons = [User, Calendar, Music]
  const StepIcon = stepIcons[currentStep - 1] || Music

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={handleClose}
      />

      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl shadow-2xl border animate-in zoom-in-95 duration-300"
        style={{
          borderColor: 'rgba(255, 108, 1, 0.2)',
          boxShadow: '0 0 80px rgba(255, 108, 1, 0.15)'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,108,1,0.08)_0%,_transparent_50%)] pointer-events-none" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: 'rgba(255, 108, 1, 0.1)',
            border: '1px solid rgba(255, 108, 1, 0.2)'
          }}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="relative p-6 sm:p-8 md:p-12">
          {showSummary ? (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1))',
                    border: '2px solid rgba(34, 197, 94, 0.3)'
                  }}
                >
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  Ihre Anfrage ist bereit!
                </h2>
                <p className="text-sm sm:text-base text-gray-300/80">
                  Senden Sie Ihre Nachricht direkt per WhatsApp oder Email
                </p>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 max-h-60 sm:max-h-80 overflow-y-auto">
                <pre className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                  {generateMessageText()}
                </pre>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <button
                  onClick={handleWhatsAppSend}
                  className="w-full px-6 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #25D366, #128C7E)',
                    color: '#fff'
                  }}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Per WhatsApp senden
                </button>

                <button
                  onClick={handleEmailSend}
                  className="w-full px-6 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #FF6C01, #FF8C3A)',
                    color: '#000'
                  }}
                >
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  Per Email senden
                </button>

                <button
                  onClick={handleClose}
                  className="w-full px-6 py-3 sm:py-4 border border-slate-700 rounded-lg text-white font-medium hover:bg-slate-800/50 transition-colors text-sm sm:text-base"
                >
                  Formular schließen
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to right, rgba(255, 108, 1, 0.2), rgba(255, 140, 58, 0.2))',
                      border: '2px solid rgba(255, 108, 1, 0.3)'
                    }}
                  >
                    <StepIcon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#FF6C01' }} />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6 overflow-x-auto pb-2">
                  {[...Array(totalSteps)].map((_, index) => (
                    <div key={index} className="flex items-center flex-shrink-0">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                          index + 1 < currentStep
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                            : index + 1 === currentStep
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                            : 'bg-slate-800 text-gray-500'
                        }`}
                      >
                        {index + 1 < currentStep ? (
                          <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < totalSteps - 1 && (
                        <div
                          className={`w-8 sm:w-12 h-1 mx-1 sm:mx-2 transition-all duration-300 ${
                            index + 1 < currentStep
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600'
                              : 'bg-slate-800'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                  {currentStep === 1 ? 'Ihre Kontaktdaten' :
                   currentStep === 2 ? 'Event Details' :
                   'Services & Budget'}
                </h2>
                <p className="text-sm sm:text-base text-gray-300/80">
                  {currentStep === 1 ? 'Wie können wir Sie erreichen?' :
                   currentStep === 2 ? 'Erzählen Sie uns von Ihrem Event' :
                   'Fast geschafft! Was benötigen Sie?'}
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm sm:text-base"
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm sm:text-base"
                        placeholder="ihre@email.de"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm sm:text-base"
                        placeholder="+49 123 456789"
                      />
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Event-Typ *
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {eventTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => updateFormData('event_type', type)}
                            className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                              formData.event_type === type
                                ? 'border-orange-500 bg-orange-500/20 text-white'
                                : 'border-slate-700 bg-slate-800/30 text-gray-300 hover:border-slate-600'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Event-Datum
                      </label>
                      <input
                        type="date"
                        value={formData.event_date}
                        onChange={(e) => updateFormData('event_date', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-orange-500/50 transition-colors text-sm sm:text-base"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Gästeanzahl
                        </label>
                        <input
                          type="number"
                          value={formData.guest_count}
                          onChange={(e) => updateFormData('guest_count', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm sm:text-base"
                          placeholder="ca. 100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Ort
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => updateFormData('location', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors text-sm sm:text-base"
                          placeholder="Duisburg"
                        />
                      </div>
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Services auswählen (optional)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {availableServices.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                              formData.services.includes(service)
                                ? 'border-orange-500 bg-orange-500/20 text-white'
                                : 'border-slate-700 bg-slate-800/30 text-gray-300 hover:border-slate-600'
                            }`}
                          >
                            <div
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                formData.services.includes(service)
                                  ? 'border-orange-500 bg-orange-500'
                                  : 'border-slate-600'
                              }`}
                            >
                              {formData.services.includes(service) && (
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              )}
                            </div>
                            <span className="text-left">{service}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Budget (optional)
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => updateFormData('budget', option)}
                            className={`px-3 py-2 sm:px-4 sm:py-3 rounded-lg border-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                              formData.budget === option
                                ? 'border-orange-500 bg-orange-500/20 text-white'
                                : 'border-slate-700 bg-slate-800/30 text-gray-300 hover:border-slate-600'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nachricht (optional)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors resize-none text-sm sm:text-base"
                        placeholder="Weitere Details zu Ihrer Veranstaltung..."
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    className="order-2 sm:order-1 sm:flex-1 px-6 py-3 sm:py-4 border border-slate-700 rounded-lg text-white font-medium hover:bg-slate-800/50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                    Zurück
                  </button>
                )}
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`order-1 sm:order-2 ${currentStep === 1 ? 'w-full' : 'sm:flex-1'} px-6 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base`}
                  style={{
                    backgroundImage: canProceed() ? 'linear-gradient(to right, #FF6C01, #FF8C3A)' : 'none',
                    backgroundColor: !canProceed() ? '#1e293b' : undefined,
                    color: canProceed() ? '#000' : '#64748b'
                  }}
                >
                  {currentStep === totalSteps ? 'Zusammenfassung anzeigen' : 'Weiter'}
                  {currentStep < totalSteps && <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default MultiStepContactForm
