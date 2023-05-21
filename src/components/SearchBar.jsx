import React, { useState } from 'react';
import './SearchBar.css';

const Searchbar = ({ onSubmit, existingCities }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      // Verifica se la città è già stata inserita
      if (!existingCities.includes(city)) {
        onSubmit(city);
        setCity('');
        setError('');
      } else {
        setError('City already exists.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Add City</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Searchbar;
