import React from "react";
import { withRouter } from "react-router-dom";
import MovieReviewList from "./MovieReviewList";
import { imageBaseUrl } from "./config";
import PropTypes from "prop-types";

function MovieInfo({
  adult,
  containerName,
  movieId,
  movieName,
  overview,
  show,
  img,
  onClick,
  release,
  handleWriteReview,
  hadleReviewChangeByTitle,
  userInfo,
}) {
  const movie = { movieId: movieId, movieName: movieName };
  return show ? (
    <div className={containerName} onClick={onClick}>
      <div className="modal">
        <img src={`${imageBaseUrl}w500${img}`} alt="bg" />
        <div className="bg"></div>
        <div className="modal-content">
          <h1>{movieName}</h1>
          <div>{release}</div>
          <div>{adult ? `청소년 관람불가` : `청소년 관람가능`}</div>
          <p>{overview}</p>
        </div>
      </div>
      <MovieReviewList
        movieId={movieId}
        userInfo={userInfo}
        hadleReviewChangeByTitle={hadleReviewChangeByTitle}
      />
      <button onClick={() => handleWriteReview(movie)}>내 리뷰 쓰기</button>
    </div>
  ) : null;
}
MovieInfo.propTypes = {
  containerName: PropTypes.string,
  movieId: PropTypes.number,
  image: PropTypes.string,
  movieName: PropTypes.string,
  overview: PropTypes.string,
  show: PropTypes.bool,
  img: PropTypes.string,
  onClick: PropTypes.func,
  release: PropTypes.string,
  adult: PropTypes.bool,
  props: PropTypes.object,
  handleWriteReview: PropTypes.func,
  hadleReviewChangeByTitle: PropTypes.func,
  userInfo: PropTypes.object,
  handleReviewChangeByTitle: PropTypes.func
};

export default withRouter(MovieInfo);
