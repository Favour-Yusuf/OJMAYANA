import React from 'react'
import Hero from '@/components/hero/Hero'
import FeaturedWork from '@/components/FeaturedWork'
import ServicesOutcomes from '@/components/ServicesOutcomes'
import Process from '@/components/Process'
import Trust from '@/components/Trust'
import CreativeDirector from '@/components/CreativeDirector'
import PrimaryCTA from '@/components/PrimaryCTA'
import ClientLogos from '@/components/ClientLogos'
import LandingVideo from '@/components/LandingVideo'

const Home = () => {
  return (
    <>
    {/* <Header /> */}
     
      <Hero/>
      <FeaturedWork/>
      <LandingVideo/>
      <ClientLogos/>
      <ServicesOutcomes/>
      <Process/>
      <Trust/>
      <CreativeDirector/>
      <PrimaryCTA/>
    </>
  )
}

export default Home