import React from "react";
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
      .get(`http://54.180.63.153:5000/movie/${movieId}`)
      .then((res) => this.setState({ review: res }));
  };

  render() {
    this.handleReviewData();
    const { reviews } = this.state;
    const { userInfo, movieId } = this.props;
    return (
      <div className="movieReview">
        {reviews &&
          reviews.map((review, index) => (
            <React.Fragment key={index}>
              <MovieReviewListEntry
                reviewId={review.reviewId}
                title={review.title}
                movieId={movieId}
                userInfo={userInfo}
              />
            </React.Fragment>
          ))}
      </div>
    );
  }
}

MovieReviewList.propTypes = {
  movieId: PropTypes.number,
  userInfo: PropTypes.object,
};
export default withRouter(MovieReviewList);
