import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Wie schnell können Sie verfügbar sein?',
      answer: 'In der Regel melden wir uns innerhalb von 24 Stunden auf Ihre Anfrage. Für kurzfristige Events versuchen wir unser Bestes – kontaktieren Sie uns einfach!'
    },
    {
      question: 'Welche Musikrichtungen spielen Sie?',
      answer: 'Von Charts und Pop über Rock, Hip-Hop, Dance, Schlager bis hin zu 80er/90er und Oldies – wir haben für jeden Geschmack die richtige Musik. Ihre Musikwünsche sind herzlich willkommen!'
    },
    {
      question: 'Wie lange dauert ein DJ-Set?',
      answer: 'Die Dauer richten wir ganz nach Ihren Wünschen – ob 3 Stunden oder die ganze Nacht. Wir besprechen das im Vorgespräch und stimmen den Ablauf genau ab.'
    },
    {
      question: 'Können Gäste Musikwünsche äußern?',
      answer: 'Selbstverständlich! Sowohl vorab als auch während der Veranstaltung nehmen wir gerne Musikwünsche entgegen.'
    },
    {
      question: 'Was kosten Ihre Pakete?',
      answer: 'Paketpreise auf Anfrage, da jede Feier anders ist. Die Preise sind abhängig von Gästezahl, Spielzeit, Technik und Entfernung. Kontaktieren Sie uns für ein individuelles Angebot.'
    },
    {
      question: 'Wie viel Vorlaufzeit brauchen Sie für den Aufbau?',
      answer: 'In der Regel benötigen wir 1-2 Stunden für den Aufbau der Technik. Den genauen Zeitplan stimmen wir im Vorfeld mit Ihnen und der Location ab.'
    },
    {
      question: 'Bieten Sie auch Moderation an?',
      answer: 'Ja! Auf Wunsch übernehme ich gerne die Moderation Ihrer Veranstaltung – für Ansagen, Spiele oder einen unterhaltsamen Programmablauf.'
    },
    {
      question: 'Fahren Sie auch außerhalb an?',
      answer: 'Ja, wir kommen gerne auch zu Veranstaltungen außerhalb. Die Anfahrt wird individuell berechnet und mit Ihnen abgestimmt.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-0">
              Häufige<br />Fragen
            </h2>
          </div>

          <div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere
              DJ- und Veranstaltungsservices. Haben Sie weitere Fragen? Kontaktieren Sie uns gerne!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:border-orange-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between p-6 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <HelpCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#FF6C01' }} />
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#FF6C01' }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black border border-white/10 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ihre Frage ist nicht dabei?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl font-light">
              Kein Problem! Unser Team steht Ihnen gerne für alle Fragen zur Verfügung.
              Kontaktieren Sie uns und wir helfen Ihnen weiter.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('kontakt')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-black px-10 py-4 rounded font-bold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
