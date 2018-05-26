import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class NavContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signin">Signin</NavLink>
        <NavLink to="/profile">Me</NavLink>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);