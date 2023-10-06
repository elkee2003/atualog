import React from 'react'
import { Link } from 'react-scroll'

function Footer() {
  const date = new Date().getFullYear()

  return (
    <footer className='footer-container'>
      <div className='footer-link-container'>
        <div className='footer-img-container'>
          <img src="./img/Atua Just Logo square without background.png" alt="Logo" width="60px"  />
        </div>
        <div className='footer-items'>
          <ul>
                <li>
                    <Link 
                    activeClass='navbar-active-content' 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    to='heroSection'
                    className='navbar-content'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                    activeClass='navbar-active-content' 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    to='services'
                    className='navbar-content'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link 
                    activeClass='navbar-active-content' 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duration={500}
                    to='aboutUs'
                    className='navbar-content'>
                        About Us
                    </Link>
                </li>
          </ul>
        </div>
      </div>
      <div className='download-store'>
        <img src='../img/Get on google.png' alt='Play Store'/>
        <img src='../img/Soon on Appstore.png' alt='App Store'/>

      </div>
      <div className='divider'></div>
      <div className='footer-content-container'>
        <p>Copyright &copy; <span>{date}</span> ATUA</p>
        <p>All rights reserverd.| Terms & Conditions </p>
      </div>
    </footer>
  )
}

export default Footer