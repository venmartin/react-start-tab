import React, { useEffect, useState } from 'react';


const MainSearch = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ engineName, setEngineName ] = useState('');
  const [ engine, setEngine ] = useState('')

  const googleEngine = () => {
    setEngineName(...engineName, 'google')
    setEngine(`https://google.com/search?tbm=isch`)

  }

  const ddgEngine = () => {
    setEngineName(...engineName, 'ddg')
    setEngine(`https://www.duckduckgo.com/`)
    return
    
  }
  
  const braveEngine = () => {
    setEngineName(...engineName, 'brave')
    setEngine(`https://search.brave.com/search`)
    return
    
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value
    setSearchValue(searchTerm)
    console.log(searchValue)
  }

  useEffect(() => {
    
  }, [handleChange]);
  

  return <div>
    <h2>Search Bar</h2>
    <button onClick={googleEngine}>
       Google
    </button>
    <button onClick={ddgEngine}>
      DuckDuckGo
    </button>
    <button onClick={braveEngine}>
      Brave
    </button>
        <form action={engine} target='_blank'>
          <input
          type='text'
          name='q'
          placeholder='Search'
          onChange={handleChange}
          >
          </input>
          <input type='submit' value='Submit' />

        </form>
  </div>;
};

export default MainSearch;
