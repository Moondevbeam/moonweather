// Weather.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/Actions';
import './weather.css';

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

  return (
    <div className="weatherCard">
      <h2 className="weatherTitle">{city}</h2>
      <p className="weatherInfo">Temperature: {convertToCelsius(weatherData.main.temp)}°C</p>
      <p className="weatherInfo">Weather: {weatherData.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
    </div>
  );
};

export default Weather;
