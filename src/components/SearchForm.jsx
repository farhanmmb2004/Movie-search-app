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
    <div className='inputBox' data-aos="slide-right">
       <form onSubmit={handleSubmit}>
      
      <i class="fa-solid fa-magnifying-glass"></i>
      <input 
       className='input'
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for movies..."
      />
    </form>
    </div>
  );
};

export default SearchForm;