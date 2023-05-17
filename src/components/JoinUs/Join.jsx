import React from 'react'
import './../JoinUs/Join.css'
import joinUs from './../../assets/img/joinUs.png'
import frame1 from './../../assets/img/frame1.png'
import frame2 from './../../assets/img/frame2.png'
import frame3 from './../../assets/img/frame3.png'

function Join() {
  return (

    <div className='joinUs'>
      <div className="container">
        <div className="join__inner">
          <div className="join__content">
            <h4 className='join__word'>Trending</h4>
            <h2 className='join__title'>Join more than 17,000+ students all over the world</h2>
            <p className='join__parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            <a href="#" className='join__btn'>Get started</a>
          </div>
          <img src={joinUs} alt="" />
        </div>
        <ul className="join__list">
          <li className="join__item">
            <img src={frame1} alt="" />
            <h3 className='join__item-title'>Browse our courses</h3>
            <p className='join__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.</p>
          </li>
          <li className="join__item">
            <img src={frame2} alt="" />
            <h3 className='join__item-title'>Purchase quickly and securely</h3>
            <p className='join__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.</p>
          </li>
          <li className="join__item">
            <img src={frame3} alt="" />
            <h3 className='join__item-title'>Start learning right away</h3>
            <p className='join__item-parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique duis cursus mi quis viverra.</p>
          </li>
        </ul>
      </div>
    </div>

  )
}


export default Join