import React from "react";
import { withRouter, Link, useHistory } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import PropTypes from "prop-types";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickname: "",
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  render() {
    const { email, password, nickname } = this.state;
    return (
      <div>
        <Nav />
        <center>
          <h1>회원가입</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              axios
                .post("http://localhost:4000/signup", {
                  email: email,
                  password: password,
                  nickname: nickname,
                })
                .then((res) => {
                  this.props.history.push("/");
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
                onChange={this.handleInputValue("nickname")}
                placeholder="닉네임"
              ></input>
            </div>
            <div>
              <Link to="/login">이미 아이디가 있으신가요?</Link>
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
    );
  }
}
SignUp.propTypes = {
  history: PropTypes.array,
};
export default withRouter(SignUp);
