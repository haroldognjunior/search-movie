import React from "react";
import "../../styles/movieCard.scss";

/**
 * MovieCard component displays a movie card with details.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.movieDetails - Function to show movie details.
 * @param {string} props.id - Movie ID.
 * @param {string} props.poster_path - Movie poster path.
 * @param {string} props.title - Movie title.
 * @param {string} props.overview - Movie overview.
 * @param {string} props.release_date - Movie release date.
 * @returns {JSX.Element} MovieCard component JSX.
 */
const MovieCard = props => {
  const { movieDetails, id } = props;

  return (
    <div className="card" onClick={() => movieDetails(id)}>
      <MovieCardHeader {...props} />
      <MovieCardBody {...props} />
    </div>
  );
};

export default MovieCard;

/**
 * MovieCardHeader component displays the movie card's header with the poster.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.poster_path - Movie poster path.
 * @returns {JSX.Element} MovieCardHeader component JSX.
 */
const MovieCardHeader = ({ poster_path }) => {
  // Generate the poster image URL.
  const posterImg = poster_path ? `url(https://image.tmdb.org/t/p/w400${poster_path})` : null;

  const style = {
    backgroundImage: posterImg,
  };

  return <header style={style} className="card-header" />;
};

/**
 * MovieCardBody component displays the movie card's body with title, date, and overview.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.title - Movie title.
 * @param {string} props.overview - Movie overview.
 * @param {string} props.release_date - Movie release date.
 * @returns {JSX.Element} MovieCardBody component JSX.
 */
const MovieCardBody = ({ title, overview, release_date }) => {
  return (
    <div className="card-body">
      <h4 className="card-body--title">{title}</h4>
      <p className="date">Released: {release_date}</p>

      <p className="body-content">
        {overview.length > 200 ? overview.substring(0, 200) + "...(click for more)" : overview}
      </p>
    </div>
  );
};
