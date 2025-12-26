import React from 'react'
import HomePage from '@/components/HomePage'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import  SignatureWork  from '@/components/SignatureWork'
import ProcessRitual from '@/components/ProcessRitual'
import CinematicDivider from '@/components/CinematicDivider'
import AuthorityCTA from '@/components/AuthorityCTA'

const Home = () => {
  return (
    <><Header />
     
      <Hero/>
    <Manifesto />
<SignatureWork />
<ProcessRitual />
<CinematicDivider />
<AuthorityCTA />
      <Footer />
    </>
  )
}

export default Home