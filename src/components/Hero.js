import React from 'react'
import { VideoBg } from './NavElements'
import Video from "./videos/Hero.mp4"
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            <div className='content'>
                <p>The name's Conn, Jeff Conn</p>
                <p>I'm an inquisitive full stack web developer</p>
                <button href='/' className='button'>View my work</button>
            </div>
        </div>
    )
}

export default Hero
