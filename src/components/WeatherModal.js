import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastItem from "./ForecastItem";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CancelIcon from "@mui/icons-material/Cancel";
import "./WeatherModal.css";
import AirIcon from "@mui/icons-material/Air";
import { ReactComponent as WiHumidity } from "../img/icons/WiHumidity.svg";
import { ReactComponent as FiWind } from "../img/icons/FiWind.svg";
import { ReactComponent as GiSunrise } from "../img/icons/GiSunrise.svg";
import { ReactComponent as GiSunset } from "../img/icons/GiSunset.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const WeatherModal = ({
  isUnit,
  unitToggle,
  children,
  width,
  id,
  cityName,
  temp,
  min_temp,
  max_temp,
  feels_like,
  icon,
  description,
  wind_speed,
}) => {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    fetchForecast(cityName);
  };
  const handleOpenAlert = () => {
    setOpenAlert(true);
  };
  const handleClose = () => setOpen(false);
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState({});
  const [searchCity, setSearchCity] = useState("");
  const [iconImgCurrent, setIconImgCurrent] = useState();
  const [iconImgDaily, setIconImgDaily] = useState();
  const [errorModal, setErrorModal] = useState(false);
  // const [ isUnit, setIsUnit ] = useState(true)

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1300px",
    width: "90%",
    bgcolor: "#27272780",
    border: "none",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#00ffff75" : " #00ffff90",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  const fetchForecast = (city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        const dataLat = response.data.coord.lat;
        const dataLon = response.data.coord.lat;
        weeklyForecast(dataLat, dataLon);
        console.log(weather);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log(forecast)

  const handleChange = (e) => {
    setSearchCity(e.target.value);
    console.log(searchCity);
  };
  // const submitCity = (e) => {
  //   e.preventDefault()
  //   fetchForecast(searchCity)
  // }

  const submitCity = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeather(response.data);
        let dataLat = response.data.coord.lat;
        let dataLon = response.data.coord.lon;
        console.log(weather);
        weeklyForecast(dataLat, dataLon);
      })
      .catch(function (error) {
        console.log(error);
        setErrorModal(true);
        errorCallback();
      });
  };

  const errorCallback = () => {
    if (errorModal === true) {
      handleOpenAlert();
    } else {
      setErrorModal(false);
    }
  };

  const weeklyForecast = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        setForecast(response.data);
        console.log(forecast);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  

  useEffect(() => {}, []);

  return (
    <div>
      <div className="btn-modal" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Snackbar
              open={openAlert}
              autoHideDuration={6000}
              onClose={handleCloseAlert}
            >
              <Alert
                onClose={handleCloseAlert}
                severity="error"
                sx={{ width: "100%" }}
              >
                The location you have entered is unavailable. Please enter a
                different location.
              </Alert>
            </Snackbar>
            <div className="close-btn">
              <CancelIcon onClick={handleClose} />
            </div>
            <div className="forecast-container">
              <div className="weather-search">
                <form className="search-form-modal" onSubmit={submitCity}>
                  <div className="toggle-degrees">
                    <FormGroup>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <AntSwitch
                          onClick={unitToggle}
                          defaultChecked
                          inputProps={{ "aria-label": "ant design" }}
                        />
                      </Stack>
                    </FormGroup>
                    {isUnit ? <span>Metric</span> : <span>Imperial</span>}
                  </div>
                  <input
                    className="search-input"
                    type="text"
                    onChange={handleChange}
                    placeholder="Search by City Name"
                  ></input>
                </form>
              </div>
              <div className="detailed-current">
                <div className="current-main">
                  <div className="current-top">
                    <div className="current-temp">
                      {isUnit ? (
                        forecast.current ? (
                          <span>
                            {Math.round(forecast.current.temp - 273.15) + "°C"}
                          </span>
                        ) : (
                          "35 °C"
                        )
                      ) : forecast.current ? (
                        <span>
                          {Math.round(forecast.current.temp * 1.8 - 459.67) +
                            "°F"}
                        </span>
                      ) : (
                        "85 °F"
                      )}
                    </div>
                    <div className="current-icon">
                      {forecast.current ? (
                        <img
                          src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
                        ></img>
                      ) : (
                        <img src="http://openweathermap.org/img/wn/01d@2x.png"></img>
                      )}
                      {forecast.current ? (
                        <span className="weather-description">
                          {forecast.current.weather[0].description}
                        </span>
                      ) : (
                        "Clear"
                      )}
                    </div>
                  </div>
                  <div className="vert-divider"></div>
                  <div className="current-details">
                    {forecast.current ? (
                      <span className="current-desc">
                        <GiSunrise />{" "}
                        {new Date(
                          forecast.current.sunrise * 1000
                        ).toLocaleTimeString(navigator.language, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    ) : (
                      "06:00 AM"
                    )}
                    {forecast.current ? (
                      <span className="current-desc">
                        <GiSunset />{" "}
                        {new Date(
                          forecast.current.sunset * 1000
                        ).toLocaleTimeString(navigator.language, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    ) : (
                      "06:00 AM"
                    )}
                    {forecast.current ? (
                      <span className="current-desc">
                        <WiHumidity /> {forecast.current.humidity}%
                      </span>
                    ) : (
                      "80%"
                    )}
                    {forecast.current ? (
                      <span className="current-desc">
                        <FiWind /> {forecast.current.wind_speed}km/h
                      </span>
                    ) : (
                      "80%"
                    )}
                  </div>
                </div>
              </div>
              <div className="current-city">
                <span className="current-city-title">
                  {weather ? weather.name : "Syd"},{" "}
                  {weather.sys ? weather.sys.country : "Aus"}
                </span>
              </div>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={
                  width > "1200"
                    ? 5
                    : width > "1000"
                    ? 4
                    : width > "700"
                    ? 3
                    : width > "600"
                    ? 2
                    : 1
                }
                // centeredSlides={
                //   width < '800' ? true : false
                // }
                navigation={{
                  color: "red",
                }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {forecast.daily &&
                  forecast.daily.map((item, i) => (
                    <SwiperSlide className='swiper-slide' key={item.sunrise}>
                      <ForecastItem
                        key={item.dt}
                        day={item.dt}
                        temp={
                          isUnit
                            ? `${Math.round(item.temp.day - 273.15) + "°C"}`
                            : `${
                                Math.round(item.temp.day * 1.8 - 459.67) + "°F"
                              }`
                        }
                        min_temp={
                          isUnit
                            ? `${Math.round(item.temp.min - 273.15) + "°C"}`
                            : `${
                                Math.round(item.temp.min * 1.8 - 459.67) + "°F"
                              }`
                        }
                        max_temp={
                          isUnit
                            ? `${Math.round(item.temp.max - 273.15) + "°C"}`
                            : `${
                                Math.round(item.temp.max * 1.8 - 459.67) + "°F"
                              }`
                        }
                        humidity={item.humidity}
                        feels_like={
                          isUnit
                            ? `${
                                Math.round(item.feels_like.day - 273.15) + "°C"
                              }`
                            : `${
                                Math.round(item.feels_like.day * 1.8 - 459.67) +
                                "°F"
                              }`
                        }
                        icon={item.weather[0].icon}
                        description={item.weather[0].description}
                        wind_speed={
                          isUnit
                            ? Math.round(item.wind_speed.toFixed(2)) + " kmph"
                            : Math.round(
                                item.wind_speed.toFixed(2) * 0.62137119
                              ) + " mph"
                        }
                      />
                    </SwiperSlide>
                  ))}
                {/* </div> */}
              </Swiper>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default WeatherModal;
