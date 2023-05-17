// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { weatherReducer } from './redux/Reducer';
import Weather from './components/Weather';

// Create Redux store with weather reducer and thunk middleware
const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
});

// Main App component
const App = () => {
  // List of cities
  const cities = ['rome', 'london', 'tokyo'];

  return (
    <Provider store={store}>
      <div>
        {cities.map(city => <Weather key={city} city={city} />)}
      </div>
    </Provider>
  );
};

export default App;

