import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import "./WriteReview.css";
import { Input, Textarea, Button } from "./WriteReviewCss";
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
            <div id='header-push'></div>
            <div className='global-content'>
              <h1 className='title'>영화 {`${movie.movieName}`} 리뷰 작성</h1>
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
                <div>
                  {" "}
                  <span className='text'>작성자</span>
                  <span className='text1'>{`${userInfo.nickName}`}</span>
                </div>
                <div className='text'>
                  {" "}
                  제목
                  <Input
                    type='title'
                    placeholder='제목'
                    onChange={this.handleInputValue("title")}
                  ></Input>
                </div>
                <div className='text'>
                  {" "}
                  내용
                  <Textarea
                    type='text'
                    placeholder='내용'
                    onChange={this.handleInputValue("text")}
                  ></Textarea>
                </div>
                <button className='btn hover1' type='submit'>
                  작성
                </button>
              </form>
            </div>
            <div id='footer-push'></div>
            <div id='dark-area'></div>
          </div>
        );
      } else {
        return (
          <div>
            <div id='header-push'></div>
            <div className='global-content'>
              <h1 className='title'>영화 {`${review.movieName}`} 리뷰 작성</h1>
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
                <div>
                  {" "}
                  <span className='text'>작성자</span>
                  <span className='text1'>{`${userInfo.nickName}`}</span>
                </div>
                <div className='text'>
                  {" "}
                  제목
                  <Input
                    id='title'
                    type='title'
                    value={`${this.state.title}`}
                    onChange={this.handleInputValue("title")}
                  ></Input>
                </div>
                <div className='text'>
                  {" "}
                  내용
                  <Textarea
                    id='text'
                    type='text'
                    value={`${this.state.text}`}
                    onChange={this.handleInputValue("text")}
                  ></Textarea>
                </div>
                <button className='btn hover1' type='submit'>
                  작성
                </button>
              </form>
            </div>
            <div id='footer-push'></div>
            <div id='dark-area'></div>
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
  hadleNewReviewChange: PropTypes.func,
};
export default withRouter(WriteReview);
