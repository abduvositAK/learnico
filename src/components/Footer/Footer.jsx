import React from 'react'
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'
import facebook from '../../assets/img/facebook.png'

import './../Footer/Footer.css'



function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__subscribe">
              <h3>Join our newsletter to stay up to date on features and releases.</h3>
              <div className="footer__input">
                <input type="text" />
                <button>Subscribe</button>
              </div>
              <p>Privacy Policy and provide consent to receive updates from our company. By subscribing you agree to with our</p>
            </div>
            <div className="footer__link">
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
            </div>
            <div className="footer__link">
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
            </div>
            <div className="footer__link">
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
            </div>
            <div className="footer__link">
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
              <a href="#">Home</a>
            </div>

          </div>
          <div className="footer__bottom">
            <h4>© Learnico byMinimal Square. Powered by Webflow.</h4>
            <div className="social__icon">
              <a href="#"><img src={facebook} alt="" /></a>
              <a href="#"><img src={twitter} alt="" /></a>
              <a href="#"><img src={instagram} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;