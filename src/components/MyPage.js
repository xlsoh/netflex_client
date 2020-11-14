import React from "react";
import MyReviewList from "./MyReviewList";
import axios from "axios"
import PropTypes from "prop-types"


class MyPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reviews:{}
    } 
    this.handleReviewData = this.handleReviewData.bind(this)
  }
  // 리뷰 데이터를 서버로부터 받아옴
  handleReviewData = () => {
    const {userinfo} = this.props;
    axios.get("http://localhost:5000/user/mypage/reviews",{
      params: {userId : userinfo.id}
    }).then((res)=>this.setState({reviews: res}))
  }

  render(){
    this.handleReviewData()
    const {isLogin, userinfo} = this.props
    if(isLogin){
      return(
        <div>
          <div>내 정보</div>
        <div className="email">이메일 : {userinfo.email}</div>
        <div className="nickName">닉네임 : {userinfo.nickName}</div>
        <div> 내가 쓴 리뷰 </div>
        <MyReviewList
        reviews={this.state.reviews}
        />
        </div>
      )
    } else{
      return(
        <div>
          <h1>로그인이 되지 않았습니다</h1>
        </div>
      )
    }

  }

}
MyPage.propTypes = {
  history: PropTypes.object,
  userinfo: PropTypes.object,
  isLogin: PropTypes.bool
};

export default MyPage;
