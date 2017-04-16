// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherPanel({weather}) {
  if (!weather) {
    return <h1>No weather data available</h1>;
  }
  const currentWeather = weather.weather[0];
  return <div>
    <h1>Weather in {weather.name}</h1>
    <h2>{weather.main.temp} °C <img src={`http://openweathermap.org/img/w/${currentWeather.icon}.png`}/></h2>
    <p>{currentWeather.description}</p>
  </div>;
}

WeatherPanel.propTypes = {
  weather: PropTypes.object
};
