import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import MyReviewList from './MyReviewList';
import axios from 'axios';
import PropTypes from 'prop-types';

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myReview: [],
    };
  }

  componentDidMount() {
    const { userInfo } = this.props;
    axios
      .get(`http://localhost:5000/movie/reviews/${userInfo.userId}`)
      .then((res) => this.setState({ myReview: res.results }));
  };

  render() {
    const { myReview } = this.state;
    const { isLogin, userInfo, hadleReviewChange } = this.props;
    if (isLogin) {
      return (
        <div className='myInfoZone'>
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
              <span>{`${userInfo.nickName}`}</span>
            </div>
          </div>
          <hr color='black' size='10px'></hr>
          <div className='myReviewZone'>
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
  hadleReviewChange: PropTypes.func,
};
export default withRouter(MyPage);
