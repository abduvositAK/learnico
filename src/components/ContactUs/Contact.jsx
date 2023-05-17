import React from 'react'
import './../ContactUs/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <div className="contact__inner">
                <h2 className='contact__title'>Start learning today</h2>
                <p className='contact__parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="contact__link">
                    <a href="#" className='contact__start'>Get started</a>
                    <a href="#" className='contact__us'>Contact us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact