import React from "react";
import MyPage from "./components/MyPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MovieList from "./components/MovieList";
import Review from "./components/Review";
import WriteReview from "./components/WriteReview";
import MovieInfo from "./components/MovieInfo";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userinfo: {},
    };
  }

  handleIsLoginChange() {
    // 인증을  성공했을때. 사용자 정보 호출, 성공하면 로그인 상태를 바꿉니다.
    axios
      .get("")
      .then((res) => {
        console.log(res.data);
        this.setState({ isLogin: true, userinfo: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleIsLogoutChange() {
    //로그아웃 상태로 바꿉니다.
    axios
      .post("")
      .then((res) => {
        this.setState({ isLogin: false, userinfo: {} });
        this.props.history.push("/user/login");
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { isLogin, userinfo } = this.state;
    console.log(isLogin, userinfo);
    return (
      <div>
        <Switch>
          <Route
            path="/user/login"
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
            render={() => (
              <SignUp
                isLogin={isLogin}
                handleIsSignupChange={this.handleIsSignupChange.bind(this)}
              />
            )}
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
            path="/movie/{movie_id}/write_review"
            render={() => (
              <WriteReview
                isLogin={isLogin}
                userinfo={userinfo}
                handleInputValue={this.handleInputValue.bind(this)}
                handleSubmitChange={this.handleSubmitChange.bind(this)}
              />
            )}
          />
          <Route
            path="/"
            render={() => {
              if (isLogin) {
                return <Redirect to="/movie/popular" />;
              }
              return <Redirect to="/user/login" />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
