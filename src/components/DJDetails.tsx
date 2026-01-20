import React from 'react'
import { Music4, Mic, HeadphonesIcon, ListMusic } from 'lucide-react'

const DJDetails = () => {
  return (
    <section id="dj-service" className="relative py-24 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              DJ Service
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Musik, die bewegt
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Breites Spektrum an Musikstilen – Rock, Pop, Oldies, Charts, Dance Classics, Latin, Funk, Soul & R&B, Hip-Hop, Deutsche Schlager
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Musikrichtungen & Stile
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Rock & Pop',
                'Charts & Aktuelles',
                'Oldies & Klassiker',
                'Dance Classics',
                'Latin & Reggaeton',
                'Funk & Soul',
                'Hip-Hop & R&B',
                'Deutsche Schlager'
              ].map((genre, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <Music4 className="w-5 h-5 flex-shrink-0" style={{ color: '#FF6C01' }} />
                  <span className="text-sm text-white font-medium">{genre}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <ListMusic className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Musikwünsche willkommen</h4>
                  <p className="text-gray-300/90 leading-relaxed">
                    Berücksichtigung Ihrer Wünsche und Vorstellungen. 1-2 Wochen vor der Veranstaltung
                    erfolgt ein Anruf, um letzte Wünsche und Änderungen zu besprechen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <Mic className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Professionelle Moderation</h4>
                  <p className="text-gray-300/90 leading-relaxed">
                    Auf Wunsch übernehme ich die Moderation mit Wireless-Mikrofon –
                    für Ansagen, Partyspiele und einen unterhaltsamen Ablauf Ihrer Veranstaltung.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)'
                  }}
                >
                  <HeadphonesIcon className="w-6 h-6" style={{ color: '#00D9FF' }} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-white">Zuverlässig & Professionell</h4>
                  <p className="text-gray-300/90 leading-relaxed">
                    Pünktlich, freundlich und seriöses Auftreten. Aufbau vor Eintreffen der Gäste.
                    Bei Krankheit steht ein Backup-DJ zur Verfügung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-950/20 to-slate-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              So läuft es ab
            </h3>
            <div className="grid md:grid-cols-3 gap-8 pt-4">
              {[
                {
                  step: '01',
                  title: 'Vorgespräch',
                  description: 'Wir besprechen Ihre Wünsche, Musikrichtungen und den Ablauf Ihrer Veranstaltung'
                },
                {
                  step: '02',
                  title: 'Ihr Event',
                  description: 'Ich sorge für die perfekte musikalische Untermalung und volle Tanzfläche'
                },
                {
                  step: '03',
                  title: 'Spontane Wünsche',
                  description: 'Auch während der Feier können Sie und Ihre Gäste jederzeit Musikwünsche äußern'
                }
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div
                    className="text-5xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to bottom right, #00D9FF, #0EA5E9)' }}
                  >
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-gray-300/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DJDetails
