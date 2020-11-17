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
    const { myReview, hadleReviewChange } = this.props;
    console.log(myReview);
    return (
      <div>
        {myReview &&
          myReview.map((review, index) => {
            return (
              <React.Fragment key={index}>
                <MyReviewListEntry
                  review={review}
                  title={review.title}
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
  hadleReviewChange: PropTypes.func,
};
export default withRouter(MyReviewList);
