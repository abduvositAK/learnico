import React from 'react'
import './../Courses/Course.css'
import course1 from '../../assets/img/course1.png'


function Course() {
  return (
    <div className='course'>
      <div className="container">
        <h4 className='course__trend'>Trending</h4>
        <h2 className='course__title'>The most popular courses</h2>
        <p className='course__parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
        <ul className='course__list'>
          <li className='course__item'>
            <a href='#' className='course__beginner'>Beginner</a>
            <h3 className='course__name'>Webflow Basics</h3>
            <p className='course__price'>$ 24.00 USD</p>
            <a href="#" className='course__enroll mt-top-1'>Enroll Course</a>

            
          </li>
          <li className='course__item'>
            <a href='#' className='course__beginner'>Beginner</a>
            <h3 className='course__name'>Webflow Interactions Masterclass</h3>
            <p className='course__price'>$ 55.00 USD</p>
            <a href="#" className='course__enroll mt-top-2'>Enroll Course</a>
          </li>
          <li className='course__item'>
            <a href='#' className='course__beginner'>Beginner</a>
            <h3 className='course__name'>Advanced CMS and Integrations</h3>
            <p className='course__price'>$ 38.00 USD</p>
            <a href="#" className='course__enroll mt-top-2'>Enroll Course</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Course