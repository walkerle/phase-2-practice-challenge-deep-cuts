import React from 'react'

function Search({setSearch}) {

  function handleSearch(e) {
    setSearch(e.target.value);  
  }

  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleSearch}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search