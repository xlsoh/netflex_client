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
    const { id } = this.props;
    axios
      .post("http://localhost:5000/movie/deletereview", {
        reviewId: id,
      })
      .then((res) => {
        this.props.history.push("/user/mypage");
      })
      .catch((err) => console.log(err));
  };
  handleEditClick = () => {
    const { id, hadleReviewChange } = this.props;
    axios
      .get("http://localhost:5000//movie/reviewinfo", {
        params: { reviewId: id },
      })
      .then((res) => {
        hadleReviewChange();
        this.props.history.push("/movie/movie_id/review");
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { id, title, hadleReviewChange } = this.props;
    return (
      <div>
        <Link to="/movie/movie_id/review">{`${title}`}</Link>
        <button onClick={this.handleEditClick}>수정</button>
        <button onClick={this.handleDelClick}>삭제</button>
      </div>
    );
  }
}
MyReviewListEntry.propTypes = {
  history: PropTypes.object,
  id: PropTypes.number,
  title: string,
  hadleReviewChange: PropTypes.func,
};

export default withRouter(MyReviewListEntry);
