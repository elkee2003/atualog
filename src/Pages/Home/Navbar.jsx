import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [navActive, setNavActive]= useState(false)
    const [scrollHeight, setScrollHeight]= useState(window.pageYOffset)

    // Checking Height Starts here
    const checkHeight = ()=>{
        setScrollHeight(window.pageYOffset)
    }

    console.log(scrollHeight)

    useEffect(()=>{
        window.addEventListener('scroll', checkHeight)
        return ()=>{
        window.removeEventListener('scroll', checkHeight)
        }
    })
    // checking Height Ends Here

    const toggleNav = ()=>{
        setNavActive(!navActive)
    }

    const closeMenu = ()=>{
        setNavActive(false)
    }

    useEffect(()=>{
        const handleResize = ()=>{
            if (window.innerWidth <= 500){
                closeMenu()
            }
        }
        window.addEventListener('resize', handleResize)

        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])

    useEffect(()=>{
        if(window.innerWidth <= 1200){
            closeMenu()
        }
    },[])

  return (
    <nav className={`navbar ${navActive ? 'active':''}`}>
        <div>
            <Link 
            onClick={closeMenu} activeClass='navbar-active-content' 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            to='heroSection'
            className='navbar-content'>
                <img src="./img/Atua Just Logo square without background.png" alt="Logo" width="60rem" />
            </Link>
            
        </div>
        <a className={`nav_hamburger ${navActive ? 'active': ""}`} onClick={toggleNav}>
            <span className='nav_hamburger_line'></span>
            <span className='nav_hamburger_line'></span>
            <span className='nav_hamburger_line'></span>
        </a>
        <div className={`navbar-items ${navActive ? 'active': ""}`}>
            <ul>
                <li>
                    <Link 
                    onClick={closeMenu} activeClass='navbar-active-content' 
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
                    onClick={closeMenu} activeClass='navbar-active-content' 
                    spy={true} 
                    smooth={true} 
                    offset={20} 
                    duration={500}
                    to='services'
                    className='navbar-content'>
                        Services
                    </Link>
                </li>
                <li>
                    <Link 
                    onClick={closeMenu} activeClass='navbar-active-content' 
                    spy={true} 
                    smooth={true} 
                    offset={10} 
                    duration={500}
                    to='aboutUs'
                    className='navbar-content'>
                        About Us
                    </Link>
                </li>
            </ul>
        </div>
        <Link
        onClick={closeMenu} activeClass='navbar-active-content' 
        spy={true} 
        smooth={true} 
        offset={-70} 
        duration={500}
        to='contact'
        className='btn btn-outline-primary'>
            Contact Us
        </Link>
    </nav>
  )
}

export default Navbar