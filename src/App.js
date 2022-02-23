import React, { useEffect, useState } from "react";
import "./App.css";
import MainSearch from "./components/MainSearch";
import SideMenu from "./components/SideMenu";
import Time from "./components/Time";
import WeatherItem from "./components/WeatherItem";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnit, setIsUnit] = useState(true);
  const [is24hour, setIs24Hour] = useState(true);
  const [degrees, setDegrees] = useState("Celcius");
  const [ windowWidth, getWindowWidth] = useState(window.innerWidth);

  
  // Screen Size for media queries
    const setWidth = () => {
      getWindowWidth(
        window.innerWidth
      )
    }
    
    useEffect(() => {
      window.addEventListener('resize', setWidth);
      console.log(windowWidth)
      return(() => {
          window.removeEventListener('resize', setWidth);
      })
    }, [windowWidth])

  // Control of the side menu

  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  const unitToggle = () => {
    setIsUnit(!isUnit);
    if (isUnit === true) {
      setDegrees("Fahrenheit");
    } else {
      setDegrees("Celcius");
    }
  };

  // End Side Menu

  // Control of the clock toggle for 12h to 24h.
  const toggleHours = () => {
    if (is24hour === is24hour) {
      setIs24Hour(!is24hour);
      console.log(is24hour);
    }
  };
  
  
  return (
    <div className="App">
      <SideMenu
        menuToggle={menuToggle}
        isOpen={isMenuOpen}
        degrees={unitToggle}
      />
      <MainSearch />
      <Time />
      <WeatherItem
        menuOpen={isMenuOpen}
        unitToggle={unitToggle}
        isUnit={isUnit}
        degrees={degrees}
        width={windowWidth}
      />
      <div style={ windowWidth > '600' ? {fontSize: '100px'} : {fontSize: '50px'}}>test</div>
    </div>
  );
}

export default App;
