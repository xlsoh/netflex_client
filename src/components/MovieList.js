import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import MovieListEntry from "./MovieListEntry";
import { apiUrl, apiKey, imageBaseUrl } from "./config";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import MovieInfo from "./MovieInfo";


function MovieList({
  isLogin,
  userInfo,
  handleWriteReview,
  hadleReviewChangeByTitle,
}) {

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
      hadleReviewChangeByTitle={hadleReviewChangeByTitle}
      userInfo={userInfo}
      hadleReviewChangeByTitle={hadleReviewChangeByTitle}
    />
  );

  useEffect(() => {
    const endpoint = `${apiUrl}movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;
    axios.get(endpoint, {}).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  // console.log(Movies);

  if (isLogin) {
    return (
      <Fragment>
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
                  </React.Fragment>
                ))}
            </div>
          </Grid>
        </>
      </Fragment>
    );
  } else {
    return (
      <div>
        <h2>로그인 후 이용해주세요.</h2>
        <Link to="/user/signin">로그인 하시겠습니까?</Link>
      </div>
    );
  }
}
MovieList.propTypes = {
  isLogin: PropTypes.bool,
  userInfo: PropTypes.object,
  handleWriteReview: PropTypes.func,
};
export default withRouter(MovieList);
