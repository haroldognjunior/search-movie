import lodash from "lodash";
import React from "react";
import { Col, Row } from "react-grid-system";
import { Rating } from "react-simple-star-rating";
import "../../styles/movieDetailsCard.scss";

/**
 * MovieDetailsCard component displays detailed information about a movie.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.collapseCard - Function to collapse the card.
 * @param {boolean} props.visibility - Flag to control card visibility.
 * @param {string} props.title - Movie title.
 * @param {string} props.tagline - Movie tagline.
 * @param {Array} props.genres - Array of movie genres.
 * @param {number} props.budget - Movie budget.
 * @param {number} props.revenue - Movie revenue.
 * @param {number} props.runtime - Movie runtime.
 * @param {string} props.poster_path - Movie poster path.
 * @param {string} props.backdrop_path - Movie backdrop path.
 * @param {string} props.overview - Movie overview.
 * @param {string} props.release_date - Movie release date.
 * @param {string} props.imdb_id - IMDb ID for the movie.
 * @returns {JSX.Element} MovieDetailsCard component JSX.
 */
const MovieDetailsCard = ({
  collapseCard,
  visibility,
  title,
  tagline,
  genres,
  runtime,
  backdrop_path,
  overview,
  vote_average,
}) => {
  // Determine the poster image URL
  const posterImg = backdrop_path
    ? `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
    : null;

  const posterStyle = {
    backgroundImage: posterImg,
  };

  if (visibility) {
    return (
      <Row>
        <Col>
          <div className="movie-details-card">
            <div style={posterStyle} className="movie-details-card-header" />
            <div className="movie-details-card-body">
              <h4 className="movie-details-card-body--title">
                {title} - {tagline}
              </h4>
              <ul className="movie-details-card-body-content">
                {genres && <li>Genre: {lodash.map(genres, "name").join(", ")}</li>}
                <li>
                  Average rating:{" "}
                  <Rating
                    initialValue={vote_average}
                    readonly
                    allowFraction={true}
                    iconsCount={10}
                    className="movie-details-card-body-rating"
                  />
                </li>
                {runtime && <li>Runtime: {runtime} minutes</li>}
              </ul>
              <div onClick={collapseCard} className="movie-details-card-body-content">
                {overview}
                <button className="movie-details-card-button-primary">Go Back</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  } else {
    return <div />;
  }
};

export default MovieDetailsCard;
