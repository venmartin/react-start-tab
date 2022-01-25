import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherItem.css'

const WeatherItem = () => {

  const [ weather, setWeather ] = useState()

  
  const fetchWeather = async () => {
    const axios = require('axios')
    const city = 'sydney'
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_WEATHER_API_KEY}`
    );

    console.log(data)
  }

 useEffect(() => {
    fetchWeather()
 }, []);
 

  return ( 
    <div>
      <h2 className='weather-item'>Weather Item</h2>
    </div>
    )
};

export default WeatherItem;
