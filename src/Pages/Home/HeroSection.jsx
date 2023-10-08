import React from 'react'
import { Link } from 'react-scroll'

function HeroSection() {
  return (
    <section id='heroSection' className='hero-section'>
      <div className='hero-section-content-box'>
        <div className='hero-section-content'>
          <p className='section-title-atua'>Welcome to Atua</p>
          <div className='hero-section-title anime'>
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
        className='btn btn-primary hero-section-btn'>
            Contact Us
        </Link>

      </div>
      <div className='hero-section-img'>
        <img src="./img/Only Atua Phone Slanted.png" alt="Delivery Atua" width='10px' />
      </div>
    </section>
  )
}

export default HeroSection