import React from "react";
import { withRouter, Link } from "react-router-dom";
import MyReviewListEntry from "./MyReviewListEntry";
import PropTypes from "prop-types";

class MyReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //myReview는 mypage에서 GET("/mypage/reviews")로 서버에서 받은 내가 쓴 리뷰리스트
    //myReview:[{reviewId: 1, title:""},{reviewId: 2, title:""}]
    const { myReview, hadleReviewChange } = this.props;
    return (
      <div>
        {myReview &&
          myReview.map((review, index) => (
            <React.Fragment key={index}>
              <MyReviewListEntry
                reviewId={review.reviewId}
                title={review.title}
                hadleReviewChange={hadleReviewChange}
              />
            </React.Fragment>
          ))}
      </div>
    );
  }
}
MyReviewList.propTypes = {
  myReview: PropTypes.array,
  userinfo: PropTypes.object,
  isLogin: PropTypes.bool,
  hadleReviewChange: PropTypes.func,
};
export default withRouter(MyReviewList);
