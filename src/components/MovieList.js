import React, { useEffect, useState } from "react";
import MovieListEntry from "./MovieListEntry";
import { apiUrl, apiKey, imageBaseUrl } from "./config";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Nav from "./Nav"


function MovieList () {
  const [Movies, setMovies] = useState()
  
  
  

  useEffect(() => {
    const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;
    axios.get(endpoint, {}).then((res) => {
      setMovies(res.data.results);
    });
  }, []);



   
  return (
    <>
    {/* <div>{console.log(Movies)}</div> */}
    <Nav/>
    <h2>인기 순위</h2>
    <hr />

    {/* {MovieListEntry 모음} */}

    <Grid container spacing={0} >

      {Movies && Movies.map((movie, index) => (
        <React.Fragment key={index}>
          <MovieListEntry
           image={movie.poster_path ? `${imageBaseUrl}w500${movie.poster_path}`: null }
           movieId={movie.id}
           movieName={movie.original_title} 

          />
        </React.Fragment >
      ))}
   </Grid>
    </>
  );
}

export default MovieList;
