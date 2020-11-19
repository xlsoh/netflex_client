import React from "react";
import { withRouter, Link, Route } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const IP_ADDRESS = "54.180.63.153";

class MyReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }
  handleTitleClick = () => {
    const { review, hadleReviewChangeByTitle } = this.props;
    axios
      .get(`http://${IP_ADDRESS}:5000/movie/reviewinfo/${review.reviewId}`)
      .then((res) => {
        hadleReviewChangeByTitle(res.data);
      })
      .catch((err) => console.log(err));
  };
  handleDelClick = () => {
    const { review } = this.props;
    axios
      .post(`http://${IP_ADDRESS}:5000/movie/deletereview`, {
        reviewId: review.reviewId,
      })
      .then(() => {
        this.props.history.go(0);
      })
      .catch((err) => console.log(err));
  };
  handleEditClick = () => {
    const { review, hadleReviewChangeByEdit } = this.props;
    axios
      .get(`http://${IP_ADDRESS}:5000/movie/reviewinfo/${review.reviewId}`)
      .then((res) => {
        hadleReviewChangeByEdit(res.data);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <a onClick={this.handleTitleClick}>{title}</a>
        <button onClick={this.handleEditClick}>수정</button>
        <button onClick={this.handleDelClick}>삭제</button>
      </div>
    );
  }
}
MyReviewListEntry.propTypes = {
  history: PropTypes.object,
  review: PropTypes.object,
  title: PropTypes.string,
  hadleReviewChangeByEdit: PropTypes.func,
  hadleReviewChangeByTitle: PropTypes.func,
};
export default withRouter(MyReviewListEntry);


