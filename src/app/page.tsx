import React from 'react'
import HomePage from '@/components/HomePage'
import { Header } from '@/components/Header'
import Hero from '@/components/hero/Hero'
import Manifesto from '@/components/Manifesto'
import  SignatureWork  from '@/components/SignatureWork'
import ProcessRitual from '@/components/ProcessRitual'
import CinematicDivider from '@/components/CinematicDivider'
import AuthorityCTA from '@/components/AuthorityCTA'
import FeaturedWork from '@/components/FeaturedWork'
import ServicesOutcomes from '@/components/ServicesOutcomes'
import Process from '@/components/Process'
import Trust from '@/components/Trust'
import CreativeDirector from '@/components/CreativeDirector'
import PrimaryCTA from '@/components/PrimaryCTA'

const Home = () => {
  return (
    <>
    {/* <Header /> */}
     
      <Hero/>
      <FeaturedWork/>
      <ServicesOutcomes/>
      <Process/>
      <Trust/>
      <CreativeDirector/>
      <PrimaryCTA/>
    {/* <Manifesto />
<SignatureWork />
<ProcessRitual />
<CinematicDivider />
<AuthorityCTA />
      <Footer /> */}
    </>
  )
}

export default Home