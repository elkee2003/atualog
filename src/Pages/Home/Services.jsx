import React from 'react'

function Services() {
  return (
    <section id='services' className='service-section'>
        <div className='service-section-img'>
            <img src='../img/Services.png' alt='About Us'/>
        </div>
        <div className='hero-section-content-box'>
            <div className='hero-section-content'>
                <p className='section-title'>Services</p>
                <h1>Our Services</h1>
                <div className='card'>
                  <p className='section-description'>Our range of services are unending. We offer a platform for packages to be sent/delivered from one point to another. It does not matter the size of item/package that needs to be sent; it does not matter the time you want it sent, there will be users always ready to deliver your package.
                  </p>
                  <p className='section-description'>
                  Furthermore, we offer our users a chance to be couriers and make money for themselves at any given time. You are given to opportunity to have a full time job or part time job.
                  </p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Services