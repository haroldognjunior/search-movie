import _ from "lodash"; // Import lodash library
import React from "react";
import { Col, Row } from "react-grid-system";
import "../../styles/movieList.scss";
import MovieCard from "./movieCard";

/**
 * MovieList component displays a list of movies in a grid layout.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.visibility - Flag to control visibility.
 * @param {Array} props.movies - Array of movie data.
 * @param {Function} props.movieDetails - Callback to show movie details.
 * @returns {JSX.Element} MovieList component JSX.
 */
const MovieList = ({ visibility, movies, movieDetails }) => {
  const itemsPerRow = 3;

  // Chunk the movies into groups of 3 for grid layout.
  const movieCardRows = _.chunk(
    movies.map(movie => {
      return (
        <Col key={movie.id}>
          <MovieCard movieDetails={movieDetails} {...movie} />
        </Col>
      );
    }),
    itemsPerRow
  );

  // Determine the CSS class for visibility.
  const displayClass = visibility ? "show" : "hide";

  return (
    // Apply CSS class for visibility.
    <div className={`movieList-${displayClass}`}>
      {/* Map over the movieCardRows and create rows for the grid layout. */}
      {movieCardRows.map((row, rowNum) => (
        <Row key={rowNum}>{row}</Row>
      ))}
    </div>
  );
};

export default MovieList;
