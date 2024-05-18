import React, { createContext, useState } from 'react';
import { fetchMovies } from '../services/api';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <MovieContext.Provider value={{ movies, selectedMovie, setSelectedMovie, searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };