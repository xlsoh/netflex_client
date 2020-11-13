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
          path="/user/signin"
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
          path="/user/signup"
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
          path="/user/mypage"
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
                <Link to="/user/signout">
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
          path="/movie/popular"
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
          path="/movie/{movie_id}"
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
          path="/movie/movie_id/review"
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
          path="/movie/movie_id/write_review"
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
