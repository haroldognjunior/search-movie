import axios from "axios";

// Base URL for the movies API
const moviesDb = "https://search-movie-api.onrender.com/movies";

// Function to fetch the most popular movies
export const getMostPopular = () => {
  // Send a GET request to the most popular movies endpoint
  return axios.get(`${moviesDb}/most_popular`);
};

// Function to search for movies by title
export const search = movieSearchTerm => {
  // Send a GET request to the search endpoint with the movie title as a parameter
  return axios.get(`${moviesDb}/search`, {
    params: {
      title: movieSearchTerm,
    },
  });
};

// Function to get details for a specific movie by its ID
export const getMovieDetails = movieId => {
  // Send a GET request to the movie details endpoint with the movie ID as a parameter
  return axios.get(`${moviesDb}/movies/${movieId}`);
};
