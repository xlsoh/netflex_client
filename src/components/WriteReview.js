import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { title, text } = this.state;
    const { isLogin, userInfo, review, movie, hadleReviewChange } = this.props;
    if (isLogin) {
      if (!review.id) {
        return (
          <div>
            <h1>영화 {`${movie.movieName}`} 리뷰 작성</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                return axios
                  .post(`http://54.180.63.153:5000/movie/writereview`, {
                    title: title,
                    text: text,
                    userId: userInfo.id,
                    movieId: movie.movieId,
                    movieName: movie.movieName,
                  })
                  .then((res) => {
                    hadleReviewChange(res.reviewId);
                    this.props.history.push(
                      `/movie/${movie.movieId}/review/${res.reviewId}`
                    );
                  })
                  .catch((err) => {
                    alert("Failed to submit your review");
                    console.log(err);
                  });
              }}
            >
              <div>
                {" "}
                <span>작성자</span>
                <span>{`${userInfo.nickName}`}</span>
              </div>
              <div>
                {" "}
                제목
                <input
                  style={{
                    width: "300px",
                    height: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type="title"
                  placeholder="제목"
                  onChange={this.handleInputValue("title")}
                ></input>
              </div>
              <div>
                {" "}
                내용
                <textarea
                  style={{
                    width: "300px",
                    height: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type="text"
                  placeholder="내용"
                  onChange={this.handleInputValue("text")}
                ></textarea>
              </div>
              <button
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "5px",
                  backgroundColor: "ivory",
                }}
                type="submit"
              >
                작성
              </button>
            </form>
          </div>
        );
      } else {
        return (
          <div>
            <h1>영화 {`${review.movieName}`} 리뷰 작성</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                return axios
                  .post(`http://54.180.63.153:5000/movie/writereview`, {
                    id: review.reviewId,
                    title: title,
                    text: text,
                    userId: userInfo.id,
                    movieId: movie.movieId,
                    movieName: movie.movieName,
                  })
                  .then((res) => {
                    hadleReviewChange(res.reviewId);
                    this.props.history.push(
                      `/movie/${movie.movieId}/review/${res.reviewId}`
                    );
                  })
                  .catch((err) => {
                    alert("WriteReview failed");
                    console.log(err);
                  });
              }}
            >
              <div>
                {" "}
                <span>작성자</span>
                <span>{`${userInfo.nickName}`}</span>
              </div>
              <div>
                {" "}
                제목
                <input
                  id="title"
                  style={{
                    width: "300px",
                    height: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type="title"
                  value={`${review.title}`}
                  onChange={this.handleInputValue("title")}
                ></input>
              </div>
              <div>
                {" "}
                내용
                <textarea
                  id="text"
                  style={{
                    width: "300px",
                    height: "30px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type="text"
                  value={`${review.text}`}
                  onChange={this.handleInputValue("text")}
                ></textarea>
              </div>
              <button
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "5px",
                  backgroundColor: "ivory",
                }}
                type="submit"
              >
                작성
              </button>
            </form>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h2>로그인 후 이용해주세요.</h2>
          <Link to={`/user/signin`}>로그인 하시겠습니까?</Link>
        </div>
      );
    }
  }
}
WriteReview.propTypes = {
  history: PropTypes.object,
  isLogin: PropTypes.bool,
  userInfo: PropTypes.object,
  review: PropTypes.object,
  movie: PropTypes.object,
  hadleReviewChange: PropTypes.func,
};
export default withRouter(WriteReview);
