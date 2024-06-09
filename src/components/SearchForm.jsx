import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const { searchMovies } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      className='input'
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..."
        data-aos="slide-right"
      />
      <br />
      <button type="submit"
      data-aos="slide-left">Search</button>
    </form>
  );
};

export default SearchForm;