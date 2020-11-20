import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./Review.css";

const IP_ADDRESS = "127.0.0.1";
const axiosInstance = axios.create({
  withCredentials: true,
});

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: [] };
  }
  go() {
    this.props.history.go(-1);
  }

  componentDidMount() {
    this.props.handleIsRefresh().then(() => {
      const { userInfo, review, movie } = this.props;

      axiosInstance
        .post(`http://${IP_ADDRESS}:5000/movie/reviewinfo/${review.reviewId}`, {
          userId: userInfo.id,
        })
        .then((res) => {
          console.log(res);
        });
    });
  }

  render() {
    const { isLogin, userInfo, review, movie } = this.props;
    if (isLogin) {
      return (
        <div className="reviewContainer">
          <div className="reviewTitle">
            {`${review.nickName}`}님의 Review of {`${review.movieName}`}
          </div>
          <div className="reviewWrapper">
            <div className="countContainer">
              <div className="viewCount">조회수 : {`${review.views}`}</div>
              <div className="likeCount">
                좋아요수 : {`${review.totalLikes}`}
              </div>
            </div>
            <div className="titleContainer">
              <div className="reviewSubTitle">제목 : {`${review.title}`}</div>
              <div className="reviewLikebtn" onClick={this.likeClick} />
            </div>
            <div className="reviewText">내용 : {`${review.text}`}</div>
            <div className="reviewCreatedAt">{`${review.createdAt}`}</div>
          </div>
          <div>
            <span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  axios
                    .post(
                      `http://127.0.0.1:5000/movie/reviewinfo/${review.reviewId}`,
                      {
                        userId: userInfo.id,
                      }
                    )
                    .catch((err) => console.log(err));
                }}
              ></form>
            </span>
            <br />
            <br />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
Review.propTypes = {
  history: PropTypes.object,
  isLogin: PropTypes.bool,
  userInfo: PropTypes.object,
  review: PropTypes.object,
  movie: PropTypes.object,
  handleIsRefresh: PropTypes.func,
};
export default withRouter(Review);
