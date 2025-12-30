import React from 'react'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import FeaturedProjects from '@/components/portfolio/FeaturedProjects'
import WorkCategories from '@/components/portfolio/WorkCategories'
import PortfolioCTA from '@/components/portfolio/PortfolioCTA'

const PortfolioPage = () => {
  return (
    <>
      <PortfolioHero />
      <FeaturedProjects />
      <WorkCategories />
      <PortfolioCTA />
    </>
  )
}

export default PortfolioPage