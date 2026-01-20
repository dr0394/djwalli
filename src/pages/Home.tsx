import React from 'react'
import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import ServicesOverview from '../components/ServicesOverview'
import EventCategories from '../components/EventCategories'
import DJDetails from '../components/DJDetails'
import EventService from '../components/EventService'
import EquipmentRental from '../components/EquipmentRental'
import WhyUs from '../components/WhyUs'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ProcessSteps from '../components/ProcessSteps'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

interface HomeProps {
  onOpenBooking: () => void
  onOpenAbout?: () => void
}

const Home = ({ onOpenBooking, onOpenAbout }: HomeProps) => {
  return (
    <>
      <Hero onOpenBooking={onOpenBooking} onOpenAbout={onOpenAbout} />
      <ProblemSolution onOpenBooking={onOpenBooking} />
      <ServicesOverview />
      <EventCategories onOpenBooking={onOpenBooking} />
      <DJDetails />
      <EventService />
      <EquipmentRental onOpenBooking={onOpenBooking} />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <ProcessSteps onOpenBooking={onOpenBooking} />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
