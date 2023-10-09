import React from "react";
import { Row } from "react-grid-system";
import MovieIcon from "../../assets/svg/movieIcon";
import "../../styles/header.scss";

const Header = ({ viewMostPopular }) => {
  return (
    <Row className="header">
      <MovieIcon />
      {/* Quicklink to view most popular movies */}
      <span
        className="quickLink"
        onClick={() => {
          viewMostPopular();
        }}
      >
        Most Popular
      </span>
    </Row>
  );
};

export default Header;
