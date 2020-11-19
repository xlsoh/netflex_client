import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import "./Review.css";

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
          <div id="header-push">
            <button
              className="btn1"
              type="submit"
              onClick={this.go.bind(this)}
            ></button>
            <br />
            <br />
            <br />
          </div>
          <div className="global-content">
            <div className="title">영화{`${review.movieName}`}의 리뷰</div>

            <div className="c">
              <div>
                {" "}
                <span className="text">제목</span>
                <span className="text1">{`${review.title}`}</span>
              </div>
              <div>
                {" "}
                <span className="text">작성자</span>
                <span className="text1">{`${review.nickName}`}</span>
                <span className="text">작성날짜</span>
                <span className="text1">{`${review.createdAt}`}</span>
                <span className="text_">조회수</span>
                <span className="text1_">{`${review.views}`}</span>
                <span className="text_">좋아요수</span>
                <span className="text1_">{`${review.totalLikes}`}</span>
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
                    <button type="submit">좋아요</button>
                  </form>
                </span>
              </div>
              <div>
                {" "}
                <div className="text">내용</div>
                <div className="text1">{`${review.text}`}</div>
              </div>
            </div>
          </div>
          <div id="footer-push"></div>
          <div id="dark-area"></div>
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
