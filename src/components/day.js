import React from 'react';
import './day.css';
import WeatherIcon from './weatherIcon';

function displayDay(milliseconds) {
  const dayLookup = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednessday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday',
  }
  const date = new Date(milliseconds);
  return dayLookup[date.getDay()]
}

const Day = props => {
  return (
    <div className={props.isActive ? "day day--active" : "day"}>
      <div className="icon">
        <WeatherIcon weatherId={props.data.weather} />
      </div>
      <p className="day-name">{displayDay(props.data.date)}</p>
    </div>
  )
}
export default Day;
