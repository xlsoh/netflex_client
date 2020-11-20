import React from "react";
import { withRouter } from "react-router-dom";
import MyReviewList from "./MyReviewList";
import axios from "axios";
import PropTypes from "prop-types";
import "./MyPage.css";

const IP_ADDRESS = "127.0.0.1";
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
        <>

          <div className="mypageContainer">
            <div className="Title">{`${userInfo.nickName}`} 님의 Info.</div>
            <div className="mypageWrapper">
              <div className="Description">이메일 : {`${userInfo.email}`}</div>
            </div>

            <div className="Title">
              {`${userInfo.nickName}`} 님이 작성한 Review List
            </div>
            <div className="reviewListWrapper">
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
      return <div> </div>;
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
