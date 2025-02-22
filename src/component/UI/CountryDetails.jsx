import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getIndividualData } from '../../api/Service';
import { Link } from 'react-router-dom';
import Loader from './Loader';

// const CountryDetails = () => {
//     let url = useParams()
//     // console.log( url ) -->(geting url as an object  {id:country name}));

//       const [isPending, startTransition] = useTransition();
//       const [country, setCountry] = useState(); // have a single country details
    
//       useEffect(() => {
//         startTransition(async () => {
//           try {
//             let res = await getIndividualData(url.id);
//             console.log("API Response:", res.data); 
//             if(res.status==200)
//             {
//             setCountry(res.data[0]);
//             }
//           } catch (error) {
//             console.error("Error fetching data:", error);
//           }
//         });
//       }, []);
    
//   return (
//       <section className='card country-details-card container'>
//         <div className='container-card bg-white-box'>
//           if(!country)
//           {
//             <Loader/>    // country ka data , country me store ho jaye tbbhi data show ho
//           } 
//           else{ 
          

//           <div className='country-image grid grid-two-cols'>

//            <img className='flag'
//            src={country.flags.png} 
//            alt={country.name.official} /> 
           
//              <div className='country-content'>

//                <p className='card-title'>{country.name.official}</p>

//                   <div className='infoContainer'>

//                     <p>
//                       <span className='card-description'>Native name:</span>
//                     {Object.keys(country.name.nativeName)
//                     .map((key)=> country.name.nativeName[key].common).join(",")
//                     }
//                     </p>

//                     <p>
//                       <span className='card-description'>Native name:</span>
//                        {country.population.toLocaleString()}
//                     </p>
//                     <p>
//                       <span className='card-description'>Region:</span>
//                        {country.region}
//                     </p>
//                     <p>
//                       <span className='card-description'>Sub Region:</span>
//                        {country.subregion}
//                     </p>  
//                     <p>
//                       <span className='card-description'>Capital:</span>
//                        {country.subregion}
//                     </p>
//                     <p>
//                       <span className='card-description'>Currency:</span>
//                        {country.currencies.CHF.name}
//                     </p>
//                     <p>
//                       <span className='card-description'>Top Level Domain:</span>
//                        {country.tld[0]}
//                     </p>
//                     <p>
//                       <span className='card-description'>Languages:</span>
//                        {Object.keys(country.languages).map((key)=> country.languages[key]).join(",")}
//                     </p>

//                 </div>
               
//              </div>
//           </div>
//             }

//               <div className='country-card-backBtn'>
//                 <Link to="/country" className="backBtn">
//                 <button>BACK</button>
//                 </Link>
//               </div>
//         </div>

//       </section>
//   )
// }

// export default CountryDetails







export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getIndividualData (params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }

      console.log(Object.keys(res.data[0].name.nativeName));
    });
  }, []);

  if (isPending) return <Loader />;

  console.log(params);
  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title"> {country.name.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capital}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {Object.keys(country.currencies)
                    .map((curElem) => country.currencies[curElem].name)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {Object.keys(country.languages)
                    .map((key) => country.languages[key])
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <Link to="/country" className="backBtn">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
