import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
export class RidesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadRides();
  }

  loadRides = () => {

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
  destination: state.destination
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RidesContainer);