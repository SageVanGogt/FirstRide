import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './../../actions/user';
import './NavContainer.css';

export class NavContainer extends Component {
  constructor(props) {
    super();
  };

  handleSignout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="nav-bar">
        <h1 className="site-name">FirstRide</h1>
        <div className="links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          { 
            this.props.user.id ? 
              <button onClick={this.handleSignout}>signout</button> :
              <NavLink className="nav-link" to="/login">Signin</NavLink>
          }
          <NavLink className="nav-link" to="/profile">Me</NavLink>
        </div>
      </div>
    );
  };
};

export const mapStateToProps = (state) => ({
  user: state.user
});

export const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(actions.signoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);