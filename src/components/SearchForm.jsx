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
      // className='form-control'
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;