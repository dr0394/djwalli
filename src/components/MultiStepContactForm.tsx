import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface MultiStepContactFormProps {
  isOpen: boolean
  onClose: () => void
  preselectedEventType?: string
}

const MultiStepContactForm = ({ isOpen, onClose }: MultiStepContactFormProps) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script')
      script.src = 'https://app.kreativ.management/ContactForm/HostedPrequisites'
      script.async = true
      document.body.appendChild(script)

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl shadow-2xl border animate-in zoom-in-95 duration-300"
        style={{
          borderColor: 'rgba(255, 108, 1, 0.2)',
          boxShadow: '0 0 80px rgba(255, 108, 1, 0.15)'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,108,1,0.08)_0%,_transparent_50%)] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            backgroundColor: 'rgba(255, 108, 1, 0.1)',
            border: '1px solid rgba(255, 108, 1, 0.2)'
          }}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="relative p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6"
              style={{
                background: 'linear-gradient(to right, rgba(255, 108, 1, 0.1), rgba(255, 140, 58, 0.1))',
                borderColor: 'rgba(255, 108, 1, 0.3)'
              }}
            >
              <span className="text-sm uppercase tracking-[0.25em] font-bold" style={{ color: '#FF6C01' }}>
                Kontaktanfrage
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              Lassen Sie uns sprechen
            </h2>
            <p className="text-gray-300/90 text-lg">
              Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen
            </p>
          </div>

          <iframe
            src="https://app.kreativ.management/ContactForm/Hosted/6f31d760-9033-4f37-be5a-5dcce710e686?theme=default"
            className="w-full border-0"
            style={{ height: '1000px' }}
            title="Kontaktformular"
          />
        </div>
      </div>
    </div>
  )
}

export default MultiStepContactForm
