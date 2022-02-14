import React, { useState } from 'react';
import { Container } from '@mui/material';
import './App.css';
import MainSearch from './components/MainSearch';
import SideMenu from './components/SideMenu';
import Time from './components/Time';
import WeatherItem from './components/WeatherItem';

function App() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const [ isUnit, setIsUnit ] = useState(true)
  const [ is24hour, setIs24Hour] = useState(true)
  const [ degrees, setDegrees ] = useState('Celcius')
  
  // Control of the side menu

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
      console.log(isMenuOpen)
    
  }

  const unitToggle = () => {
    setIsUnit(!isUnit)
    if (isUnit === true) {
      setDegrees('Fahrenheit')
    } else {
      setDegrees('Celcius')
      
    }
  }

  // End Side Menu

  // Control of the clock toggle for 12h to 24h.
  const toggleHours = () => {
    if(is24hour === is24hour) {
    setIs24Hour(!is24hour)
    console.log(is24hour)
   }
  }





  return (
    <div className="App">
      <SideMenu menuToggle={menuToggle} isOpen={isMenuOpen} />
      <MainSearch />
      <Time />
      <WeatherItem menuOpen={isMenuOpen} unitToggle={unitToggle} isUnit={isUnit} degrees={degrees}/>
    </div>
  );
}

export default App;
