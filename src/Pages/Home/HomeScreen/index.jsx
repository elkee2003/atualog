import React from 'react'
import HeroSection from '../HeroSection'
import Services from '../Services'
import About from '../About'
import ContactUs from '../ContactUs'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <HeroSection/>
      <Services/>
      <About/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Home