import React from 'react'
import { useState } from 'react';

const AboutCard = ({ country }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  let { name, capital, population, region, official_language, currency, interesting_fact } = country

  return (

    <div className="flip-card"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)} >
      <div className="card">
        <div className="container-card bg-blue-box">

          <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
            {/* front-side */}
            <div className="flip-card-front">
              <p className='conatiner-title'>{name}</p>
              <p> <span className='card-description'>Capital:</span>{capital}</p>
              <p> <span className='card-description'>Population:</span>{population}</p>
              <p> <span className='card-description'>Region:</span>{official_language}</p>
              <p> <span className='card-description'>Region:</span>{currency}</p>
            </div>
            {/* back-side */}
            <div className="  flip-card-back">
              <p> <span className='card-description'>Interesting Fact:</span>{interesting_fact}</p>
            </div>
          </div>

        </div>
      </div>

    </div>



  )
}

export default AboutCard