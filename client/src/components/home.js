import React from 'react'
// import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import fpLogo from '../assets/lpLogo.jpg'
import About from './about/about'
import Process from './process/process'
import Donate from './donate/donate'
import './styles/styles.css'

const Home = () => {
  return (
    <>
      <section className='landing'>
        <article className='landing-content'>
          <div className='landingText'>
            <h1>
              Creating Wealth.
              <span style={{ color: '#e0501b', fontSize: '4vw' }}>
                Empowering.
              </span>
            </h1>
            <h3>
              Empowering families, exposing them to local economic opportunities
              helping them create sustainable businesses and employment
              opportunities.
            </h3>
            <Link to='/'>
              <button className='btn'>Learn More</button>
            </Link>
          </div>
        </article>

        <figure className='landingImage'>
          <img src={fpLogo} alt='logo' />
        </figure>
      </section>
      <About />
      <Process />
      <Donate />
    </>
  )
}

export default Home
