import React from 'react'
import './../Benefits/Benefits.css'
import benefits from '../../assets/img/benefits.png'
import icon1 from '../../assets/img/benefitsIcon-1.png'
import icon2 from '../../assets/img/benefitsIcon-2.png'
import icon3 from '../../assets/img/benefitsIcon-3.png'
import icon4 from '../../assets/img/benefitsIcon-4.png'



function Benefits() {
  return (
    <div className="benefits">
        <div className="container">
            <div className="benefits__inner">
                <h4 className="benefits__word">Benefits</h4>
                <h2 className="benefits__title">Grow your knowledge from best teachers in the industry</h2>
                <p className="benefits__parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                <ul className="benefits__list">
                    <li className="benefits__item w240">
                        <img src={icon1} className='benefit__icon' alt="" />
                        <h4 className='benefits__item-title'>Over 430+ hours of lessons</h4>
                        <p className='benefits__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <img src={icon1} className='benefit__icon' alt="" />
                        <h4 className='benefits__item-title'>40+ teachers</h4>
                        <p className='benefits__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                    </li>
                    <li className="benefits__item ">
                        <img src={benefits} alt="" />
                    </li>
                    <li className="benefits__item w240">
                        <img src={icon1} className='benefit__icon' alt="" />
                        <h4 className='benefits__item-title'>Online community</h4>
                        <p className='benefits__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <img src={icon1} className='benefit__icon' alt="" />
                        <h4 className='benefits__item-title'>1-on-1 coaching</h4>
                        <p className='benefits__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

                    </li>
                </ul>
                <a href="#" className='benefits__btn'>Get started</a>
            </div>
        </div>
    </div>
  )
}

export default Benefits