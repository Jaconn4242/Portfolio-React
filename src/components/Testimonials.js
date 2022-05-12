import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/colton.jpg'
import user3 from './images/Jordan.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2 className='testimonials-heading'>Testimonials</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>"It's is not every day that you come accross a passionate and trustworthy friend who also knows his way around building awesome websites!" #RockSpringsSoftballTeam</p>
                        <p><span>Michael.M.J.</span></p>
                        <p>Coach at "Rocksprings Baptist Church"</p>
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>"Jeff Is the easiest to work with. He always steps up and never has an issue explaining anything or asking a question. I would choose him to be in a group every time. It would be a disservice if I didn't."</p>
                        <p><span>Colton Walker</span></p>
                        <p>Full Stack Web Developer - VSchool</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>"A very professional Web Developer, who is true to his word. Jeff has demonstrated a high amount of integrity in the time I have known him, and he was fast in making our company's employee award template!"</p>
                        <p><span>Jordan Sewell</span></p>
                        <p>Loan Consultant - Capcenter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
