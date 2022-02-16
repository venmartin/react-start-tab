import React from "react";
import './ForecastItem.css'


const ForecastItem = ({
  id,
  day,
  temp,
  min_temp,
  max_temp,
  feels_like,
  icon,
  description,
  wind_speed,
}) => {
 
  const createDate = (dt, type) => {
    let day = new Date(dt * 1000)
    if (type == 'long') {
      let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      return day.toLocaleString("en-us", { weekday: "long" }); // Friday
    }
      // return day.toLocaleString("en-us", options); // Friday, January 15, 2021
    } 
  



  return (
    <div>
      <div className="item-container">
        <div className='day'>{createDate(day, 'long').substring(0, 3)}</div>
        <div className="main-temp">{temp}</div>
        <div className="icon">
           <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
        </div>
        <div className="description">{description}</div>
        <div className="details">
          <div className="min-temp">{min_temp}</div>
          <div className="max-temp">{max_temp}</div>
          <div className="feels-like">{feels_like}</div>
          <div className="wind-speed">{wind_speed}</div>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
