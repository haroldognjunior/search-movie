import React from "react";
import { Col, Row } from "react-grid-system";
import "../../styles/searchBar.scss";
/**
 * SearchBar component displays a search input for movie search.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.restoreDefaultView - Function to restore the default view.
 * @param {string} props.movieSearchTerm - Movie search term.
 * @param {Function} props.searchMovies - Function to initiate movie search.
 * @param {Function} props.handleSearchInputChange - Function to handle search input change.
 * @returns {JSX.Element} SearchBar component JSX.
 */
const SearchBar = ({
  restoreDefaultView,
  movieSearchTerm,
  searchMovies,
  handleSearchInputChange,
}) => {
  return (
    <Row className="warp">
      <Col>
        <form
          className="search"
          onSubmit={e => {
            e.preventDefault(); // Prevent form submission.
            searchMovies(e);
          }}
        >
          <input
            className="searchTerm"
            type="text"
            placeholder="Search for a film..."
            value={movieSearchTerm}
            onChange={e => handleSearchInputChange(e)}
          />
        </form>
      </Col>
    </Row>
  );
};

export default SearchBar;
