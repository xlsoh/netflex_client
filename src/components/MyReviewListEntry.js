import React from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios"
import PropTypes, { string } from "prop-types";

class MyReviewListEntry extends React.Component{
constructor(props){
  super(props);
  this.state = {};
  this.handleDelClick = this.handleDelClick.bind(this);
  this.handleEditClick = this.handleEditClick.bind(this)
}

handleDelClick(){
  axios.post("http://localhost:5000/user/mypage")
  //해당 게시글 삭제 
}
handleEditClick(){
  this.props.history.push('/movie/movie_id/review')
  //해당 정보를 가지고 가는 것이 필요
}

render(){
  const {id, title} = this.props
  return(
    <div>
    <div className="title">{title}</div>
     <button onClick={this.handleDelClick}>삭제</button>
     <button onClick={this.handleEditClick}>수정</button>

    </div>
  ) 
}
}
MyReviewListEntry.propTypes = {
  history: PropTypes.object,
  id: PropTypes.number,
  title: string
};


export default withRouter(MyReviewListEntry);
