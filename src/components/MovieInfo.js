import React from "react";
import { withRouter } from "react-router-dom";
import MovieReviewList from "./MovieReviewList";
import { imageBaseUrl } from "./config";
import PropTypes from "prop-types";
import "./MovieInfo.css";

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
      <div className="Column">
        <div className="modal">
          <div className="modal-content">
            <div className="h1">{movieName}</div>
            <br />
            <div className="date">개봉일 : {release}</div>
            <div className="adult">
              {adult ? `청소년 관람불가` : `청소년 관람가능`}
            </div>
            <br />
            <div className="overview">{overview}</div>
            <br />
            <div className="reviewlistTitle">REVIEW</div>
            <MovieReviewList
              movieId={movieId}
              userInfo={userInfo}
              hadleReviewChangeByTitle={hadleReviewChangeByTitle}
            />
            <div
              className="reviewbtn"
              onClick={() => handleWriteReview(movie)}
            />
          </div>
          <img className="poster" src={`${imageBaseUrl}w500${img}`} />
        </div>
      </div>
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
  handleReviewChangeByTitle: PropTypes.func,
};

export default withRouter(MovieInfo);
