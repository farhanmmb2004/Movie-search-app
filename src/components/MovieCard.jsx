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
    setDetails(detail);
  };
  const back=()=>{
    setClick(!click)
  }

  return (
    <div className="movie-card" onClick={handleClick}>
     <h5>{movie.Title}</h5>
     <img src={movie.Poster}  />
     <p>{movie.Year}</p>
     {click&&<MovieDetail details={details}></MovieDetail>}
    </div>
  );
};

export default MovieCard;