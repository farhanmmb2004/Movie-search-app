import React, { useContext,useState } from 'react';
import { fetchMovieDetails } from '../services/api';
import MovieDetail from './MovieDetail.jsx';
import './MovieCard.css';
const MovieCard = ({ movie }) => {
  const[click,setClick]= useState(false);
  let[details,setDetails]=useState({})
  const handleClick = async () => {
    setClick(!click);
    let detail = await fetchMovieDetails(movie.imdbID);
    // console.log(detail);
    setDetails(detail);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
     {click&&<hr/>}
     <h3>{movie.Title}</h3>
     <p>{movie.Year}</p>
     {click&&<MovieDetail details={details}></MovieDetail>}
    </div>
  );
};

export default MovieCard;