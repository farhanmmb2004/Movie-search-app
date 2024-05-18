import axios from 'axios';

const API_KEY = 'f0e2f37c'; 
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}`);
    // console.log(response.data);
    return response.data.Search|| [];
  } catch (error) {
    alert('Error fetching movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${id}`);
    return response.data;
  } catch (error) {
    alert('Error fetching movie details:', error);
    return null;
  }
};