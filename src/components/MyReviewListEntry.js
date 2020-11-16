import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import PropTypes, { string } from "prop-types";

class MyReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelClick = this.handleDelClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleDelClick = () => {
    const { reviewId } = this.props;
    axios
      .post("http://localhost:5000/movie/deletereview", {
        reviewId: reviewId,
      })
      .then((res) => {
        this.props.history.push("/user/mypage");
      })
      .catch((err) => console.log(err));
  };
  handleEditClick = () => {
    const { reviewId, hadleReviewChange } = this.props;
    axios
      .get(`http://localhost:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        hadleReviewChange();
        this.props.history.push(`/movie/movieId/review/reviewId`);
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { title } = this.props;
    return (
      <div>
        <Link to={`/movie/movieId/review/reviewId`}>{`${title}`}</Link>
        <button onClick={this.handleEditClick}>수정</button>
        <button onClick={this.handleDelClick}>삭제</button>
      </div>
    );
  }
}
MyReviewListEntry.propTypes = {
  history: PropTypes.object,
  reviewId: PropTypes.number,
  title: string,
  hadleReviewChange: PropTypes.func,
};

export default withRouter(MyReviewListEntry);
