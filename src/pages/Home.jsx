import React from 'react'
import Clients from '../components/Clients'
import About from '../components/HomeComponents/About'
import HeroSection from '../components/HomeComponents/HeroSection'
import ServiceQuote from '../components/HomeComponents/ServiceQuote'
import ServicesSection from '../components/HomeComponents/ServicesSection'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <ServiceQuote/>
      <About/>
      <Clients/>
    </div>
  )
}
