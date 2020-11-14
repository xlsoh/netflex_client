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
      // myReview:[{reviewId: 1, title:""},{reviewId: 2, title:""}] 배열이다!
    };
    this.handleReviewData = this.handleReviewData.bind(this);
  }
  handleReviewData = () => {
    const { userInfo } = this.props;
    axios
      .get("http://localhost:5000/mypage/reviews", {
        params: { userId: userInfo.id },
      })
      .then((res) => this.setState({ myReview: res }));
  };

  render() {
    this.handleReviewData();
    const { myReview } = this.state;
    const { isLogin, userInfo, hadleReviewChange } = this.props;
    if (!isLogin) {
      return (
        <div className="myInfoZone">
          <div>
            <h1>내 정보</h1>
            <div>
              {" "}
              <span>Email</span>
              <span>{`${userInfo /*.email 주석을제거해주세요*/}`}</span>
            </div>
            <div>
              {" "}
              <span>닉네임</span>
              <span>{`${userInfo /*.nickName 주석을제거해주세요*/}`}</span>
            </div>
          </div>
          <hr color="black" size="10px"></hr>
          <div className="myReviewZone">
            <h2>내가 쓴 리뷰</h2>
            <MyReviewList
              myReview={myReview}
              hadleReviewChange={hadleReviewChange}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>로그인이 되지 않았습니다</h1>
          <Link to="/user/signin">로그인 하시겠습니까?</Link>
        </div>
      );
    }
  }
}
MyPage.propTypes = {
  history: PropTypes.object,
  userInfo: PropTypes.object,
  isLogin: PropTypes.bool,
  hadleReviewChange: PropTypes.func,
};
export default withRouter(MyPage);
