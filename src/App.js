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
  return (
    <Provider store={store}>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Weather city="Rome" />
        <Weather city="Milan" />
        <Weather city="Naples" />
    </div>
    </Provider>
  );
};

export default App;

