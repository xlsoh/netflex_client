import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./Review.css";
import { Wrapper } from "./ReviewCss";

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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="font-style">
            <div>
              <div className="movie-title">
                영화{" "}
                <span className="movieName"> {`${review.movieName}`} </span>의
                리뷰
              </div>
              <Wrapper>
                <div>
                  <div>
                    {" "}
                    <span className="title">제목</span>
                    <span className="text">{`${review.title}`}</span>
                    <br />
                    <br />
                  </div>
                  <div>
                    {" "}
                    <span className="title">작성자</span>
                    <span className="text">{`${review.nickName}`}</span>
                    <span className="title">&emsp;&emsp;작성날짜</span>
                    <span className="text">{`${review.createdAt}`}</span>
                    <span className="title">&emsp;&emsp; 조회수</span>
                    <span className="text">{`${review.views}`}</span>
                    <span className="title">&emsp;&emsp;좋아요수</span>
                    <span className="text">{`${review.totalLikes}`}</span>
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
                        <button className="btn-like" type="submit">
                          좋아요버튼
                        </button>
                      </form>
                    </span>
                    <br />
                    <br />
                  </div>
                  <div>
                    {" "}
                    <div className="title">내용</div>
                    <br />
                    <div className="text1">{`${review.text}`}</div>
                  </div>
                </div>
              </Wrapper>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
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
};
export default withRouter(Review);



