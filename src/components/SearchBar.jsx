// Searchbar.js
import React, { useState } from 'react';
import './SearchBar.css';

const Searchbar = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city) {
      onSubmit(city);
      setCity('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
      <button type="submit">Add City</button>
    </form>
  );
};

export default Searchbar;
