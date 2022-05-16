import React from 'react'
import ArmLogo from './images/icons8-muscle-64.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Testimonials</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#my-work'>My Work</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 ConnsCoding <img src={ArmLogo} alt="arm" /></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
