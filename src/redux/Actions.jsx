// actions.js
import axios from 'axios';

// Action types
export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';

// Action creator to fetch weather data for a city
export const fetchWeather = (city) => {
  return (dispatch) => {
    // Start the fetch process
    dispatch({ type: FETCH_WEATHER_START });

    // Send the API request
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then(response => {
        // If successful, dispatch success action with the data
        dispatch({ type: FETCH_WEATHER_SUCCESS, payload: { city, data: response.data } });
      })
      .catch(error => {
        dispatch({ type: FETCH_WEATHER_FAIL, payload: error.message });
      });      
  };
};
