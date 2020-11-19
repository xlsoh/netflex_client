import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import GoogleBtn from "./GoogleBtn";
import {GlobalStyle, Wrapper, Input, Button} from "./SignInCss"

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
        <>
        <GlobalStyle/>
        <Wrapper>
        <div>
          <center>
            <img src={`https://fontmeme.com/permalink/201118/92d70114149d73adda9075f76f137762.png`}/>
            <br/>
            <br/>
            <br/>
  
            <form
              onSubmit={(e) => {
                e.preventDefault();
                return axios
                  .post(`http://54.180.63.153:5000/user/signin`, {
                    email: email,
                    password: password,
                  })
                  .then((res) => {
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
                
         
                <Input
              
                  type="email"
                  placeholder="이메일 주소"
                  onChange={this.handleInputValue("email")}
                ></Input>
              </div>
              <div>
              
                
                <Input
                 
                  type="password"
                  placeholder="비밀번호"
                  onChange={this.handleInputValue("password")}
                ></Input>
              </div>
              <br/>
              <div>
                <Button
                 
                  type="submit"
                >
                  로그인
                </Button>
              </div>
              <br/>
            </form>
            <div>
              <GoogleBtn
                isLogin={isLogin}
                handleIsLoginChange={handleIsLoginChange}
              /><br/>
            </div>
            <div>
              {" "}<br/>
              Netflex 회원이 아니신가요?<br/><br/>
              <Link to={`/user/signup`}>지금 가입하세요!</Link>
            </div>
          </center>
        </div>
        </Wrapper>
        </>
      );
      
    } else {
      return (
        <div></div>
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

//