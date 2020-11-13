import React from "react";
import MyReviewList from "./MyReviewList";
import Nav from "./Nav";

function MyPage(props){
  const {isLogin, userinfo} = props
  if(isLogin){
    return(
      <div>
        <div>내 정보</div>
      <div className="email">이메일 : {userinfo.email}</div>
      <div className="nickName">닉네임 : {userinfo.nickName}</div>
      <MyReviewList/>
      
      
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

export default MyPage;
