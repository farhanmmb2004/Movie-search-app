
import axios from 'axios';

const API_KEY = 'f0e2f37c'; 
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}&s=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error.message);
    return [];
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}&i=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    return null;
  }
};
