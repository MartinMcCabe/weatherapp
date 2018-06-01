import React from 'react';
import './weatherIcon.css';

function getClass(weatherId) {
  const weatherIdLookup = {
    0: 'cloudy',
    1: 'rainy',
    2: 'partly-cloudy',
    3: 'sunny',
    4: 'overcast',
    5: 'thunderstorms',
  }

  return `weather-icon weather-icon--${weatherIdLookup[weatherId]}`;

}

const WeatherIcon = props => {
  return (
    <div className={getClass(props.weatherId)}></div>
  )
}

export default WeatherIcon;
