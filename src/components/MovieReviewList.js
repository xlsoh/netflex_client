
import React,{useEffect, useState} from "react";
import MovieReviewListEntry from "./MovieReviewListEntry";

function MovieReviewList() {
  const [Reviews, setReviews] = useState()
 
  useEffect(()=>{
    const endpoint = "http://localhost:5000/"
  })

  return (
    <div></div>
  )
   
  
}

export default MovieReviewList;
