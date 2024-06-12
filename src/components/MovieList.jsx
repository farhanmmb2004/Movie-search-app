import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext.jsx';
import MovieCard from './MovieCard.jsx';
import ScrollToTop from "react-scroll-to-top";
import Footer from './Footer.jsx';
const MovieList = () => {
  const { movies,showOptionsList } = useContext(MovieContext);
  if (movies.Response !== "True") {
   let style={
    color:'red'
}
return (
    <>
    
        {!showOptionsList&&<h2 style={style} data-aos="fade-up">{movies.Error}</h2>}
    </>
);}

return (
<div className='movie-list'>
     { movies.Search.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
    ))
    }
    <ScrollToTop smooth />
    <Footer/>
</div>
);
};

export default MovieList;
