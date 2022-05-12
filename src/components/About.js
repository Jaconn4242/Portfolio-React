import React from 'react'
import jeff from './images/jeff.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={jeff} alt='jeff' className='self-image' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p className='description'>After graduating highschool, I joined the Marine Corps as a communications specialist allowing me to use my training in delivering wideband data communications through cutting edge government software overseas during Operation Inherent Resolve. <br />
                       After an honorable discharge, I attended Coastal Carolina University where I recieved my Bachelors degree in Business Administration with a minor in Entreprenuership. <br />
                       In my spare time I enjoy researching and testing new development languages, hiking the Smokey Mountains and entering into local ping-pong competitions.</p>
                    <p className='bold-description'>I am a full stack web developer willing to expand my horizons to projects looking for software support and consultancy.</p>
                    <button className='button'>View current stack</button>
                </div>
            </div>
        </div>
    )
}

export default About
