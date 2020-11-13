import React from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import MyPage from "./components/MyPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MovieList from "./components/MovieList";
import Review from "./components/Review";
import WriteReview from "./components/WriteReview";
import MovieInfo from "./components/MovieInfo";
import Nav from "./components/Nav";
import axios from "axios";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userinfo: {},
      review: {},
      movie: {},
    };
  }

  handleIsLoginChange() {
    // 인증을 성공했을때 사용자 정보 호출, 성공하면 로그인 상태를 바꿉니다.
    axios
      .get("http://localhost:5000/user/signin")
      .then((res) => {
        console.log(res.data);
        this.setState({ isLogin: true, userinfo: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleIsLogoutChange() {
    //로그아웃 상태로 바꿉니다.
    axios
      .post("http://localhost:5000/user/signout")
      .then((res) => {
        this.setState({ isLogin: false, userinfo: {} });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  hadleReviewChange() {
    //state의 review 바꿉니다.
    axios
      .get("http://localhost:5000/reviewinfo")
      .then((res) => {
        this.setState({ review: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { isLogin, userinfo, movie, review } = this.state;
    console.log(isLogin, userinfo);
    return (
      <div>
        <Nav
          isLogin={isLogin}
          handleIsLogoutChange={this.handleIsLogoutChange.bind(this)}
        />
        <Switch>
          <Route
            path="/user/signin"
            render={() => (
              <SignIn
                isLogin={isLogin}
                handleIsLoginChange={this.handleIsLoginChange.bind(this)}
              />
            )}
          />
          <Route
            exact
            path="/user/signup"
            render={() => <SignUp isLogin={isLogin} />}
          />
          <Route
            exact
            path="/user/mypage"
            render={() => (
              <MyPage
                isLogin={isLogin}
                userinfo={userinfo}
                handleIsLogoutChange={this.handleIsLogoutChange.bind(this)}
              />
            )}
          />
          <Route
            exact
            path="/movie/popular"
            render={() => <MovieList isLogin={isLogin} userinfo={userinfo} />}
          />
          <Route
            exact
            path="/movie/{movie_id}"
            render={() => <MovieInfo isLogin={isLogin} userinfo={userinfo} />}
          />
          <Route
            exact
            path="/movie/{movie_id}/reviews"
            render={() => <Review isLogin={isLogin} userinfo={userinfo} />}
          />
          <Route
            exact
            path="/movie/movie_id/write_review"
            render={() => (
              <WriteReview
                isLogin={isLogin}
                userinfo={userinfo}
                movie={movie}
                review={review}
              />
            )}
          />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/movie/popular" />;
              }
              return <Redirect to="/user/signin" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  history: PropTypes.array,
};

export default App;
