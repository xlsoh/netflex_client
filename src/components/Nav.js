import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./Nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLogin, review, movie, handleIsLogoutChange } = this.props;
    if (isLogin) {
      return (
        <Switch>
          <Route
            path={`/user/mypage`}
            render={() => {
              return (
                <div className="mypageButtonContainer">
                  <Link to={`/movie/popular`}>
                    <div className="netflexButton" />
                  </Link>
                  <div className="sortButton">
                    <div
                      className="backstepButton"
                      // onClick={this.props.history.goBack()}
                    />
                    <div
                      className="logoutButton"
                      onClick={handleIsLogoutChange}
                    />
                  </div>
                </div>
              );
            }}
          />
          <Route
            exact
            path={`/movie/popular`}
            render={() => {
              return (
                <header className="banner">
                  <div className="homeButtonContainer">
                    <div className="netflexButton" />
                    <Link to={`/user/mypage`}>
                      <div className="mypageButton" />
                    </Link>
                  </div>
                </header>
              );
            }}
          />
          <Route
            exact
            path={`/movie/${movie.movieId}`}
            render={() => {
              return (
                <div>
                  <Link to={`/movie/popular`}>
                    <div className="netflexButton" />
                  </Link>
                  <Link to={`/user/mypage`}>
                    <div className="mypageButton" />
                  </Link>
                </div>
              );
            }}
          />
          <Route
            exact
            path={`/movie/${movie.movieId}/review/${review.reviewId}`}
            render={() => {
              return (
                <div className="mypageButtonContainer">
                  <Link to={`/movie/popular`}>
                    <div className="netflexButton" />
                  </Link>
                  <ul className="sortButton">
                    <li
                      className="backstepButton"
                      // onClick={this.props.history.goBack()}
                    />
                    <li
                      className="logoutButton"
                      onClick={handleIsLogoutChange}
                    />
                  </ul>
                </div>
              );
            }}
          />
          <Route
            exact
            path={`/movie/${movie.movieId}/writeReview`}
            render={() => {
              return (
                <div className="mypageButtonContainer">
                  <Link to={`/movie/popular`}>
                    <div className="netflexButton" />
                  </Link>
                  <Link to={`/user/mypage`}>
                    <div className="mypageButton" />
                  </Link>
                </div>
              );
            }}
          />
        </Switch>
      );
    } else {
      return (
        <Switch>
          <Route
            path={`/user/signin`}
            render={() => {
              return (
                <div>
                  <Link to={`/user/signin`}></Link>
                </div>
              );
            }}
          />
          <Route
            path={`/user/signup`}
            render={() => {
              return (
                <div>
                  <Link to={`/user/signin`}></Link>
                </div>
              );
            }}
          />
        </Switch>
      );
    }
  }
}
Nav.propTypes = {
  history: PropTypes.object,
  isLogin: PropTypes.bool,
  review: PropTypes.object,
  movie: PropTypes.object,
  handleIsLogoutChange: PropTypes.func,
};
export default withRouter(Nav);
