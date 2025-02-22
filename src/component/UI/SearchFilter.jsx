import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter}) => {
  return (
    <section className='section-searchFilter container'>
        <input type="text" name="name" value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}  />

        <div>
            <select className='select-section' value={filter} onChange={(e)=>setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Africa">Aferica</option>
                <option value="America">America</option>
                <option value="Aisa">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </div>
    </section>
  )
}

export default SearchFilter