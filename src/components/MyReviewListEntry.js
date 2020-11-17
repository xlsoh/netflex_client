import React from "react";
import { withRouter, Link, Route } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

class MyReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleTitleClick = () => {
    const { movie, reviewId } = this.props;
    axios
      .get(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        this.props.history.push(
          `/movie/${movie.movieId}/review/${res.data.reviewId}`
        );
      })
      .catch((err) => console.log(err));
  };

  handleDelClick = () => {
    const { reviewId } = this.props;
    axios
      .post(`http://54.180.63.153:5000/movie/deletereview`, {
        reviewId: reviewId,
      })
      .then(() => {
        this.props.history.push(`/user/mypage`);
      })
      .catch((err) => console.log(err));
  };
  handleEditClick = () => {
    const { reviewId, movie, hadleReviewChange } = this.props;
    axios
      .get(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        hadleReviewChange(res.data.reviewId);
        this.props.history.push(`/movie/${movie.movieId}/writeReview`);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { title, movie, reviewId } = this.props;
    console.log(title, reviewId, movie);
    return (
      <div>
        <Link to={`/movie/${movie.movieId}/review/${reviewId}`}>{title}</Link>
        <button onClick={this.handleEditClick}>수정</button>
        <button onClick={this.handleDelClick}>삭제</button>
      </div>
    );
  }
}
MyReviewListEntry.propTypes = {
  history: PropTypes.object,
  reviewId: PropTypes.number,
  title: PropTypes.string,
  movie: PropTypes.object,
  hadleReviewChange: PropTypes.func,
};

export default withRouter(MyReviewListEntry);
