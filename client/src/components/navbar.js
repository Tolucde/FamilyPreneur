import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import './styles/styles.css'

const Navbar = () => {
  return (
    <>
      <header>
        <div className='header'>
          <div className='logo'>
            <h4>FamilyPreneur.</h4>
          </div>
          <nav className='links'>
            <Link to='/donate'>Donate</Link>
            <Link to='/article'>Articles</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/team'>Team</Link>
            <Link to='/article'>Sign up</Link>
            <Link to='/article'>Login</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
