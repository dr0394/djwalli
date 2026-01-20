import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const AGB = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 hover:opacity-80 transition-colors mb-8"
          style={{ color: '#00D9FF' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Zurück zur Startseite</span>
        </Link>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">§0. Allgemeine Geschäftsbedingungen</h2>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Vertragspartner</h3>
              <p>
                Nachstehende Allgemeine Geschäftsbedingungen gelten für Vertragsverhältnisse
                zwischen Walter Weilmünster (nachfolgend DJ-Walli genannt) und seinen Vertragspartnern (Kunden).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Vertrag</h3>
              <p>Verträge zwischen DJ-Walli und dem Kunden entstehen durch</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>die Annahme eines schriftlichen Angebots</li>
                <li>schriftlicher Vertrag E-Mail / Fax</li>
              </ul>
              <p className="mt-3">
                Mündliche Absprachen müssen schriftlich festgehalten werden und sind dem Vertragspartner zur Kenntnis zu geben. Mündliche Absprachen sind nur dann gültig, wenn sie für beide Seiten keine Mehrkosten verursachen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Rücktritt vom Vertrag / Buchung</h3>
              <p>Rücktritt seitens des Kunden ist möglich, jedoch werden die Ausfallkosten wie folgt berechnet:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Rücktritt 50 Tage vor Beginn der Veranstaltung: 30 % der vereinbarten Gage</li>
                <li>Rücktritt 30 Tage vor Beginn der Veranstaltung: 50 % der vereinbarten Gage</li>
                <li>Rücktritt 20 Tage vor Beginn der Veranstaltung: 80 % der vereinbarten Gage</li>
                <li>Rücktritt 10 Tage vor Beginn der Veranstaltung: 100 % der vereinbarten Gage</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">4. Ausnahmen</h3>
              <p className="font-semibold text-white">Corona Klausel</p>
              <p className="mt-2">
                Wenn wegen Corona keine Feier stattfinden darf, auf Grund von neuen Coronaschutzverordnung des Landes NRW, so fallen keine Stornokosten an. Lediglich Bearbeitungskosten (Aufwandsentschädigung ca. 10-15 % vom Auftragswert).
              </p>
              <p className="mt-3">
                Sollte der Kunde vom Vertrag zurücktreten, jedoch einen neuen Termin vereinbaren, so entfallen die Ausfallkosten.
              </p>
              <p className="mt-3 font-semibold text-white">Ein Rücktritt von DJ-Walli ist möglich:</p>
              <p className="mt-2">
                Sollte DJ Walli auf Grund eines Corona Infekts plötzlich erkranken und ausfallen, dann besteht kein Anspruch auf Ersatz. DJ Walli wird sich aber um einen Ersatz DJ bemühen.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>technisch bedingte Ausfälle</li>
                <li>andere wichtige Gründe</li>
                <li>Krankheit</li>
                <li>Unfall</li>
                <li>Tod</li>
              </ul>
              <p className="mt-3">
                In den vorgenannten Fällen (außer im Todesfall) wird DJ-Walli versuchen, für einen entsprechenden Ersatz-DJ zu den vereinbarten Konditionen zu sorgen. Ein Rechtsanspruch besteht jedoch nicht.
              </p>
              <p className="mt-3">
                Ein Rücktritt vom Vertrag / Buchung ist schnellstmöglich schriftlich oder fernmündlich dem DJ-Walli zur Kenntnis zu geben.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">5. Haftung</h3>
              <p>
                Für Personen- und/oder Sachschäden während einer Veranstaltung haftet ausschließlich der Veranstalter, sofern durch grob fahrlässiges oder vorsätzliches Verhalten von DJ Walli der Schaden verursacht worden ist, ist der Veranstalter von der Haftung befreit.
              </p>
              <p className="mt-3">
                Für Schäden an Equipment und Musikdatenträgern von DJ Walli, die während der Veranstaltung durch Gäste / Publikum fahrlässig, grob fahrlässig oder vorsätzlich verursacht werden, haftet der Veranstalter.
              </p>
              <p className="mt-3">
                Sofern DJ-Walli durch nicht durch ihn zu verantwortende Umstände (höhere Gewalt, Naturkatastrophen, behördliche Anordnungen, Betriebsstörungen beim Veranstalter, Stromausfall- und / oder Stromschwankungen) die vereinbarten Leistungen nicht erbringen kann, hat der Kunde kein Recht auf Rücktritt vom Vertrag, keinen Anspruch auf Schadensersatz, kein Recht auf Zurückhaltung einer Zahlung.
              </p>
              <p className="mt-3">
                Kommt es zu Auseinandersetzungen zwischen Gästen / Publikum im Veranstaltungsraum ist DJ Walli berechtigt das Programm zu unterbrechen, ggf. auch ganz abzubrechen – ohne Leistungsabzug.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">6. Zahlungen</h3>
              <p>
                Zahlungen sind grundsätzlich vor Ort vor / während oder nach der Veranstaltung in bar zu entrichten. Der Veranstalter hat für die entsprechenden Barmittel zu sorgen.
              </p>
              <p className="mt-3">
                Sollte dieses nicht der Fall sein, ist der Discjockey berechtigt, bei Feststellung einer Zahlungsunfähigkeit des Veranstalters / Auftraggeber das Programm sofort abzubrechen. Ebenfalls wird für eine unvollständige und verspätete Zahlung eine Gebühr in Höhe von 15.-€ erhoben.
              </p>
              <p className="mt-3">
                Nur bei schriftlicher Vereinbarung ist eine Zahlung per Überweisung auf das Konto von DJ Walli möglich. Die Kontodaten werden dem Veranstalter im Vertrag gesondert genannt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">7. GEMA-Gebühren</h3>
              <p>
                Alle Gebühren für die GEMA werden vom Veranstalter getragen und direkt an die GEMA abgeführt. Der Veranstalter hat sich selber um die Höhe der Gebühr bei der GEMA zu informieren. Bei reinen Privatveranstaltungen entfällt die GEMA-Gebühr.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">8. Allgemeines</h3>
              <p>
                DJ Walli ist in der Programmgestaltung frei. Er unterliegt keinerlei Weisungen vom Veranstalter oder eines Dritten. Jedoch wird DJ Walli bemüht sein, Musikwünsche zu erfüllen. Ein Anspruch auf Erfüllung eines jeden Musikwunsches besteht jedoch nicht.
              </p>
              <p className="mt-3">
                Die Mindestauftrittsdauer beträgt mindestens 4 Stunden. In der Auftrittsdauer ist der Auf- und Abbau der Anlage nicht enthalten. Unter Auftrittsbeginn zählt auch die Musikuntermalung (z.B. beim Gang ans Buffet).
              </p>
              <p className="mt-3">
                Auf Wunsch des Veranstalters ist eine Verlängerung des Engagements noch während der Veranstaltung möglich. Jede weitere angefangene 1/2 Stunde wird mit 35.- € berechnet.
              </p>
              <p className="mt-3">
                Bei Pauschalarrangements (Open End) ist im beiderseitigen Einvernehmen das Ende der Musikbereitstellung zu vereinbaren. Ein Anspruch auf Fortsetzung des Programms besteht auch dann nicht, wenn nur sehr wenige Gäste das Programm zur Hintergrunduntermalung nutzen. DJ-Walli ist dann berechtigt, das Programm zu beenden.
              </p>
              <p className="mt-3">
                Der Veranstalter stellt einen geeigneten Stromanschluss in unmittelbarer Nähe der Bühne zur Verfügung. Die Bühne muss stabil und trocken sein. Die Tanzfläche ist vor der Bühne einzurichten.
              </p>
              <p className="mt-3">
                Für das Party-Team (evtl auch 2 Personen) sind Speisen und Getränke vom Veranstalter kostenlos zu stellen.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">9. Sonstige Bestimmungen</h3>
              <p>
                DJ Walli überträgt dem Veranstalter das Recht, auf Veranstaltungsankündigungen mittels Plakaten, Flyern, etc. den Künstlernamen "DJ Walli – Wallis – mobile – disco" zu veröffentlichen. Es ist dem DJ Walli ein Plakat oder Flyer, etc. vor Veröffentlichung zur Ansicht auszuhändigen.
              </p>
              <p className="mt-3">
                DJ Walli ist berechtigt in eigener Sache Werbung vor / während / oder nach einer Veranstaltung in einer ihn frei wählbaren Form z.B. Aushändigung von Visitenkarten zur Kundenneugewinnung zu machen.
              </p>
              <p className="mt-3">
                Unter Umständen werden Fotos von den jeweiligen Veranstaltungen auf der Webseite von DJ Walli veröffentlicht. Bilder die nicht veröffentlicht werden sollen, können mit einer Nachricht an DJ Walli wieder von der Webseite entfernt werden.
              </p>
              <p className="mt-3">
                Es besteht auch kein Anspruch auf Aufnahme in der Referenzliste auf der Webseite von DJ Walli. Die Auswahl behält sich DJ Walli selber vor.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">10. Salvatorische Klausel</h3>
              <p>
                Sollte eine oder mehrere Bestimmungen dieses Vertrages unwirksam sein, so wird dadurch die Gültigkeit der übrigen Bestimmungen nicht berührt. Anstelle der unwirksamen Bestimmungen tritt rückwirkend eine inhaltlich möglichst gleiche, gesetzliche Regelung, die dem Zweck der gewollten Regelung am nächsten kommt.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">11. Erfüllung und Gerichtsstand</h3>
              <p>
                Auf alle Rechtsbeziehungen zwischen DJ Walli und dem Kunden findet das Recht der Bundesrepublik Deutschland Anwendung. Als Erfüllungsort und Gerichtsstandort, soweit rechtlich zulässig, wird Duisburg vereinbart.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">12. Nutzung externer Dienste</h3>
              <p>
                Ich nutze zur Erbringung meiner Leistung gegenüber meinen Kunden den Dienst{' '}
                <a
                  href="https://app.hochzeit.management"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-colors"
                  style={{ color: '#00D9FF' }}
                >
                  https://app.hochzeit.management
                </a>
                . Dieser bietet mir insbesondere die Möglichkeit Stammdaten der von mir betreuten Kunden/Brautpaare anzulegen, eine Kalenderverwaltung, eine Aufgaben-/To-Do-Liste, ein Postfach zur Kommunikation zwischen mir und meinen Kunden sowie die Möglichkeit direkt über den Dienst Angebote und Abrechnungen für die Leistungen des Users zu erstellen.
              </p>
              <p className="mt-3">
                Angeboten wird dieser Dienst von der Hochzeit.Management GmbH, mit welcher ich einen Nutzungsvertrag sowie einen – datenschutzrechtlich notwendigen – Auftragsverarbeitungsvertrag habe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AGB
