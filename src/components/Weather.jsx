import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/Actions';
import './weather.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faBolt, faCloudRain, faSnowflake, faSmog, faWind, faWater, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

const weatherIcons = {
  "Thunderstorm": faBolt,
  "Drizzle": faCloudRain,
  "Rain": faCloudShowersHeavy,
  "Snow": faSnowflake,
  "Mist": faSmog,
  "Smoke": faSmog,
  "Haze": faSmog,
  "Dust": faSmog,
  "Fog": faSmog,
  "Sand": faSmog,
  "Ash": faSmog,
  "Squall": faWind,
  "Tornado": faWind,
  "Clear": faSun,
  "Clouds": faCloud,
};

const Weather = ({ city }) => {
  const dispatch = useDispatch();

  const weatherData = useSelector(state => state.weather.data[city]);
  const loading = useSelector(state => state.weather.loading);

  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  const convertToCelsius = (temperature) => {
    return Math.round(temperature - 273.15);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return null;
  }

  const icon = weatherIcons[weatherData.weather[0].main];

  return (
    <div className="weatherCard">
      <h2 className="weatherTitle">{city}</h2>
      <p className="weatherInfo">Temperature: {convertToCelsius(weatherData.main.temp)}°C</p>
      <p className="weatherInfo">Weather: {weatherData.weather[0].description}</p>
      <p className="weatherInfo">Wind Speed: {weatherData.wind.speed} m/s <FontAwesomeIcon icon={faWind} /></p>
      {icon && <FontAwesomeIcon icon={icon} size="2x" />}
    </div>
  );
};

export default Weather;
