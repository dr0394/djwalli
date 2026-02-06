import React from 'react'
import { Music, Heart, Globe, Award } from 'lucide-react'

const AboutDJWalli = () => {
  return (
    <section id="ueber-dj-walli" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src="https://i.imgur.com/NdN6NER.jpeg"
                alt="Walter Weilmünster - DJ Walli"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-2xl md:text-3xl font-bold text-white">Walter Weilmünster</div>
                <div className="text-lg text-orange-400">DJ Walli</div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(255, 108, 1, 0.3), transparent)' }}
            />
          </div>

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
                  Über DJ Walli
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ihr Hochzeits- & Event-DJ<br />mit Herz und Erfahrung
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed">
                  Ich bin DJ Walli – Ihr professioneller <strong className="text-white">Hochzeits-DJ</strong> und <strong className="text-white">Event-DJ</strong> aus Duisburg mit fast 40 Jahren Erfahrung. Seit meinen Anfängen begleite ich Veranstaltungen jeder Art – in Duisburg, Oberhausen, deutschlandweit und international.
                </p>
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Ob kleine Familienfeier, rauschende Hochzeit, Firmenjubiläum oder großes Stadtfest – ich sorge für den perfekten musikalischen Rahmen. <strong className="text-white">Meine musikalische Bandbreite ist so vielseitig wie meine Kunden</strong>: Von den Kult-Hits der 80er & 90er über aktuellen Pop, Deutsche Schlager, Rock bis hin zu internationaler Musik wie Türkische, Polnische oder Lateinamerikanische Sounds.
                </p>
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Mit <strong className="text-white">internationaler Event-Erfahrung</strong> aus Spanien, der Schweiz, Kuba, Brasilien und weiteren Ländern bringe ich Fingerspitzengefühl, musikalische Flexibilität und professionelle Technik zu jedem Event. Ihre Wünsche stehen im Mittelpunkt – ich passe mich jeder Stimmung und jedem Publikum individuell an.
                </p>
                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-l-4 p-4 rounded-r" style={{ borderColor: '#FF6C01' }}>
                  <p className="text-base text-gray-300/90 leading-relaxed italic">
                    "Mein erster Auftritt? Mit 15 auf der Familienfeier meiner Tante – mit einem Discman, zwei Boxen und einem Mikro aus dem Baumarkt. Heute setze ich auf modernste Technik – aber die Leidenschaft von damals ist geblieben."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: 'Fast 40 Jahre',
                  subtitle: 'DJ-Erfahrung'
                },
                {
                  icon: Music,
                  title: 'Hunderte',
                  subtitle: 'Erfolgreiche Events'
                },
                {
                  icon: Globe,
                  title: 'International',
                  subtitle: 'Tätig weltweit'
                },
                {
                  icon: Heart,
                  title: 'Vielseitig',
                  subtitle: 'Alle Musikstile'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(255, 108, 1, 0.15)',
                      borderColor: 'rgba(255, 108, 1, 0.3)'
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: '#FF6C01' }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDJWalli
