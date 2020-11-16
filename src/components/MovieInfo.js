import React, { useEffect } from "react";
import MovieInfoDetail from "./MovieInfoDetail";
import MovieReviewList from "./MovieReviewList";
import Nav from "./Nav";
import axios from "axios"
import { apiUrl, apiKey, imageBaseUrl } from "./config";
import PropTypes from 'prop-types'


function MovieInfo({containerName, movieId, movieName,overview,show,img,onClick,release}){
   
  const handleWriteReview = () =>{
    this.props.history.push("movie/writereview")
  }
 
    return (
    show ?
    <div className={containerName} onClick={onClick}>
      <div className="modal">
        <img src = {`${imageBaseUrl}w500${img}`} alt="bg"/>
        <div className="bg"></div>
        <div className="modal-content">
          <h1>{movieName}</h1>
          <h2>{release}</h2>
          <p>{overview}</p>

        </div>
      </div>
      <MovieReviewList
      movieId={movieId}/>
      <button onClick={handleWriteReview}>내 리뷰 쓰기</button>
      
    </div>
    : null
    )
}
MovieInfo.propTypes = {
  containerName:PropTypes.string,
  movieId:PropTypes.number,
  image:PropTypes.string,
  movieName:PropTypes.string,
  overview:PropTypes.string,
  show:PropTypes.bool,
  img:PropTypes.string,
  onClick:PropTypes.func,
  release:PropTypes.string,

}

export default MovieInfo;
