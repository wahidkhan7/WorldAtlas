import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const CountryCard = ({country}) => {
  return (
   <li className='country-card card'>
         <div className='container-card bg-white-box'>
         <img src={country.flags.svg} alt={country.name.common} />

           <div className='countryInfo'>

            <p className='card-title'>{country.name.common.length >10? country.name.common.slice(0,10) + "...":country.name.common  }</p>
            <p> <span className='card-description'>Capital:</span>{country.capital}</p>
            <p> <span className='card-description'>Region:</span>{country.region}</p>
            <p> <span className='card-description'>Population:</span>{country.population.toLocaleString()}</p>
           <Link style={{"text-decoration":"none"}} to={`/country/${country.name.common}`}>
            <button className=' btn btn-darken btn-inline  bg-white-box'>Read More <FaArrowRightLong/> </button>
            </Link>

            </div>
   
     </div>
   </li>
  )
}

export default CountryCard