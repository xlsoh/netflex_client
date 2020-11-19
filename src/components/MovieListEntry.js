import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./MovieList.css";

function MovieListEntry(props) {
  return (
    <>
      <div className="movies" onClick={props.onClick}>
        <img className="movie" src={props.image} alt={props.movieName} />
      </div>
    </>
  );
}

MovieListEntry.propTypes = {
  movieId: PropTypes.number,
  image: PropTypes.string,
  movieName: PropTypes.string,
  onClick: PropTypes.func,
};

export default withRouter(MovieListEntry);

//
