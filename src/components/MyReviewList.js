
import React from "react";
import MyReviewListEntry from "./MyReviewListEntry";
import PropTypes from "prop-types";

class MyReviewList extends React.Component{
  constructor(props){
    super(props)
  }


  // 리뷰를 뽑아서 뿌려줌
render(){
  const {reviews} = this.props
  return(
   <div>
     {reviews && reviews.map((review,index)=>(
       <React.Fragment key={index}>
         <MyReviewListEntry
         id={review.id}
         title={review.title}
         />
       </React.Fragment>
     ))}
   </div>
    )
}
}
MyReviewList.propTypes = {
  reviews: PropTypes.object,
  userinfo: PropTypes.object,
  isLogin: PropTypes.bool
};
export default MyReviewList;
