import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <section id='heroSection' className='hero-section'>
      <div className='hero-section-content-box'>
        <div className='hero-section-content'>
          <p className='section-title'>Welcome to Atua</p>
          <div className='hero-section-title'>
            <h1 className='hero-section-title-color'>
              Send A Package
            </h1>
            <p className='hero-section-description'>
            Send packages from your comfort zone.
            </p>
            <h1>
              Make A Delivery
            </h1>
            <p className='hero-section-description'>
            Looking for a way to make money? Signup as a Courier!
            </p>
          </div>
          
        </div>
        
        <Link
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500}
        to='contact'
        className='btn btn-primary'>
            Contact Us
        </Link>

      </div>
      <div className='hero-section-img'>
        <img src="./img/bikeDeliveryguy.jpg" alt="Delivery Atua" />
      </div>
    </section>
  )
}

export default HeroSection