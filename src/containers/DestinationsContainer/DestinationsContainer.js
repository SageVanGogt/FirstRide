import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class DestinationsContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="destinations">
        <NavLink to="/rides">Red Rocks</NavLink>
        <NavLink to="/rides">Breckenridge</NavLink>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(DestinationsContainer);