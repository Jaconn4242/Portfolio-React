import React, { useState } from 'react'
import {Link} from "react-scroll"
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

// <VideoBg autoPlay loop muted src={Video} type="video/mp4" />

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <h1>Portfolio</h1>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="hero" spy={true} smooth={true}  duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="my-work" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>My Work</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
