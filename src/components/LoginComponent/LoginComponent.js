import React from 'react';
import PropTypes from 'prop-types';
import SigninContainer from 
  './../../containers/SigninContainer/SigninContainer';
import SignupContainer from 
  './../../containers/SignupContainer/SignupContainer';
import './LoginComponent.css';

const LoginComponent = ({toggleLogin}) => (
  <div className="login-backdrop">
    <div className="login-container">
      <div 
        className="back-btn"
        onClick={toggleLogin}>
          X
      </div>
      <SigninContainer />
      <SignupContainer />
    </div> 
  </div>
);


LoginComponent.propTypes = {
  toggleLogin: PropTypes.func
};

export default LoginComponent;