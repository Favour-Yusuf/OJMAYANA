import ContactForm from '@/components/contact/ContactForm'
import ContactHero from '@/components/contact/ContactHero'
import DirectContact from '@/components/contact/DirectContact'
import HowItWorksContact from '@/components/contact/HowItWorksContact'
import React from 'react'

const Contact = () => {
  return (
    <>
    <ContactHero/>
    <HowItWorksContact/>
    <ContactForm/>
    <DirectContact/>
    
    </>
  )
}

export default Contact