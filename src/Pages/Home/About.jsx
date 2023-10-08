import React from 'react'

function About() {
  return (
    <section id='aboutUs' className='about-section'>
        <div className='hero-section-content-box about-section-content-box'>
            <div className='hero-section-content'>
                <p className='section-title'>
                    About
                </p>
                <h1>
                    About Us
                </h1>
                <div>
                    <p className='section-description card-about'>
                        Atua is a company dedicated to making our users comfortable to send and receive packages in record time. The idea was to make the transition of packages as seamless as possibe while creating an avenue for users who register as couriers, to make money.
                    </p>
                    <p className='section-description card-about'>
                        We serve as a medium to bring together people who want their packages sent or received, and people who are willing to deliver those packages.
                        Our aim is to make our users have a sense of security while using our platform thus, why we gather information on registered users in other to make the other party feel safe. 
                    </p>
                </div>
                
            </div>
        </div>
        <div className='about-section-img'>
            <img src='../img/Ordering with Atua from Phone.png' alt='About Us'/>
        </div>
    </section>
  )
}

export default About