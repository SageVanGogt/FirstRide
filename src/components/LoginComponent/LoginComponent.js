import React from 'react';
import SigninContainer from './../../containers/SigninContainer/SigninContainer';
import SignupContainer from './../../containers/SignupContainer/SignupContainer';
import './LoginComponent.css'

const LoginComponent = ({toggleLogin}) => {
  return (
    <div className="login-backdrop">
      <div className="login-container">
      <div 
        className="back-btn"
        onClick={toggleLogin}>X</div>
        <SigninContainer />
        <SignupContainer />
      </div> 
    </div>
  );
}

export default LoginComponent;