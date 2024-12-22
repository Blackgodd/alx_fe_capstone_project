import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${API_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data.Search;
  } catch (error) {
    console.error("Error fetching movies", error);
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details", error);
  }
};
