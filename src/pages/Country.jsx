// import React, { startTransition, useEffect, useState, useTransition } from 'react'
// import { getData } from '../api/Service';
// import Loader from '../component/UI/Loader';
// import CountryCard from '../component/UI/CountryCard';

// const Country = () => {

//  const [isPending, startTransition] = useTransition();
//  const [countries,setCountries] =useState([]);

//  useEffect(()=>{
   
//   startTransition( async()=>{
//     let res = await getData()
//     // console.log(res.data);
//     setCountries(res.data)
//     console.log(countries);
    
//    })

//   },[])
  

//   if(isPending)
//   {
//     return <Loader/>
//   }


  

  
//   return (
//     <section className='country-section'>
//       <ul className='grid grid-four-cols'>
//       <h1>Countryyyyyy</h1>

//       </ul>

//     </section>
//   )
// }

// export default Country


import React, { useEffect, useState, useTransition } from 'react';
import { getData } from '../api/Service';
import Loader from '../component/UI/Loader';
import CountryCard from '../component/UI/CountryCard';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        let res = await getData();
        console.log("API Response:", res.data); 
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
  }, []);

  // **New useEffect to log the updated state**
  // useEffect(() => {
  //   console.log("Updated countries:", countries);
  // }, [countries]);

  if (isPending) {
    return <Loader />;
  }

  return (
    <section className="country-section">
     
      <ul className="grid grid-four-cols">
        {
        countries.map((curCountry,index) => (
          <CountryCard key={index} country={curCountry} />
        ))
        }
      </ul>
    </section>
  );
};

export default Country;
