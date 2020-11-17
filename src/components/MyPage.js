import React from "react";
import { withRouter, Link } from "react-router-dom";
import MyReviewList from "./MyReviewList";
import axios from "axios";
import PropTypes from "prop-types";

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myReview: [],
    };
  }

  componentDidMount() {
    const { userInfo, handleCleanReview } = this.props;
    axios
      .get(`http://54.180.63.153:5000/movie/reviews/${userInfo.id}`)
      .then((res) => this.setState({ myReview: res.data.results }))
      .then(() => {
        handleCleanReview();
      });
  }

  render() {
    const { myReview } = this.state;
    const {
      isLogin,
      userInfo,
      hadleReviewChangeByTitle,
      hadleReviewChangeByEdit,
    } = this.props;
    if (isLogin) {
      return (
        <div className="myInfoZone">
          <div>
            <h1>내 정보</h1>
            <div>
              {" "}
              <span>Email</span>
              <span>{`${userInfo.email}`}</span>
            </div>
            <div>
              {" "}
              <span>닉네임</span>
              <span>{`${userInfo.nickName}`}</span>s
            </div>
          </div>
          <hr color="black" size="10px"></hr>
          <div className="myReviewZone">
            <h2>내가 쓴 리뷰</h2>
            <MyReviewList
              myReview={myReview}
              hadleReviewChangeByTitle={hadleReviewChangeByTitle}
              hadleReviewChangeByEdit={hadleReviewChangeByEdit}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>로그인이 되지 않았습니다</h1>
          <Link to={`/user/signin`}>로그인 하시겠습니까?</Link>
        </div>
      );
    }
  }
}
MyPage.propTypes = {
  history: PropTypes.object,
  userInfo: PropTypes.object,
  isLogin: PropTypes.bool,
  handleCleanReview: PropTypes.func,
  hadleReviewChangeByEdit: PropTypes.func,
  hadleReviewChangeByTitle: PropTypes.func,
};
export default withRouter(MyPage);
