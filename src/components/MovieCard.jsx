import React, { useContext,useState } from 'react';
import { fetchMovieDetails } from '../services/api';
import MovieDetail from './MovieDetail.jsx';
import './MovieCard.css';
import ReactCardFlip from 'react-card-flip';
import FadeLoader from "react-spinners/FadeLoader";
const MovieCard = ({movie}) => {
  const [loading, setLoading] = useState(false);
  const[click,setClick]= useState(false);
  let[details,setDetails]=useState(null)
  const handleClick = async () => {
    if(click==false){
      setLoading(true);
    }
    setClick(!click);
      let detail = await fetchMovieDetails(movie.imdbID);
      setLoading(false);
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
    {loading&&<div className='loader'><p>Loading<FadeLoader

        color="white"
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></p></div>}
    {(click&&!loading)&&<MovieDetail details={details}></MovieDetail>}
    </div>
    </ReactCardFlip>
  );
};

export default MovieCard;