import React from 'react'
import "./Review.css"

export const Review = () => {
  return (
      <div className='review'>
          <hr />
          <div className="section-title">
              <h3>Sentiment Input</h3>
              <p>Reviews Would be Saved and Monitored for Training Purposes</p>
          </div>

          <div className="message-input">
              <textarea placeholder='Your Review Here' ></textarea>
              <button>Submit</button>
          </div>
    </div>
  )
}
