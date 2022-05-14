import React from 'react'
// import { VideoBg } from './NavElements'
import Video from "./videos/Hero.mp4"
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
            <video  className='herobg-video' autoPlay loop muted src={Video}></video>
            {/* super cool pexels.com/video */}
            <div className='hero-content'>
                <p className='hero-title'>The name's Conn, Jeff Conn</p>
                <em className='hero-description'>I'm an inquisitive full stack web developer</em>
                <button href='/' className='button hero-button'>View my work</button>
            </div>
        </div>
    )
}

export default Hero
