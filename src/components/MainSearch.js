import React, { useState } from 'react';


const MainSearch = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ engineName, setEngineName ] = useState('');
  const [ engine, setEngine ] = useState('')

  // const handleSubmit = (e) => {
  //   if(engineName === 'Google') {
  //     setEngine(`https://www.google.com/search?q=${searchValue}`)
  //     console.log(engine)
  //     window.open(engine)
  //   } else if(engineName === 'Qwant') {
  //     setEngine(`https://www.google.com/search?q=${searchValue}`)
  //     console.log(engine)
  //     window.open(engine)
  //   } else {
  //     alert('Select a search engine first');
  //   }
  //   e.preventDefault()
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.open(engine)
  }

  const googleEngine = () => {
    setEngineName(...engineName, 'google')
    setEngine(`https://www.google.com/search?q=${searchValue}`)
    return
  }

  const ddgEngine = () => {
    setEngineName(...engineName, 'ddg')
    setEngine(`https://www.duckduckgo.com/?q=${searchValue}`)
    return
    
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value
    setSearchValue(searchTerm)
    console.log(searchValue)
    return
  }

  return <div>
    <h2>Search Bar</h2>
    <button onClick={googleEngine}>
       Google
    </button>
    <button onClick={ddgEngine}>
      Qwant
    </button>
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          name={engineName}
          placeholder='Search'
          value={searchValue}
          onChange={handleChange}
          >
          </input>
          <input type='submit' value='Submit' />

        </form>
  </div>;
};

export default MainSearch;
