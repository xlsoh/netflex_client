import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  go() {
    this.props.history.go(-1);
  }

  render() {
    const { isLogin, userInfo, review } = this.props;
    if (isLogin) {
      return (
        <div>
          <button
            style={{
              width: "100px",
              height: "30px",
              margin: "5px",
              borderRadius: "5px",
              backgroundColor: "ivory_gray",
            }}
            type="submit"
            onClick={this.go.bind(this)}
          >
            뒤로가기
          </button>
          <h1>영화{`${review.movieName}`}의 리뷰</h1>
          <div>
            {" "}
            <span>제목</span>
            <span>{`${review.title}`}</span>
          </div>
          <div>
            {" "}
            <span>작성자</span>
            <span>{`${review.nickName}`}</span>
            <span>작성날짜</span>
            <span>{`${review.created_at}`}</span>
            <span>조회수</span>
            <span>{`${review.views}`}</span>
            <span>좋아요수</span>
            <span>{`${review.totalLikes}`}</span>
            <span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  axios
                    .post(
                      `http://54.180.63.153:5000/movie/reviewinfo/${review.reviewId}`,
                      {
                        userId: userInfo.id,
                      }
                    )
                    .catch((err) => console.log(err));
                }}
              >
                <button
                  style={{
                    width: "100px",
                    height: "20px",
                    margin: "5px",
                    backgroundColor: "ivorygray",
                  }}
                  type="submit"
                >
                  좋아요
                </button>
              </form>
            </span>
          </div>
          <div>
            {" "}
            <div>내용</div>
            <div>{`${review.text}`}</div>
          </div>
        </div>
      );
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
Review.propTypes = {
  history: PropTypes.object,
  isLogin: PropTypes.bool,
  userInfo: PropTypes.object,
  review: PropTypes.object,
};
export default withRouter(Review);
