import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class MovieReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.likeClick = this.likeClick.bind(this);
  }

  handleTitleClick = () => {
    const { movieId, reviewId } = this.props;
    axios
      .get(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        this.props.history.push(`/movie/${movieId}/review/${reviewId}`);
      })
      .catch((err) => console.log(err));
  };
  likeClick = () => {
    const { reviewId, userInfo } = this.props;
    console.log(typeof userInfo.id);
    axios.post(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`, {
      userId: userInfo.id,
    });
  };

  render() {
    const { userInfo, reviewId, movieId, title } = this.props;
    console.log(userInfo);
    return (
      <li key={movieId}>
        <Link to={`/movie/${movieId}/review/${reviewId}`}>{title}</Link>
        {/* <a onClick={this.handleTitleClick}>{title}</a> */}
        <button onClick={this.likeClick}>좋아요</button>
      </li>
    );
  }
}
MovieReviewListEntry.propTypes = {
  history: PropTypes.object,
  reviewId: PropTypes.number,
  title: PropTypes.string,
  userInfo: PropTypes.object,
  movieId: PropTypes.number,
};

export default withRouter(MovieReviewListEntry);
