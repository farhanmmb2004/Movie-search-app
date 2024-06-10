import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from './MovieCard.jsx';
import ScrollToTop from "react-scroll-to-top";
const MovieList = () => {
  const { movies } = useContext(MovieContext);
  if (movies.Response !== "True") {
   let style={
    color:'red'
}
    return (
        <h2 style={style} data-aos="fade-up" >{movies.Error}</h2>
    );
}

return (
    <div className="movie-list">
        {movies.Search.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
        ))}
        <ScrollToTop />
    </div>
);
};

export default MovieList;
