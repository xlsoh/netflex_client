import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import MovieListEntry from "./MovieListEntry";
import { apiUrl, apiKey, imageBaseUrl } from "./config";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import MovieInfo from "./MovieInfo";

function MovieList(props) {
  const [Movies, setMovies] = useState();
  const [ModalData, setModalData] = useState({});
  const [modal, setModal] = useState(false);

  const showModal = (movie) => {
    setModalData(movie);
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const { handleWriteReview } = props;
  const modalCont = (
    <MovieInfo
      movieId={ModalData.id}
      containerName={"modalContainer" + (modal ? "show" : "hide")}
      movieName={ModalData.original_title}
      overview={ModalData.overview}
      show={modal}
      img={ModalData.poster_path}
      release={ModalData.release_date}
      onClick={() => closeModal()}
      adult={ModalData.adult}
      handleWriteReview={handleWriteReview}
    />
  );

  useEffect(() => {
    const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;
    axios.get(endpoint, {}).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  // console.log(Movies);

  return (
    <>
      <Grid container spacing={0}>
        <div className="movie">
          {modalCont}
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <div onClick={() => showModal(movie)}>
                  <MovieListEntry
                    image={
                      movie.poster_path
                        ? `${imageBaseUrl}w500${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </div>
                {/* <MovieInfo containerName={"modalContainer" + (modal? "show":"hide")}
       movieName={movie.original_title}
       overview={movie.overview}
       show={modal}
       img={movie.poster_path} 
       onClick={()=>closeModal()}
       /> */}
              </React.Fragment>
            ))}
        </div>
      </Grid>
    </>
  );
}
MovieList.propTypes = {
  handleWriteReview: PropTypes.func,
};
export default withRouter(MovieList);
