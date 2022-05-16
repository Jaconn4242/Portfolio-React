import React from 'react'
import Video from "./videos/Hero.mp4"
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <video  className='herobg-video' autoPlay loop muted src={Video}></video>
            <div className='hero-content'>
                <p className='hero-title'>The name's Conn, Jeff Conn</p>
                <em className='hero-description'>I'm an inquisitive full stack web developer</em>
                <a href='#my-work' className='button hero-button'>View my work</a>
                <img className='down-arrow' src="" alt="" />
            </div>
        </div>
    )
}

export default Hero
