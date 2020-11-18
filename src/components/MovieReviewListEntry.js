import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class MovieReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.likeClick = this.likeClick.bind(this);
  }

  handleTitleClick = () => {
    const { movieId, reviewId, hadleReviewChangeByTitle } = this.props;
    axios
      .get(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        hadleReviewChangeByTitle(res.data);
      })
      .catch((err) => console.log(err));
  };
  likeClick = () => {
    const { reviewId, userInfo } = this.props;
    axios.post(`http://54.180.63.153:5000/movie/reviewinfo/${reviewId}`, {
      userId: userInfo.id,
    });
  };

  render() {
    const { title } = this.props;
    return (
      <div>
        {<a onClick={this.handleTitleClick}>{title}</a>}
        <button onClick={this.likeClick}>좋아요</button>
      </div>
    );
  }
}
MovieReviewListEntry.propTypes = {
  history: PropTypes.object,
  reviewId: PropTypes.number,
  title: PropTypes.string,
  userInfo: PropTypes.object,
  movieId: PropTypes.number,
  hadleReviewChangeByTitle: PropTypes.func,
};

export default withRouter(MovieReviewListEntry);
