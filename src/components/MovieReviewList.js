import React from "react";
import { Route ,withRouter, Link, Router } from "react-router-dom";
import MovieReviewListEntry from "./MovieReviewListEntry";
import PropTypes from "prop-types";
import axios from "axios";
import Review from "./Review";
import WriteReview from "./WriteReview"

class MovieReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] , reviewId: 0};
    this.handleGo = this.handleGo.bind(this)
  }
  componentDidMount() {
    const { userInfo, movieId, hadleReviewChangeByTitle } = this.props;
    axios.get(`http://54.180.63.153:5000/movie/${movieId}`).then(
      (res) => this.setState({ reviews: res.data.results }),
      () => {
        console.log(this.state.reviews);
      }
    );
  }


  handleGo = () =>{
    this.props.history.push(`/movie/reviewinfo/${this.state.reviewId}`)
  } 

  render() {
    const { reviews } = this.state;
    const { userInfo, movieId, hadleReviewChangeByTitle } = this.props;

    return !reviews ? (
      <div></div>
    ) : (
      <ul className="movieReview">
        {reviews &&
          reviews.map((review, index) => (
            <React.Fragment key={index}>
              <MovieReviewListEntry
                reviewId={review.reviewId}
                title={review.title}
                movieId={movieId}
                userInfo={userInfo}
                hadleReviewChangeByTitle={hadleReviewChangeByTitle}
              />
            </React.Fragment>
          ))}
      </ul>
    );
  }
}

MovieReviewList.propTypes = {
  movieId: PropTypes.number,
  userInfo: PropTypes.object,

  hadleReviewChangeByTitle: PropTypes.func,
};
export default withRouter(MovieReviewList);


