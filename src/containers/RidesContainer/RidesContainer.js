import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapContainer from './../MapContainer/MapContainer';

class RidesContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <MapContainer />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RidesContainer);