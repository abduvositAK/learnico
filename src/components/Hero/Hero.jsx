import React from 'react'
import './../Hero/Hero.css'
import heroBg from '../../assets/img/heroBg.png'


function Hero() {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__desc">
            <h2 className='hero__title'>Become an No-Code expert and find a job</h2>
            <p className="hero__parag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel molestie magna curabitur tincidunt nunc sit amet.</p>
            <div className="hero__link">
              <a href="#" className='hero__btn'>Explore Courses</a>
              <a href="#" className='hero__watch'>Watch Video</a>
            </div>
          </div>
          <img src={heroBg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero