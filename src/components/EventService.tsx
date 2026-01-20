import React from 'react'
import { Zap, Clock, Headphones, CheckCircle2 } from 'lucide-react'

const EventService = () => {
  return (
    <section id="veranstaltungsservice" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span
                  className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
                  style={{
                    color: '#FF6C01',
                    borderColor: 'rgba(255, 108, 1, 0.3)',
                    backgroundColor: 'rgba(255, 108, 1, 0.05)'
                  }}
                >
                  Veranstaltungsservice
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Technik & Organisation
              </h2>
              <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed">
                Professionelle technische Betreuung und perfekte Koordination für einen reibungslosen Ablauf
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: 'Ton- & Lichttechnik',
                  description: 'Professionelle Beschallungsanlage und atmosphärische Lichteffekte für jeden Raum'
                },
                {
                  icon: Clock,
                  title: 'Zeitplanung & Ablauf',
                  description: 'Präzise Koordination aller Programmpunkte für einen stressfreien Ablauf'
                },
                {
                  icon: Headphones,
                  title: 'Technischer Support',
                  description: 'Vor Ort bin ich für alle technischen Fragen und spontane Anpassungen da'
                },
                {
                  icon: CheckCircle2,
                  title: 'Setup & Abbau',
                  description: 'Kompletter Auf- und Abbau der Technik – Sie müssen sich um nichts kümmern'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                    style={{
                      borderColor: 'rgba(0, 217, 255, 0.3)',
                      backgroundColor: 'rgba(0, 217, 255, 0.1)'
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: '#00D9FF' }} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGp8ZW58MHx8MHx8fDA%3D"
                alt="DJ Pult Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col justify-end p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Alles läuft perfekt
                    </h3>
                    <p className="text-gray-300/90 leading-relaxed">
                      Sie genießen Ihre Feier, während ich mich um die gesamte Technik und den Ablauf kümmere
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Pünktlicher Aufbau',
                      'Soundcheck vor Beginn',
                      'Laufende Betreuung',
                      'Professioneller Abbau'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#00D9FF' }}
                        />
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventService
