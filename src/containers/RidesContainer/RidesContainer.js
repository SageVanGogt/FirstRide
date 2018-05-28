import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
import * as actions from './../../actions/rides';
export class RidesContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.destination.id !== this.props.destination.id) {
      this.loadRides();
    }
  }

  loadRides = async () => {
    const { setRides, destination } = this.props;
    const response = await API.fetchRides(destination.id);
    await setRides(response.rides);
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
  setRides: (rides) => dispatch(actions.addRides(rides))
})

export default connect(mapStateToProps, mapDispatchToProps)(RidesContainer);