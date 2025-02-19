import React, { useEffect, useTransition } from 'react'
import { getData } from '../api/Service';

const Country = () => {
  const[isPending, startTransition] = useTransition();

  startTransition(async()=>{
    let res = await getData();
  console.log(res);
  })
  
useEffect(()=>{
  startTransition();
},[])

  

  
  return (
    <h1>Country</h1>
  )
}

export default Country