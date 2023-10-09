import React, { Component } from "react";
import { Col, Container, Row } from "react-grid-system";
import Swal from "sweetalert2";
import Header from "../components/header/header";
import MovieDetailsCard from "../components/movies/movieDetailsCard";
import MovieList from "../components/movies/movieList";
import SearchBar from "../components/search/searchBar";
import { getMostPopular, getMovieDetails, search } from "../services/movies.service";

class Home extends Component {
  constructor(props) {
    super(props);

    // Bind event handling methods to the component instance.
    this.searchMovies = this.searchMovies.bind(this);
    this.movieDetails = this.movieDetails.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.collapseCard = this.collapseCard.bind(this);

    // Initialize component state.
    this.state = {
      focusedMovie: {},
      movieHasFocus: false,
      movieSearchTerm: "",
      mostPopularMovies: [],
      movies: [],
    };
  }

  // Handle input change in the search bar.
  handleSearchInputChange(event) {
    this.setState({ movieSearchTerm: event.target.value });
  }

  // Collapse the focused movie card.
  collapseCard() {
    this.setState({ movieHasFocus: false, focusedMovie: {} });
  }
  componentDidMount() {
    // Fetch most popular movies when the component mounts.
    getMostPopular()
      .then(response => {
        this.setState({
          mostPopularMovies: response.data,
          movies: response.data,
        });
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error fetching most popular movies: ${error}`,
        });
      });
  }

  // // Reset view to most popular movies.
  viewMostPopular = () => {
    this.setState({
      movieHasFocus: false,
      focusedMovie: {},
      movieSearchTerm: "",
      movies: this.state.mostPopularMovies,
    });
  };

  // Search for movies based on the user's input.
  searchMovies(e) {
    e.preventDefault();
    search(this.state.movieSearchTerm)
      .then(response => {
        this.setState({
          focusedMovie: {},
          movieHasFocus: false,
          movies: response.data,
        });
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error searching for movies: ${error}`,
        });
      });
  }

  // Fetch and display details of a selected movie.
  movieDetails(movieId) {
    getMovieDetails(movieId)
      .then(response => {
        this.setState({ movieHasFocus: true, focusedMovie: response.data });
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Error fetching movie details: ${error}`,
        });
      });
  }

  render() {
    const { movieHasFocus, movieSearchTerm, movies, focusedMovie } = this.state;
    return (
      <Container>
        <Row>
          <Col md={2}>
            <Header viewMostPopular={this.viewMostPopular} />
          </Col>
          <Col md={10}>
            <SearchBar
              restoreDefaultView={this.restoreDefaultView}
              searchMovies={this.searchMovies}
              handleSearchInputChange={this.handleSearchInputChange}
              movieSearchTerm={movieSearchTerm}
            />
          </Col>
        </Row>
        <MovieDetailsCard
          collapseCard={this.collapseCard}
          visibility={movieHasFocus}
          {...focusedMovie}
        />
        <MovieList movies={movies} visibility={!movieHasFocus} movieDetails={this.movieDetails} />
      </Container>
    );
  }
}

export default Home;
