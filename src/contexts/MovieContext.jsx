import React, { createContext, useState } from 'react';
import { fetchMovies } from '../services/api';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [options, setOptions] = useState({});
  const [showOptions,setShowOptions]=useState(false);

  const searchMovies = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };
  const searchOptions = async (query) => {
    const results = await fetchMovies(query);
    setOptions(results);
  };

  return (
    <MovieContext.Provider value={{ movies, selectedMovie, setSelectedMovie, searchMovies,options, searchOptions,showOptions,setShowOptions}}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };