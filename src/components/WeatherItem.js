import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherItem.css'

const WeatherItem = () => {

  const [ weather, setWeather ] = useState([])
  const [ unit, setUnit ] = useState(true)
  const [ unitConvert, setUnitConvert ] = useState('metric')

  const unitToggle = () => {
    setUnit(!unit)
  }

  const fetchWeather = () => {
    // const axios = require('axios')
    const city = 'Sydney'
    axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((response) => {
      setWeather(response.data)
      console.log(response.data)
   })

    }

 useEffect(() => {
    fetchWeather()
 }, []);

  return ( 
    <div className='weather-item'>
      <span className='weather-name'>{weather ? weather.name : "no name"}</span> 
      <span className='weather-temp'>
        { unit ? (
          weather.main ? Math.round(weather.main.temp - 273.15)+'°C' : '0')
          : weather.main ? Math.round(weather.main.temp * 1.8 - 459.67)+'°F' : '0'
        }
        
      </span>

      <button onClick={unitToggle}>C | F</button>
    </div>
    )
};

export default WeatherItem;
