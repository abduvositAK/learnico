import React from 'react'
import './../About/About.css'
import about1 from '../../assets/img/about1.png'
import about2 from '../../assets/img/about2.png'


function About() {
  return (
    <div className='about'>
        <div className="container">
            <div className="about__inner">
                <img src={about1} alt="" />
                <div className="about__content content1">
                    <h3>Premium courses from the industry leaders</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <a href="#" className='about__btn'>Get started</a>
                    <a href="#" className='about__link'>Learn more <i class="bi bi-chevron-right"></i></a>
                </div>
            </div>
            <div className="about__inner">
                <div className="about__content content2">
                    <h3>Premium courses from the industry leaders</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <a href="#" className='about__btn'>Get started</a>
                    <a href="#" className='about__link'>Learn more <i class="bi bi-chevron-right"></i></a>
                </div>
                <img src={about2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About