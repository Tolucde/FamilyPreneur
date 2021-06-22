import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
const Article = () => {
  return (
    <div className='article'>
      COMING SOON
      <Link to='/'>
        <div className='go-back'>GO BACK</div>
      </Link>
    </div>
  )
}

export default Article
