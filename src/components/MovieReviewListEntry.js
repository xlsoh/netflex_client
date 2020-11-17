import React from "react";
import { withRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class MovieReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.likeClick = this.likeClick.bind(this);
  }
  likeClick = () => {
    const { reviewId, userInfo } = this.props;
    axios.post(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`),
      {
        userId: userInfo.id,
      };
  };

  render() {
    const { reviewId, movieId, title } = this.props;
    return (
      <div>
        <Link to={`/movie/${movieId}/review/${reviewId}`}>{`${title}`}</Link>
        <button onClick={this.likeClick}>좋아요</button>
      </div>
    );
  }
}
MovieReviewListEntry.propTypes = {
  reviewId: PropTypes.number,
  title: PropTypes.string,
  userInfo: PropTypes.object,
  movieId: PropTypes.number,
};

export default withRouter(MovieReviewListEntry);
