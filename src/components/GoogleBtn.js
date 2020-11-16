import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

axios.defaults.withCredentials = true;

const CLIENT_ID =
  '248265094060-p88m5kivgu0vkevoss3aihhbidegqp2q.apps.googleusercontent.com';

class GoogleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
  }
  login(response) {
    console.log(response);
    const { accessToken, profileObj } = response;
    const { email, name } = profileObj;
    console.log(email, name);
    if (response) {
      return axios
        .post(`http://localhost:5000/user/signup`, {
          email,
          nickName: name,
          password: '',
        })
        .then((res) => {
          this.props.handleIsLoginChange(res.data, accessToken);
          this.props.history.push('/movie/popular');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  handleLoginFailure(response) {
    alert('Failed to log in');
  }

  render() {
    const { isLogin } = this.props;
    return (
      <div>
        {isLogin ? (
          <></>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText='Login'
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={'single_host_origin'}
          />
        )}
      </div>
    );
  }
}

GoogleBtn.propTypes = {
  handleIsLoginChange: PropTypes.func,
  isLogin: PropTypes.bool,
  history: PropTypes.object,
};
export default withRouter(GoogleBtn);
