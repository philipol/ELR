import React from 'react'
import Clients from '../components/Clients'
import HeroSection from '../components/ServicesComponents.jsx/HeroSection'
import ServiceQuote from '../components/ServicesComponents.jsx/ServiceQuote'
import ServicesSection from '../components/ServicesComponents.jsx/ServicesSection'

export default function Services() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <ServiceQuote/>
    </div>
  )
}
