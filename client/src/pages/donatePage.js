import React from 'react'
import { Link } from 'react-router-dom'
import './donatePage.css'
const DonatePage = () => {
  return (
    <>
      <section className='donatePage'>
        <h2>INTERESTED IN DONATING TO OUR CAUSE?</h2>
        <div className='checkout-section'>
          <div className='checkout-cont'>
            <p className='card-det'>Card Details</p>

            <form>
              <div className='form-group'>
                <label htmlFor='card'>Card Number</label>
                <input type='tel' name='card' class='card-number' />
              </div>
              <div className='group2'>
                <div className='form-group g1'>
                  <label htmlFor='expiry'>Expiry Date</label>
                  <input type='tel' name='expiry' class='expiry' />
                </div>
                <div className='form-group g2'>
                  <label htmlFor='cvv'>CVV</label>
                  <input type='tel' name='cvv' class='cvv' />
                </div>
              </div>
            </form>
          </div>

          <div className='check-out-text'>DONATE</div>
        </div>
        <Link to='/'>
          <button>GO BACK</button>
        </Link>
      </section>
    </>
  )
}

export default DonatePage
