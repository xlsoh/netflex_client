import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import GoogleBtn from "./GoogleBtn";
const IP_ADDRESS = "127.0.0.1";
const axiosInstance = axios.create({
  withCredentials: true,
});
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { isLogin, userInfo, handleIsLoginChange } = this.props;
    if (!isLogin) {
      return (
        <div>
          <center>
            <h1>로그인</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                return axiosInstance
                  .post(`http://${IP_ADDRESS}:5000/user/signin`, {
                    email: email,
                    password: password,
                  })
                  .then((res) => {
                    console.log(res.data);
                    handleIsLoginChange(res.data);
                    this.props.history.push(`/`);
                  })
                  .catch((err) => {
                    alert("Login failed");
                    console.log(err);
                  });
              }}
            >
              <div>
                {" "}
                이메일
                <input
                  style={{
                    width: "500px",
                    height: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type='email'
                  placeholder='이메일 주소'
                  onChange={this.handleInputValue("email")}
                ></input>
              </div>
              <div>
                {" "}
                비밀번호
                <input
                  style={{
                    width: "500px",
                    height: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type='password'
                  placeholder='비밀번호'
                  onChange={this.handleInputValue("password")}
                ></input>
              </div>
              <div>
                <button
                  style={{
                    width: "300px",
                    height: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                    backgroundColor: "gray",
                  }}
                  type='submit'
                >
                  로그인
                </button>
              </div>
            </form>
            <div>
              <GoogleBtn
                isLogin={isLogin}
                handleIsLoginChange={handleIsLoginChange}
              />
            </div>
            <div>
              {" "}
              Netflex 회원이 아니신가요?
              <Link to={`/user/signup`}>지금 가입하세요.</Link>
            </div>
          </center>
        </div>
      );
    } else {
      return (
        // <div>
        //   <h1>{`${userInfo.nickName}`}님!</h1>
        //   <h2>로그아웃 후 이용해주세요.</h2>
        //   <Link to={`/user/mypage`}>로그아웃 하시겠습니까?</Link>
        // </div>
        <Redirect to={`/movie/popular`} />
      );
    }
  }
}
SignIn.propTypes = {
  handleIsLoginChange: PropTypes.func,
  history: PropTypes.object,
  userInfo: PropTypes.object,
  isLogin: PropTypes.bool,
  accessToken: PropTypes.string,
};
export default withRouter(SignIn);
