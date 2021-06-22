import React from 'react'
import goalsPng from '../../assets/goals.png'
import missionPng from '../../assets/mission.png'

import visionPng from '../../assets/vision.png'
// import { Link } from 'react-router-dom'
import './styles.css'

const Objectives = () => {
  return (
    <>
      <section className='section__objectives'>
        <h2>OBJECTIVES</h2>
        <section class='objectives'>
          <article class='objectives__article'>
            <figure>
              <img src={goalsPng} alt='goals' />
            </figure>
            <div className='objectives__article__text'>
              <h3>GOAL</h3>
              Our goal is to build a sustainable social enterprise that impacts
              lives globally. To make sure zero poverty rate is equitable and
              social amenities accessible to all.
            </div>
          </article>
          <article class='objectives__article'>
            <figure>
              <img src={visionPng} alt='vision' />
            </figure>
            <div className='objectives__article__text'>
              <h3>VISION</h3>
              To be the number one Social enterprise that is helping the
              ultra-poor households in Nigeria and globally gain access to
              sustainable wealth through entrepreneurship, financial services
              and providing ongoing coaching to enact effective social therapy.
            </div>
          </article>
          <article class='objectives__article'>
            <figure>
              <img src={missionPng} alt='mission' />
            </figure>
            <div className='objectives__article__text'>
              <h3>MISSION</h3>
              To promote and make effective the UN sustainable development
              goals, more specifically SDG 8, to meet modern day technology for
              inclusive communities.
            </div>
          </article>
        </section>
      </section>
    </>
  )
}

export default Objectives
