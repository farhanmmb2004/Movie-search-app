import React, { useContext,useState } from 'react';
import { fetchMovieDetails } from '../services/api';
import MovieDetail from './MovieDetail.jsx';
import './MovieCard.css';
import ReactCardFlip from 'react-card-flip';
const MovieCard = ({movie}) => {
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
    <ReactCardFlip isFlipped={click} flipDirection="horizontal">
    <div className="movie-card" onClick={handleClick} data-aos={!click&&"fade-up"} data-aos-offset="80">
     <h5>{movie.Title}</h5>
     <img src={movie.Poster}  />
     <p>{movie.Year}</p>
    </div>
    <div onClick={handleClick} className="back" >
    {click&&<MovieDetail details={details}></MovieDetail>}
    </div>
    </ReactCardFlip>
  );
};

export default MovieCard;