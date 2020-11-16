import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import MyPage from "./components/MyPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MovieList from "./components/MovieList";
import Review from "./components/Review";
import WriteReview from "./components/WriteReview";
import Nav from "./components/Nav";
import axios from "axios";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: {},
      review: {},
      movie: {},
    };
  }

  handleIsLoginChange = (res) => {
    this.setState({ isLogin: true, userInfo: res });
  };

  handleIsLogoutChange = () => {
    axios
      .post(`http://localhost:5000/user/signout`)
      .then((res) => {
        this.setState({ isLogin: false, userInfo: {} });
        this.props.history.push(`/`);
      })
      .catch((err) => console.log(err));
  };

  handleWriteReview = (data) => {
    this.setState({ movie: data });
    this.setState({ review: {} });
    this.props.history.push(`/movie/movieId/writeReview`);
  };

  hadleReviewChange = (reviewId) => {
    axios
      .get(`http://localhost:5000/movie/reviewinfo/${reviewId}`)
      .then((res) => {
        this.setState({ review: res });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { isLogin, userInfo, review, movie } = this.state;
    console.log("--isLogin--");
    console.log(isLogin);
    console.log("--userInfo--");
    console.log(userInfo);
    console.log("--review--");
    console.log(review);
    console.log("--movie--");
    console.log(movie);
    return (
      <div>
        <Nav
          isLogin={isLogin}
          handleIsLogoutChange={this.handleIsLogoutChange.bind(this)}
        />
        <Switch>
          <Route
            path={`/user/signin`}
            render={() => (
              <SignIn
                isLogin={isLogin}
                userInfo={userInfo}
                handleIsLoginChange={this.handleIsLoginChange.bind(this)}
              />
            )}
          />
          <Route
            exact
            path={`/user/signup`}
            render={() => <SignUp isLogin={isLogin} userInfo={userInfo} />}
          />
          <Route
            exact
            path={`/user/mypage`}
            render={() => (
              <MyPage
                isLogin={isLogin}
                userInfo={userInfo}
                hadleReviewChange={this.hadleReviewChange.bind(this)}
              />
            )}
          />
          <Route
            exact
            path={`/movie/popular`}
            render={() => (
              <MovieList
                isLogin={isLogin}
                userInfo={userInfo}
                handleWriteReview={this.handleWriteReview.bind(this)}
              />
            )}
          />
          <Route
            exact
            path={`/movie/movieId/review/reviewId`}
            render={() => (
              <Review isLogin={isLogin} userInfo={userInfo} review={review} />
            )}
          />
          <Route
            exact
            path={`/movie/movieId/writeReview`}
            render={() => (
              <WriteReview
                isLogin={isLogin}
                userInfo={userInfo}
                review={review}
                movie={movie}
                hadleReviewChange={this.hadleReviewChange.bind(this)}
              />
            )}
          />
          <Route
            path={`/`}
            render={() => {
              if (isLogin) {
                return <Redirect to={`/movie/popular`} />;
              }
              return <Redirect to={`/user/signin`} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
