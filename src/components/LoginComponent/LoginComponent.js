import React from 'react';
import SigninContainer from './../../containers/SigninContainer/SigninContainer';
import SignupContainer from './../../containers/SignupContainer/SignupContainer';
import './LoginComponent.css'

const LoginComponent = () => {
  return (
    <div className="login-container">
      <SigninContainer />
      <SignupContainer />
    </div>
  );
}

export default LoginComponent;