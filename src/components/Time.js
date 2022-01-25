import { valueToPercent } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Time.css'

const Time = () => {
  const [ timeState, setTimeState ] = useState()
  const [ dateState, setDateState ] = useState()
  const [ is24hour, setIs24hour ] = useState(true)

  function addZero(num) {
    return (parseInt(num, 10) < 10 ? '0' : '') + num;
  }

  const clock = () => {
    const today = new Date()
      let hours = today.getHours(),
      mins = today.getMinutes(),
      month = today.getMonth(),
      day = today.getDay(),
      date = today.getDate(),
      year = today.getFullYear()
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
    const clockHours = is24hour
      let amPm = is24hour ? (hours >= 12 ? 'PM' : 'AM') : ''

    if(clockHours === true) {
      hours = hours % 12
      hours = hours ? hours : 12
    } 
    
   const time = `${hours}:${addZero(mins)} ${amPm}`
      setTimeState(time)
   const todayDate = `${days[day]} ${date} ${months[month]} ${year}`
      setDateState(todayDate)
  };
  
  setInterval(clock, 1000)
  
  return (
    <div className='date-time-box'>
      <div className="clock">
        {timeState}
      </div>
      <div className='date'>
        {dateState}
      </div>

    </div>
  )
};


export default Time;
