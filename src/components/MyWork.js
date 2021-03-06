import React from 'react'
import Softball from './images/SoftballWebsite.jpg'
import Dj from "./images/DjReact.jpg"
import MemeGenerator from "./images/MemeGenerator.jpg"
import './MyWork.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'

const myWork = () => {
    

    return (
        <div className='my-work' id='my-work'>
            <h2 className='my-work-heading'>My Work</h2>
            <span className='line'></span>
            <div className='carousel-wrapper'>
            <Carousel infiniteLoop 
                      autoPlay 
                    >
                <div className="project-container">
                    <h3 className='project-heading'>Softball Website</h3>
                    <img src={Softball} alt="" className='project-image' />
                    <div className='col2'>
                        <button className='view-code-btn' >
                            <a target="_blank" href="https://github.com/Jaconn4242/Rock-Springs-Angels" rel="noopener noreferrer">View Code</a>
                        </button>
                        <button className='view-site-btn'>
                        <a target="_blank" href="https://rockspringsangels.com" rel="noopener noreferrer">View Site</a>
                        </button>
                    </div>
                </div>
                <div className="project-container">
                    <h3 className='project-heading'>DJ React</h3>
                    <img src={Dj} alt="" className='project-image' />
                    <div className='col2'>
                        <button className='view-code-btn'>
                            <a target="_blank" href="https://github.com/Jaconn4242/assignments/tree/main/Level-3/dj-react" rel="noopener noreferrer">View Code</a>
                        </button>
                        <button className='view-site-btn'>
                            <a href="https://dj-react-jeff.netlify.app/" rel="noopener noreferrer">View Site</a>
                        </button>
                    </div>
                </div>
                <div className="project-container">
                    <h3 className='project-heading'>Meme Generator</h3>
                    <img src={MemeGenerator} alt="" className='project-image' />
                    <div className='col2'>
                    <button className='view-code-btn'>
                            <a target="_blank" href="https://github.com/Jaconn4242/assignments/tree/main/Level-3/meme-generator" rel="noopener noreferrer">View Code</a>
                        </button>
                        <button className='view-site-btn' >
                            <a target="_blank" href="https://meme-generator-jeff.netlify.app/" rel="noopener noreferrer">View Site</a>
                        </button>
                    </div>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default myWork
