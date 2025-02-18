import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <main className='hero-section'>
      <div className='container grid grid-two-cols'>
        <div className='hero-content'>
          <h1 className='heading-xl'>Explore the World,One Country at a Time</h1>
          <p className='paragraph'>Discover the history culture and beauty of every nation. Sort,Search and filter through countries to find the details you need</p>
          <button>Start Exploring <FaArrowRightLong /> </button>
        </div>
        <div className='hero-image'></div>

      </div>
    </main>
  )
}

export default Home