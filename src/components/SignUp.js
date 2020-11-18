import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import GlobalStyle from "./SignUpCss"


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickName: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password, nickName } = this.state;
    const { isLogin, userInfo } = this.props;
    if (!isLogin) {
      return (
        <>
        <GlobalStyle/>
        <div>
          <center>
            <h1>회원가입</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                axios
                  .post(`http://54.180.63.153:5000/user/signup`, {
                    email: email,
                    password: password,
                    nickName: nickName,
                  })
                  .then(() => {
                    this.props.history.push(`/`);
                  })
                  .catch((err) => console.log(err));
              }}
            >
              <div>
                {" "}
                이메일
                <input
                  style={{
                    width: "400px",
                    height: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  type="email"
                  placeholder="이메일 주소"
                  onChange={this.handleInputValue("email")}
                ></input>
              </div>
              <div>
                {" "}
                비밀번호
                <input
                  style={{
                    width: "400px",
                    height: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  onChange={this.handleInputValue("password")}
                  type="password"
                  placeholder="비밀번호"
                ></input>
              </div>
              <div>
                닉네임
                <input
                  style={{
                    width: "400px",
                    height: "50px",
                    margin: "10px",
                    borderRadius: "5px",
                  }}
                  onChange={this.handleInputValue("nickName")}
                  placeholder="닉네임"
                ></input>
              </div>
              <div>
                <Link to={`/`}>이미 아이디가 있으신가요?</Link>
              </div>
              <button
                style={{
                  width: "200px",
                  height: "40px",
                  margin: "5px",
                  borderRadius: "5px",
                  backgroundColor: "gray",
                }}
                type="submit"
              >
                시작하기
              </button>
            </form>
          </center>
        </div>
        </>
      );
    } else {
      return (
        <div>
          <h1>{`${userInfo.nickName}`}님!</h1>
          <h2>로그아웃 후 이용해주세요.</h2>
          <Link to={`/user/mypage`}>로그아웃 하시겠습니까?</Link>
        </div>
      );
    }
  }
}
SignUp.propTypes = {
  history: PropTypes.object,
  userInfo: PropTypes.object,
  isLogin: PropTypes.bool,
};
export default withRouter(SignUp);
