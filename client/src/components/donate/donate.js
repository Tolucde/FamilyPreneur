import React from 'react'
import povJpg from '../../assets/pov.jpg'
import missionPng from '../../assets/mission.png'

import visionPng from '../../assets/vision.png'
// import { Link } from 'react-router-dom'
import './styles.css'

const Donate = () => {
  return (
    <section className='donate'>
      <article className='donate__text'>
        <h3>PROBLEMS</h3>
        <p>
          In Nigeria, a person is considered poor when has availability of less
          than 137, 430 Naira (381 US Dollars) per year (World Bank 2020). 40%
          of Abuja residents live below the poverty level (Statisca 2020).
          Familyprenuer will help solve the problem of lack of capital and
          skills to access profitable livelihoods and improve the socio-economic
          status of the ultra-poor members of the community.
        </p>
        <button className='donate__text__button'>DONATE TO OUR CAUSE</button>
      </article>
      <figure className='donate__image'>
        <img src={povJpg} alt='pic depicting poverty' />
      </figure>
    </section>
  )
}

export default Donate
