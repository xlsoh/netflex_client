import React from "react";
import { withRouter } from "react-router-dom";
import MyReviewList from "./MyReviewList";
import axios from "axios";
import PropTypes from "prop-types";

const IP_ADDRESS = "54.180.63.153";
const axiosInstance = axios.create({
  withCredentials: true,
});

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myReview: [],
    };
  }

  componentDidMount() {
    this.props.handleIsRefresh().then(() => {
      const { userInfo, handleCleanReview } = this.props;

      axiosInstance
        .get(`http://${IP_ADDRESS}:5000/movie/reviews/${userInfo.id}`)
        .then((res) => this.setState({ myReview: res.data.results }))
        .then(() => {
          handleCleanReview();
        });
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
              <span>{`${userInfo.nickName}`}</span>s
            </div>
          </div>
          <hr color='black' size='10px'></hr>
          <div className='myReviewZone'>
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
      return <div></div>;
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
  handleIsRefresh: PropTypes.func,
};
export default withRouter(MyPage);
