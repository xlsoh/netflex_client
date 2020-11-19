import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./MovieInfo.css";

const IP_ADDRESS = "54.180.63.153";

class MovieReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.likeClick = this.likeClick.bind(this);
  }
  handleTitleClick = () => {
    const { movieId, reviewId, hadleReviewChangeByTitle } = this.props;
    axios
      .get(`http://${IP_ADDRESS}:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        hadleReviewChangeByTitle(res.data);
      })
      .catch((err) => console.log(err));
  };
  likeClick = () => {
    const { reviewId, userInfo } = this.props;
    axios.post(`http://${IP_ADDRESS}:5000/movie/reviewinfo/${reviewId}`, {
      userId: userInfo.id,
    });
  };
  render() {
    const { title, reviewId } = this.props;


    return (
      <div className="reviewContainer">
        <a className="review" onClick={this.handleTitleClick}>
          ID : {reviewId} 제목 : {title}
        </a>
        <div className="likebtn" onClick={this.likeClick} />

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
