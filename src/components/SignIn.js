import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import PropTypes from "prop-types";

axios.defaults.withCredentials = true;

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
    const { handleIsLoginChange } = this.props;
    return (
      <div>
        <Nav />
        <center>
          <h1>로그인</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return axios
                .post("http://localhost:4000/user/signin", {
                  email: email,
                  password: password,
                })
                .then(() => {
                  handleIsLoginChange();
                  this.props.history.push("/");
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
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="email"
                placeholder="example@email.com"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div>
              {" "}
              비밀번호
              <input
                style={{
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="password"
                placeholder="password"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>
            <div>
              <button
                style={{
                  width: "200px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                  backgroundColor: "gray",
                }}
                type="submit"
              >
                로그인
              </button>
            </div>
            <div>
              <button
                style={{
                  width: "150px",
                  height: "20px",
                  margin: "5px",
                  backgroundColor: "ivory",
                }}
                type="submit"
              >
                Sign in with Google
              </button>
            </div>
            <div>
              {" "}
              회원이 아니신가요?
              <Link to="/signup">지금 가입하세요.</Link>
            </div>
          </form>
        </center>
      </div>
    );
  }
}
SignIn.propTypes = {
  handleIsLoginChange: PropTypes.func,
  history: PropTypes.array,
};
export default withRouter(SignIn);
