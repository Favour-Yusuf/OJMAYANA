import React from 'react'
import ServicesHero from '@/components/services/ServicesHero'
import ServicePillars from '@/components/services/ServicePillars'
import ServiceBreakdown from '@/components/services/ServiceBreakdown'
import ServiceUseCases from '@/components/services/ServiceUseCases'
import ServicesCTA from '@/components/services/ServicesCTA' 

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <ServicePillars />
      <ServiceBreakdown />
      <ServiceUseCases />
      <ServicesCTA />
    </div>
  )
}

export default ServicesPage