import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface OfficeButlerFormProps {
  isOpen: boolean
  onClose: () => void
}

const OfficeButlerForm = ({ isOpen, onClose }: OfficeButlerFormProps) => {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script')
      script.src = 'https://api.kreativ.management/Form/GetContactFormWidget'
      script.async = true
      script.onload = () => {
        console.log('Kreativ.management widget script loaded')
      }
      script.onerror = () => {
        console.error('Failed to load kreativ.management widget')
      }
      document.body.appendChild(script)

      const style = document.createElement('style')
      style.innerHTML = `
        #kreativmanagement .hm-contact-form-select {
          padding: 0 !important;
        }
        .js-hm-form * {
          box-sizing: border-box;
        }
      `
      document.head.appendChild(style)

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
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
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
          style={{
            backgroundColor: 'rgba(255, 108, 1, 0.1)',
            border: '1px solid rgba(255, 108, 1, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.2)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 108, 1, 0.1)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative p-8 md:p-12">
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

          <div
            className="js-hm-form"
            id="kreativmanagement"
            data-theme="default"
            data-form-id="6f31d760-9033-4f37-be5a-5dcce710e686"
          />
        </div>
      </div>
    </div>
  )
}

export default OfficeButlerForm
