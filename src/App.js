import React from 'react';
import { Container } from '@mui/material';
import './App.css';
import MainSearch from './components/MainSearch';
import SideMenu from './components/SideMenu';
import Time from './components/Time';
import WeatherItem from './components/WeatherItem';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <MainSearch />
      <Time />
      <WeatherItem />
    </div>
  );
}

export default App;
