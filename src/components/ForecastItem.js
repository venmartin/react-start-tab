import React from "react";
import "./ForecastItem.css";
import { ReactComponent as ArrowUp } from "../img/icons/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../img/icons/ArrowDown.svg";
import { ReactComponent as WiHumidity } from "../img/icons/WiHumidity.svg";
import { ReactComponent as FiWind } from "../img/icons/FiWind.svg";

const ForecastItem = ({
  id,
  day,
  temp,
  min_temp,
  max_temp,
  feels_like,
  humidity,
  icon,
  description,
  wind_speed,
}) => {
  const createDate = (dt, type) => {
    let day = new Date(dt * 1000);
    if (type == "long") {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return day.toLocaleString("en-us", { weekday: "long" }); // Friday
    }
    // return day.toLocaleString("en-us", options); // Friday, January 15, 2021
  };

  return (
    <div>
      <div className="item-container">
        <div className="day">{createDate(day, "long").substring(0, 3)}</div>
        <div className="main-temp">{temp}</div>
        <div className="icon">
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
        </div>
        <div className="description">{description}</div>
        <div className="hor-divider"></div>
        <div className="details">
          <div className="max-temp detail-item">
            <ArrowUp /> {max_temp}
          </div>
          <div className="min-temp detail-item">
            <ArrowDown /> {min_temp}
          </div>
          <div className="humidity detail-item">
            <WiHumidity /> {humidity}%
          </div>
          <div className="wind-speed detail-item">
            <FiWind /> {wind_speed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastItem;
