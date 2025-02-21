import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'

const CountryDetails = () => {
    let url = useParams()
    // console.log( url (geting id:country name));

      const [isPending, startTransition] = useTransition();
      const [countries, setCountries] = useState([]);
    
      useEffect(() => {
        startTransition(async () => {
          try {
            let res = await getIndividualData(url.id);
            console.log("API Response:", res.data); 
            setCountries(res.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        });
      }, []);
    
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails