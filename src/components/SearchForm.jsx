import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';
import OptionList from './OptionList.jsx';
import BeatLoader from "react-spinners/BeatLoader";


const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const { searchMovies, searchOptions, setShowOptions } = useContext(MovieContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowOptions(false);
    setLoading(true); 
    await searchMovies(query);
    setLoading(false); 
    setQuery('');
    
  };

  const handleChange = async (e) => {
    setQuery(e.target.value);
    setShowOptions(true);
    await searchOptions(e.target.value);
  };

  return (
    <>
      <div className='inputBox' data-aos="slide-right">
        <form onSubmit={handleSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            className='input'
            type="text"
            value={query}
            onChange={(e) => handleChange(e)}
            placeholder="Search for movies..."
          />
        </form>
      </div>
      {loading && <h3 style ={{color:'white'}}>Loading <BeatLoader
        color="white"
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></h3>}
      <OptionList handleSubmit={handleSubmit} />
    </>
  );
};

export default SearchForm;
