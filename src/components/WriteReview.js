import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./WriteReview.css";
import { Input, Textarea, Wrapper } from "./WriteReviewCss";
import { Col } from "antd";

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.review.title,
      text: this.props.review.text,
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { title, text } = this.state;

    const {
      isLogin,
      userInfo,
      review,
      movie,
      hadleNewReviewChange,
    } = this.props;

    if (isLogin) {
      if (!review.reviewId) {
        return (
          <div>
            <br />
            <br />
            <Wrapper>
              <div></div>
              <div>
                <div className="font-style">
                  <div className="movie-title1">
                    영화{" "}
                    <span className="movieName"> {`${review.movieName}`}</span>{" "}
                    리뷰 작성
                  </div>

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
                          console.log(res);
                          hadleNewReviewChange(res.data.reviewId);
                        })
                        .catch((err) => {
                          alert("Failed to submit your review");
                          console.log(err);
                        });
                    }}
                  >
                    <div className="title1">
                      작성자
                      <span className="text2">
                        &emsp;{`${userInfo.nickName}`}
                      </span>
                    </div>
                    <div className="title1">제목</div>
                    <Input
                      type="title"
                      onChange={this.handleInputValue("title")}
                    ></Input>

                    <div className="title1">내용</div>
                    <Textarea
                      type="text"
                      onChange={this.handleInputValue("text")}
                    ></Textarea>

                    <button className="btn hover1" type="submit">
                      작성
                    </button>
                  </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </Wrapper>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <br />
            <Wrapper>
              <div></div>
              <div>
                <div className="font-style">
                  <div className="movie-title1">
                    영화
                    <span className="movieName">{`${review.movieName}`} </span>
                    리뷰 작성
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log(review.reviewId);
                      return axios
                        .post(`http://54.180.63.153:5000/movie/writereview`, {
                          reviewId: review.reviewId,
                          title: title,
                          text: text,
                          userId: userInfo.id,
                          movieId: movie.movieId,
                          movieName: movie.movieName,
                        })
                        .then(() => {
                          hadleNewReviewChange(review.reviewId);
                        })
                        .catch((err) => {
                          alert("WriteReview failed");
                          console.log(err);
                        });
                    }}
                  >
                    <div className="title1">
                      작성자
                      <span className="text2">
                        &emsp;{`${userInfo.nickName}`}
                      </span>
                      <br />
                      <br />
                    </div>
                    <div className="title1">제목</div>

                    <Input
                      id="title"
                      type="title"
                      value={`${this.state.title}`}
                      onChange={this.handleInputValue("title")}
                    ></Input>
                    <br />
                    <br />
                    <div className="title1">내용</div>
                    <Textarea
                      id="text"
                      type="text"
                      value={`${this.state.text}`}
                      onChange={this.handleInputValue("text")}
                    ></Textarea>

                    <br />
                    <button className="btn hover1" type="submit">
                      작성
                    </button>
                  </form>
                </div>
                <div></div>
                <div></div>
              </div>
            </Wrapper>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        );
      }
    } else {
      return <div></div>;
    }
  }
}
WriteReview.propTypes = {
  history: PropTypes.object,
  isLogin: PropTypes.bool,
  userInfo: PropTypes.object,
  review: PropTypes.object,
  movie: PropTypes.object,
  hadleNewReviewChange: PropTypes.func,
};
export default withRouter(WriteReview);
