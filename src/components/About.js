import React, {useState} from 'react'
import Resume from './documents/JeffConn-Resume.pdf'
import jeff from './images/jeff.jpg'
import CSSLogo from './images/icons8-css3.svg'
import HTML5Logo from './images/icons8-html-5.svg'
import JSLogo from './images/icons8-javascript.svg'
import ReactLogo from './images/icons8-react-native.svg'
import NodeLogo from './images/icons8-node-js.svg'
import MongoDBLogo from './images/icons8-mongodb.svg'
import './About.css'

const About = () => {

    const [showStack, setShowStack] = useState(false)
    const handleClick = () => {
        setShowStack(!showStack)
    }

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
                    <div className='about-btn-wrapper'>
                        <a href={Resume} className="resume-button button" download>Resume</a>
                        {!showStack ? <button onClick={handleClick} className='about-btn'>View current stack</button> : 
                        <button onClick={handleClick} className='collapse-btn'>Collapse Stack</button>}
                    </div>
                </div>
            </div>
                    {showStack && <div className='stack-display'>
                        <img src={CSSLogo} alt="css3 icon" />
                        <img src={HTML5Logo} alt="css3 icon" />
                        <img src={JSLogo} alt="css3 icon" />
                        <img src={ReactLogo} alt="css3 icon" />
                        <img src={NodeLogo} alt="css3 icon" />
                        <img src={MongoDBLogo} alt="css3 icon" />
                    </div>}
        </div>
    )
}

export default About
