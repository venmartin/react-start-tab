import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherItem.css";
import WeatherModal from "./WeatherModal";

const WeatherItem = ({ menuOpen, unitToggle, isUnit }) => {
  const [ weather, setWeather ] = useState([]);
  const [ forecast, setForecast ] = useState([]);
  const [ longitude, setLongitude ] = useState();
  const [ latitude, setLatitude ] = useState();
  const [ cityName, setCityName] = useState('')

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
        enableHighAccuracy: true,
        timeout: 5000,
      });
    } else {
      console.log("Error: Not Supported");
    }
  };

  const successCallback = (position) => {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(lon);
    console.log(lat);
    fetchWeather(lon, lat);
  };

  function errorCallback() {
    console.log(
      "Error: Location not allowed. Weather cannot be determined by location. Please use the search bar or enable location services."
    );
  }

  const fetchWeather = (lon, lat) => {
    // const city = 'Sydney'
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        setCityName(response.data.name);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(cityName)
  
  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <div
      className={menuOpen ? "weather-item weather-item-open" : "weather-item"}
      // onClick={handleOpen}
    >
    <WeatherModal cityName={cityName} isUnit={isUnit} unitToggle={unitToggle}>
      <span className="weather-name">{weather ? weather.name : "no name"}</span>
      <span className="weather-temp">
        {isUnit
          ? weather.main
            ? Math.round(weather.main.temp - 273.15) + "°C"
            : "0"
          : weather.main
          ? Math.round(weather.main.temp * 1.8 - 459.67) + "°F"
          : "0"}
      </span>
      </WeatherModal>
    </div>
  );
};

export default WeatherItem;
