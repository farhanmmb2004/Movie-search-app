import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from './MovieCard';

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
   
    </div>
  );
};

export default MovieList;
