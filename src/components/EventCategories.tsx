import React, { useState } from 'react'
import { Heart, Cake, Briefcase, Users, GraduationCap, Calendar } from 'lucide-react'
import EventPackageModal from './EventPackageModal'

interface EventCategoriesProps {
  onOpenBooking: () => void
}

const EventCategories = ({ onOpenBooking }: EventCategoriesProps) => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  const categories = [
    {
      icon: Heart,
      title: 'Hochzeiten',
      description: 'Romantische Musikuntermalung und perfekte Organisation für Ihren großen Tag',
      emoji: '💍',
      packages: [
        {
          name: 'Basis',
          price: 'ab 675€',
          features: [
            'DJ für bis zu 6 Stunden',
            'Professionelle Soundanlage',
            'Lichteffekte',
            'Musikwunsch-Beratung',
            'Standardrepertoire'
          ]
        },
        {
          name: 'Premium',
          price: 'ab 875€',
          features: [
            'DJ für bis zu 8 Stunden',
            'Premium Soundanlage',
            'Erweiterte Lichtshow',
            'Individuelle Musikplanung',
            'Mikrofon für Ansprachen',
            'Hochzeitstanz-Beratung'
          ],
          popular: true
        },
        {
          name: 'Exklusiv',
          price: 'ab 1.075€',
          features: [
            'DJ für 12 Stunden',
            'High-End Soundanlage',
            'Premium Lichtshow & Effekte',
            'Persönlicher Event-Planer',
            '2 Mikrofone'
          ]
        }
      ]
    },
    {
      icon: Cake,
      title: 'Geburtstage',
      description: 'Von 18 bis 80 – die richtige Musik und Stimmung für jedes Alter',
      emoji: '🎂',
      packages: [
        {
          name: 'Basic Party',
          price: 'ab 500€',
          features: [
            'DJ für bis zu 5 Stunden',
            'Soundanlage',
            'Basis Lichteffekte',
            'Musikwünsche der Gäste'
          ]
        },
        {
          name: 'Party Plus',
          price: 'ab 750€',
          features: [
            'DJ für bis zu 7 Stunden',
            'Premium Soundanlage',
            'Lichtshow',
            'Musikwünsche & Beratung',
            'Mikrofon'
          ],
          popular: true
        },
        {
          name: 'XXL Party',
          price: 'ab 1.100€',
          features: [
            'DJ für bis zu 10 Stunden',
            'High-End Sound',
            'Premium Lichtshow',
            'Individuelle Musikauswahl',
            'Nebelmaschine',
            'Fotospiegel Option'
          ]
        }
      ]
    },
    {
      icon: Briefcase,
      title: 'Firmenfeiern',
      description: 'Professionelle Veranstaltungsbetreuung für Betriebsfeiern und Events',
      emoji: '💼',
      packages: [
        {
          name: 'Business',
          price: 'ab 775€',
          features: [
            'DJ für bis zu 6 Stunden',
            'Professionelle PA-Anlage',
            'Dezente Beleuchtung',
            'Business-gerechtes Musikprogramm',
            'Mikrofon für Präsentationen'
          ]
        },
        {
          name: 'Corporate',
          price: 'ab 1.175€',
          features: [
            'DJ für bis zu 8 Stunden',
            'Premium Soundsystem',
            'Atmosphärische Beleuchtung',
            'Maßgeschneidertes Musikkonzept',
            '2 Mikrofone',
            'Technischer Support'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'auf Anfrage',
          features: [
            'Ganztägige Betreuung',
            'High-End Equipment',
            'Komplette Eventtechnik',
            'Individuelles Konzept',
            'Mehrere Mikrofone',
            'Live-Bands Koordination',
            'Fotografie & Video'
          ]
        }
      ]
    },
    {
      icon: Users,
      title: 'Vereinsfeste',
      description: 'Von Sommerfest bis Jubiläum – die perfekte Musik für jeden Verein',
      emoji: '🎪',
      packages: [
        {
          name: 'Vereinsfeier',
          price: 'ab 600€',
          features: [
            'DJ für bis zu 6 Stunden',
            'Soundanlage',
            'Lichteffekte',
            'Vielseitiges Musikprogramm',
            'Flexible Musikwünsche'
          ]
        },
        {
          name: 'Jubiläumsfeier',
          price: 'ab 900€',
          features: [
            'DJ für bis zu 8 Stunden',
            'Premium Sound',
            'Erweiterte Lichtshow',
            'Generationengerechte Musik',
            'Mikrofon',
            'Spiele & Animation'
          ],
          popular: true
        }
      ]
    },
    {
      icon: GraduationCap,
      title: 'Abschlussbälle',
      description: 'Die perfekte Party für Abschlussfeiern und Tanzveranstaltungen',
      emoji: '🎓',
      packages: [
        {
          name: 'Abiball Standard',
          price: 'ab 800€',
          features: [
            'DJ für bis zu 7 Stunden',
            'Soundanlage',
            'Lichtshow',
            'Jugendgerechte Musikauswahl',
            'Mikrofon für Reden'
          ]
        },
        {
          name: 'Abiball Premium',
          price: 'ab 1.200€',
          features: [
            'DJ für bis zu 9 Stunden',
            'Premium Soundsystem',
            'Professionelle Lichtshow',
            'Aktuelle Charts & Classics',
            '2 Mikrofone',
            'Fotospiegel',
            'Nebelmaschine'
          ],
          popular: true
        }
      ]
    },
    {
      icon: Calendar,
      title: 'Private Events',
      description: 'Jubiläen, Taufen, Gartenpartys – jeder Anlass wird besonders',
      emoji: '🎉',
      packages: [
        {
          name: 'Private Feier',
          price: 'ab 575€',
          features: [
            'DJ für bis zu 5 Stunden',
            'Soundanlage',
            'Lichteffekte',
            'Individuelle Musikwünsche'
          ]
        },
        {
          name: 'Special Event',
          price: 'ab 875€',
          features: [
            'DJ für bis zu 7 Stunden',
            'Premium Sound',
            'Stimmungsvolle Beleuchtung',
            'Persönliche Musikberatung',
            'Mikrofon',
            'Flexible Gestaltung'
          ],
          popular: true
        }
      ]
    }
  ]

  return (
    <section id="anlaesse" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#FF6C01',
                borderColor: 'rgba(255, 108, 1, 0.3)',
                backgroundColor: 'rgba(255, 108, 1, 0.05)'
              }}
            >
              Für welche Anlässe
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-6 mb-4 leading-tight">
            Wir sind für Sie da
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto">
            Ob Hochzeit, Geburtstag oder Firmenevent – wir machen jeden Anlass unvergesslich
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(category.title)}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-orange-500/30 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      borderColor: 'rgba(255, 108, 1, 0.3)',
                      backgroundColor: 'rgba(255, 108, 1, 0.1)'
                    }}
                  >
                    <category.icon className="w-7 h-7" style={{ color: '#FF6C01' }} />
                  </div>
                  <span className="text-4xl">{category.emoji}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300/80 leading-relaxed">{category.description}</p>
                </div>

                <div className="pt-2">
                  <span className="text-sm font-semibold" style={{ color: '#FF6C01' }}>
                    Pakete ansehen →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EventPackageModal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        eventType={selectedEvent || ''}
        packages={categories.find(c => c.title === selectedEvent)?.packages || []}
        onOpenBooking={onOpenBooking}
      />
    </section>
  )
}

export default EventCategories
