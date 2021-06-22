import React from 'react'
import selectPng from '../../assets/selection.jpg'
import gradPng from '../../assets/grad.png'
import eduPng from '../../assets/edu.png'

// import { Link } from 'react-router-dom'
import './styles.css'
import Objectives from './objectives'

const process = () => {
  return (
    <>
      <section>
        <section className='infoSection'>
          <hgroup className='infoHeader'>
            <h1>
              OUR <br />
              <span style={{ color: '#e0501b' }}>THE PROCESS.</span>
            </h1>
          </hgroup>
          <div className='infoCards'>
            <article className='card one'>
              <img src={selectPng} className='cardoneImg' alt='selection' />
              <div className='cardbgone'>Familyprenuer</div>
              <div className='cardContent'>
                <p>
                  Selection of participants through family search survey and
                  screening process.
                </p>
                <div className='cardBtn'>
                  <img src='img/next.png' alt='' className='cardIcon' />
                </div>
              </div>
            </article>
            <article className='card two'>
              <img src={eduPng} className='cardtwoImg' alt='education' />
              <div className='cardbgtwo'>Educational hub</div>
              <div className='cardContent'>
                <p>
                  Participants weekly will receive interactive, practical
                  business skills training and bi-monthly cohort meetings and
                  weekly mentoring by staff coaches using our I-KITS model.
                </p>
                <div className='cardBtn'>
                  <img src='img/next.png' alt='' className='cardIcon' />
                </div>
              </div>
            </article>
            <article className='card three'>
              <img src={gradPng} className='cardthreeImg' alt='grad' />
              <div className='cardbgone'>Graduation</div>
              <div className='cardContent'>
                <p>
                  participants receive cash transfer after graduation from
                  training. on-going mentoring by our staff coaches to help
                  business succeed in 12 Months Sustainable business owners
                </p>
                <div className='cardBtn'>
                  <img src='img/next.png' alt='' className='cardIcon' />
                </div>
              </div>
            </article>
          </div>
        </section>
        <Objectives />
      </section>
    </>
  )
}

export default process
