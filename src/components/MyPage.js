import React from "react";
import { withRouter, Link } from "react-router-dom";
import MyReviewList from "./MyReviewList";
import axios from "axios";
import PropTypes from "prop-types";
import './MyPage.css'


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
        <>
        <div className="myInfoZone">
          <div className="myInfoCont">
            <h1>Info</h1>
            <br/>
            <div>
              <span className='InfoCont'>{`이메일 `}</span>
              <span>{`${userInfo.email}`}</span>
            </div>
            <div>
              <span className='InfoCont'>{`이름   `}</span>
              <span>{`${userInfo.nickName}`}</span>s
            </div>
          </div>
          
          <div className="myReviewZone">
            <h1>Review</h1>
            <br/>
            <MyReviewList
              myReview={myReview}
              hadleReviewChangeByTitle={hadleReviewChangeByTitle}
              hadleReviewChangeByEdit={hadleReviewChangeByEdit}
            />
          </div>
        </div>
        </>
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

//
