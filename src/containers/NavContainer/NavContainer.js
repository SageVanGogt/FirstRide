import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './NavContainer.css';

export class NavContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="nav-bar">
        <h1 className="site-name">FirstRide</h1>
        <div className="links">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/login">Signin</NavLink>
          <NavLink className="nav-link" to="/profile">Me</NavLink>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);