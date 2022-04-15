import React, {useState} from 'react'

const Filters = () => {
  const [greased, setGreased] = useState(false)
  function handleGreasedChange(){
    setGreased((currentGreased) => !currentGreased)
  }
  return (
    <form>
      <label htmlFor='greased'>Greased</label>
      <input id= "greased" type= "checkbox" checked={greased} onChange={handleGreasedChange}/>
    </form>
  )
}

export default Filters