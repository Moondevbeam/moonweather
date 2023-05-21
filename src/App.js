// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { weatherReducer } from './redux/Reducer';
import Weather from './components/Weather';
import Searchbar from './components/SearchBar';

// Create Redux store with weather reducer and thunk middleware
const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
});

// Main App component
const App = () => {
  const [cities, setCities] = useState(["Rome", "Milan", "Naples"]);

  const handleAddCity = (city) => {
    setCities(prevCities => [...prevCities, city]);
  };

  return (
    <Provider store={store}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Searchbar onSubmit={handleAddCity} />
        <div className="cardContainer">
          {cities.map(city => <Weather key={city} city={city} />)}
        </div>
      </div>
    </Provider>
  );
};

export default App;
