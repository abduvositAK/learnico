import React from 'react'
import './../OurPosts/OurPosts.css'
import post1 from '../../assets/img/post1.png'
import post2 from '../../assets/img/post2.png'
import post3 from '../../assets/img/post3.png'


function OurPosts() {
  return (
    <div className='ourPosts'>
        <div className="container">
            <div className="ourPost__inner">
                <div className="posts__word">Blog</div>
                <div className="posts__title">
                    <h2>Our latest posts</h2>
                    <a href="#">View all</a>
                </div>
                <ul className="posts__list">
                    <li className="posts__item">
                        <img src={post1} alt="" />
                        <h4 className='posts__name'>Freelance</h4>
                        <h3 className='posts__about'>7 freelance mistakes to avoid</h3>
                        <p className='posts__parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <a href="#" className='posts__read'>Read more</a>
                    </li>
                    <li className="posts__item">
                        <img src={post2} alt="" />
                        <h4 className='posts__name'>UI/UX Design</h4>
                        <h3 className='posts__about'>Brand design process explained</h3>
                        <p className='posts__parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <a href="#" className='posts__read'>Read more</a>
                    </li>
                    <li className="posts__item">
                        <img src={post3} alt="" />
                        <h4 className='posts__name'>Business</h4>
                        <h3 className='posts__about'>The beginner’s guide to recruiting a Webflow developer</h3>
                        <p className='posts__parag'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                        <a href="#" className='posts__read'>Read more</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default OurPosts