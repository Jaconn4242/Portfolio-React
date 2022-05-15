import React from 'react'
import WorkData from "./WorkData.js"
import './MyWork.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

const myWork = () => {
    

    return (
        <div className='my-work' id='my-work'>
            <h2 className='my-work-heading'>My Work</h2>
            <span className='line'></span>
            <div className='carousel-wrapper'>
            <Carousel infiniteLoop autoPlay>
               
                {WorkData.map(item => {
                return (
                    <div key={item.id} className="project-container">
                            <img src={item.imgUrl} alt="" />
                            <div className='col2'>
                                <h3>{item.title}</h3>
                                <a href={item.gitHubUrl} className='button pbtn'>View Code</a>
                                <a href={item.siteUrl} className='button pbtn'>View Site</a>
                            </div>
                        </div>
                    )
                })} 
                
            </Carousel>
            </div>
        </div>
    )
}

export default myWork
