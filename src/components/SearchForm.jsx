import React, { useState, useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';
import OptionList from './OptionList.jsx';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const { searchMovies,searchOptions,setShowOptions } = useContext(MovieContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(query);
    setQuery('');
    setShowOptions(false);
  };
  const handleChange=(e)=>{
    setQuery(e.target.value)
    setShowOptions(true);
    searchOptions(e.target.value);
  }

  return (<>
  <div className='inputBox' data-aos="slide-right">
       <form onSubmit={handleSubmit}>
      
      <i class="fa-solid fa-magnifying-glass"></i>
      <input 
       className='input'
        type="text" 
        value={query} 
        onChange={(e) => handleChange(e)} 
        placeholder="Search for movies..."
      />
    </form>
    </div>
    <OptionList query={query} setQuery={setQuery} handleSubmit={handleSubmit}/>
    </>
  );
};

export default SearchForm;