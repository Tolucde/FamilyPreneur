import React from 'react'
import familyPng from '../../assets/family.png'
// import { Link } from 'react-router-dom'
import './styles.css'

const About = () => {
  return (
    <>
      <section class='about'>
        <article class='aboutText'>
          <h1>
            About <br />
            <span style={{ color: '#ffd500', fontSize: '3vw' }}>
              FamilyPreneur?
            </span>
          </h1>
          <figure className='family__pic'>
            <img src={familyPng} alt='family pic' />
          </figure>
        </article>
        <article class='aboutList'>
          <ol>
            <li>
              <span>01</span>
              <p>
                The Familyprenuer program is a match-making startup uniting
                ultra-poor families through information technology, a way of
                promoting the cultural shift in the modern day society.
              </p>
            </li>
            <li>
              <span>02</span>
              <p>
                Familyprenuer program empowers local families living in extreme
                poverty by exposing participants to practical training
                tailor-made to local economic opportunities helping them create
                sustainable businesses and employment opportunities.
              </p>
            </li>
            <li>
              <span>03</span>
              <p>
                Targeted area are households in Kwali area council, Abuja
                Nigeria living in extreme poverty.
              </p>
            </li>
            <li>
              <span>04</span>
              <p>
                Selected through our community prioritization house-to-house
                survey and screening process.
              </p>
            </li>
          </ol>
        </article>
      </section>
    </>
  )
}

export default About
