import React from "react";
import { withRouter } from "react-router-dom";
import MyReviewList from "./MyReviewList";
import axios from "axios";
import PropTypes from "prop-types";
import './MyPage.css'

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
<span className='InfoCont'>{`이름 `}</span>
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
<div> </div>
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

