import React from "react";
import {
  Link,
  Switch,
  Route,
  useHistory,
  Redirect,
  withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleIsLogoutChange } = this.props;
    return (
      <Switch>
        <Route
          path={`/user/signin`}
          render={() => {
            return (
              <div>
                <Link to="/user/signin">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
              </div>
            );
          }}
        />
        <Route
          path={`/user/signup`}
          render={() => {
            return (
              <div>
                <Link to="/user/signin">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
              </div>
            );
          }}
        />
        <Route
          path={`/user/mypage`}
          render={() => {
            return (
              <div>
                <Link to="/movie/popular">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
                <Link to="/user/signout" /*서버와 연결시 Link 제거해주세요*/>
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                    onClick={handleIsLogoutChange}
                  >
                    로그아웃
                  </button>
                </Link>
              </div>
            );
          }}
        />
        <Route
          exact
          path={`/movie/popular`}
          render={() => {
            return (
              <div>
                <Link to="/movie/popular">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
                <Link to="/user/mypage">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    마이페이지
                  </button>
                </Link>
              </div>
            );
          }}
        />
        <Route
          exact
          path={`/movie/movieId`}
          render={() => {
            return (
              <div>
                <Link to="/movie/popular">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
                <Link to="/user/mypage">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    마이페이지
                  </button>
                </Link>
              </div>
            );
          }}
        />
        <Route
          exact
          path={`/movie/movieId/review/reviewId`}
          render={() => {
            return (
              <div>
                <Link to="/movie/popular">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
                <Link to="/user/mypage">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    마이페이지
                  </button>
                </Link>
              </div>
            );
          }}
        />
        <Route
          exact
          path={`/movie/movieId/writeReview`}
          render={() => {
            return (
              <div>
                <Link to="/movie/popular">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    Netflex
                  </button>
                </Link>
                <Link to="/user/mypage">
                  <button
                    style={{
                      width: "150px",
                      height: "50px",
                      margin: "5px",
                      borderRadius: "5px",
                      backgroundColor: "ivory",
                    }}
                    type="submit"
                  >
                    마이페이지
                  </button>
                </Link>
              </div>
            );
          }}
        />
      </Switch>
    );
  }
}
Nav.propTypes = {
  history: PropTypes.object,
  handleIsLogoutChange: PropTypes.func,
};
export default withRouter(Nav);
