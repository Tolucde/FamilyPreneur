import React from 'react'
// import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import fpLogo from '../assets/lpLogo.jpg'
import './styles.css'

const Team = () => {
  return (
    <section className='team__page'>
      <h2>TEAM MEMBERS</h2>
      <section className='team'>
        <article className='member'>
          <img src={fpLogo} alt='fplogo' />
          <p>Japhet Sha’agi Kineze</p>
        </article>
        <article className='member'>
          <img src={fpLogo} alt='fplogo' />
          <p>Paul Joseph Gwumapan</p>
        </article>{' '}
        <article className='member'>
          <img src={fpLogo} alt='fplogo' />
          <p>Tolu Philip</p>
        </article>{' '}
        <article className='member'>
          <img src={fpLogo} alt='fplogo' />
          <p>Beauty Terah</p>
        </article>
        <article className='member'>
          <img src={fpLogo} alt='fplogo' />
          <p>Lorem ipsum.</p>
        </article>
      </section>
      <Link to='/'>
        <button>GO BACK</button>
      </Link>
    </section>
  )
}

export default Team
