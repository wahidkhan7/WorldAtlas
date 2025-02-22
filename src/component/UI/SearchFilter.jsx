import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {

  function sortCountries(arrangment)
  {
    if(arrangment==='asc')
    { const AscOrder = [...countries].sort((a,b)=>a.name.common.localeCompare(b.name.common))
      // console.log("asccccc");
      setCountries(AscOrder);
      

    }
    if(arrangment==='desc')
    {
      const DescOrder = [...countries].sort((a,b)=>b.name.common.localeCompare(a.name.common))
      // console.log("descccc");
      setCountries(DescOrder)
      
    }
  }

  return (
    <section className='section-searchFilter container '>
        <input className='search-input' type="text" name="name" value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>

        <div>
          <button onClick={()=>sortCountries('asc')} className='sort-button' >Asc</button>
           </div>
           <div>
          <button onClick={()=>sortCountries('desc')} className='sort-button' >Desc</button>
        </div>

        <div>
            <select className='select-section ' value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Africa">Aferica</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </div>
    </section>
  )
}

export default SearchFilter