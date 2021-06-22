import React from 'react'
// import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import fpLogo from '../../assets/lpLogo.jpg'

const Gallery = () => {
  return (
    <section>
      PICTORAL FACTS
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          textAlign: 'center',
        }}>
        <article className='pfacts'>
          <img src={fpLogo} alt='fplogo' />
          <p>COMING SOON</p>
        </article>
        <article className='pfacts'>
          <img
            src={fpLogo}
            alt='fplogo'
            style={{
              height: '300px',
              width: '250px',
              marginBottom: '10px',
              objectFit: 'cover',
            }}
          />
          <p>COMING SOON</p>
        </article>{' '}
        <article className='pfacts'>
          <img src={fpLogo} alt='fplogo' />
          <p>COMING SOON</p>
        </article>{' '}
        <article className='pfacts'>
          <img src={fpLogo} alt='fplogo' />
          <p>COMING SOON</p>
        </article>{' '}
        <article className='pfacts'>
          <img src={fpLogo} alt='fplogo' />
          <p>COMING SOON</p>
        </article>
      </section>
      <Link to='/'></Link>
      <button>GO BACK</button>
    </section>
  )
}

export default Gallery
