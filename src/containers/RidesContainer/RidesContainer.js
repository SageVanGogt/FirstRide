import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapContainer from './../MapContainer/MapContainer';
import * as API from './../../apiCalls/apiCalls';
import * as actions from './../../actions/rides';
export class RidesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      street: '',
      city: '',
      state: ''
    };
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

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  formatAddress = () => {
    const street = this.state.street.replace(' ', '+');
    const city = this.state.city.replace(' ', '+');
    const state = this.state.state.replace(' ', '+');
    return (
      `${street},+${city},+${state}`
    );
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="street" 
            onChange={this.handleChange} 
            placeholder="street"/>
          <input 
            type="text" 
            name="city" 
            onChange={this.handleChange} 
            placeholder="city"/>
          <input 
            type="text" 
            name="state" 
            onChange={this.handleChange} 
            placeholder=""/>
          <input type="state"/>
        </form>
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