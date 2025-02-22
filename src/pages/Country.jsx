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
import SearchFilter from '../component/UI/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search,setSearch] = useState()
  const [filter,setFilter] = useState("all")

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
  console.log(search,filter);
  
   const searchCountry=(country)=>{
    if(search)
    {
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    else{
      return country
    }
  }
  const filterRegion=(country)=>{
      if(filter=='all')
      {
        return country
      }
      else{
        return country.region==filter
      }

    }

   
   let filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country))
  

  return (
    <section className="country-section">
       <SearchFilter
       search={search}
       setSearch={setSearch}
       filter={filter}
       setFilter={setFilter}
       countries={countries}
       setCountries={setCountries}
       />

     
      <ul className="grid grid-four-cols">
        {
         filterCountries.map((curCountry,index) => (
          <CountryCard key={index} country={curCountry} />
        ))
        }
      </ul>
    </section>
  );
};

export default Country;
