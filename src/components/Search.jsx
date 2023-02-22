import { useState } from 'react'

function Search({ filterFoods }) {
  const [query, setQuery] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
    filterFoods(e.target.value)
  };

  return (
    <div>
      <h3>Search</h3>
      <input style={{height: 20, width:200, color:'black', backgroundColor:'pink', borderRadius:6, border:1}} type="text" value={query} onChange={handleQuery} />
    </div>
  )
}

export default Search