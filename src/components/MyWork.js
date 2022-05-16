import React from 'react'
import Softball from './images/SoftballWebsite.jpg'
import Dj from "./images/DjReact.jpg"
import MemeGenerator from "./images/MemeGenerator.jpg"
import './MyWork.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const myWork = () => {
    

    return (
        <div className='my-work' id='my-work'>
            <h2 className='my-work-heading'>My Work</h2>
            <span className='line'></span>
            <div className='carousel-wrapper'>
            <Carousel infiniteLoop 
                      autoPlay 
                      onClickItem={()=> {
                          
                      }}>
                <div className="project-container">
                    <h3 className='project-heading'>Softball Website</h3>
                    <img src={Softball} alt="" className='project-image' />
                    <div className='col2'>
                        <button href='www.github.com' className='view-code-btn'>View Code</button>
                        <button href='www.rockspringsangels.com' className='view-site-btn'>View Site</button>
                    </div>
                </div>
                <div className="project-container">
                    <h3 className='project-heading'>DJ React</h3>
                    <img src={Dj} alt="" className='project-image' />
                    <div className='col2'>
                        <button href='www.github.com' className='view-code-btn'>View Code</button>
                        <button href='www.google.com' className='view-site-btn'>View Site</button>
                    </div>
                </div>
                <div className="project-container">
                    <h3 className='project-heading'>Meme Generator</h3>
                    <img src={MemeGenerator} alt="" className='project-image' />
                    <div className='col2'>
                        <button href='www.github.com' className='view-code-btn'>View Code</button>
                        <button href='www.google.com' className='view-site-btn'>View Site</button>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default myWork
