import { Divider, Input } from 'antd'

// Iteration 5

function Search({searchName , setSearchName}) {
  return (
  <>
  <Divider>Search</Divider>
  <label></label>
  <Input style={{border:'black solid'}} value={searchName} type="text" onChange={event => setSearchName(event.target.value)} />
  </>
  )
}
export default Search;