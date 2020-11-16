import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MovieReviewListEntry from "./MovieReviewListEntry";
import PropTypes from "prop-types";
import axios from "axios";

class MovieReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
    this.handleReviewData = this.handleReviewData.bind(this);
  }

  handleReviewData = () => {
    const { movieId } = this.props;
    axios
      .get(`http://localhost:5000/movie/${movieId}`)
      .then((res) => this.setState({ review: res }));
  };

  render() {
    this.handleReviewData();
    const { reviews } = this.state;
    return (
      <div className="movieReview">
        {reviews &&
          reviews.map((review, index) => (
            <React.Fragment key={index}>
              <MovieReviewListEntry
                reviewId={reviews.reviewId}
                title={reviews.title}
              />
            </React.Fragment>
          ))}
      </div>
    );
  }
}

MovieReviewList.propTypes = {
  movieId: PropTypes.number,
};
export default withRouter(MovieReviewList);
