import React from 'react'
import twt from '../../assets/twt.png'
import linked from '../../assets/linked.png'

import fb from '../../assets/fb.png'
// import { Link } from 'react-router-dom'
import './styles.css'

const Footer = () => {
  return (
    <>
      <footer>
        <aside className='ready'>
          <div className='ready__text'>
            <p>Ready for an easier future?</p>
            <p>Lets get started</p>
          </div>
          <button>Get Started</button>
        </aside>
        <section class='footer'>
          <div class='footer__logo'>
            <h4> FamilyPreneur. </h4>
            <figure class='socials'>
              <img src={fb} alt='fb' />
              <img src={twt} alt='twt' />
              <img src={linked} alt='lnk' />
            </figure>
          </div>

          <ul class='footer__list'>
            <li>About</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
          <ul class='footer__list'>
            <li>Gallery</li>
            <li>Member</li>
            <li>Articles</li>
          </ul>
          <div class='footer__copyright'>
            <p>Copyright © 2021 Tripay</p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
