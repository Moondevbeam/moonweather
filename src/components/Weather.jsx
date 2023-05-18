import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/Actions';
import './weather.css'; // Import the CSS file

// Weather component for a specific city
const Weather = ({ city }) => {
  const dispatch = useDispatch();

  // Get the weather data and loading state from Redux store
  const weatherData = useSelector(state => state.weather.data[city]);
  const loading = useSelector(state => state.weather.loading);

  // Fetch weather data when the component mounts or city changes
  useEffect(() => {
    dispatch(fetchWeather(city));
  }, [city, dispatch]);

  // Show loading state
  if (loading) {
    return <div className="card">Loading...</div>;
  }

  // If no data, don't render anything
  if (!weatherData) {
    return null;
  }

  // Render weather data
  return (
    <div className="card">
      <h2>{city}</h2>
      <p>Temperature: {weatherData.main.temp}</p>
      <p>Humidity: {weatherData.main.humidity}</p>
      <p>Wind Speed: {weatherData.wind.speed}</p>
    </div>
  );
};

export default Weather;
