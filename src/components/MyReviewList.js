import React from "react";
import { withRouter } from "react-router-dom";
import MyReviewListEntry from "./MyReviewListEntry";
import PropTypes from "prop-types";

class MyReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { myReview, movie, hadleReviewChange } = this.props;
    console.log(myReview);
    return (
      <div>
        {myReview &&
          myReview.map((review, index) => {
            return (
              <React.Fragment key={index}>
                <MyReviewListEntry
                  reviewId={review.reviewId}
                  title={review.title}
                  movie={movie}
                  hadleReviewChange={hadleReviewChange}
                />
              </React.Fragment>
            );
          })}
      </div>
    );
  }
}
MyReviewList.propTypes = {
  myReview: PropTypes.array,
  userinfo: PropTypes.object,
  isLogin: PropTypes.bool,
  movie: PropTypes.object,
  hadleReviewChange: PropTypes.func,
};
export default withRouter(MyReviewList);
