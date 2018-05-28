import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';
import './OfferContainer.css';

export class OfferContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location_id: this.props.destination.id,
      driver_id: this.props.user.id,
      car_capacity: '',
      seats_remaining: '',
      car_type: '',
      date: '',
      time: '',
      street: '',
      city: '',
      state: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleRideSubmit}>
          <input 
            type="text" 
            name="car_capacity" 
            onChange={this.handleChange} 
            placeholder="car capacity"/>
          <input 
            type="text" 
            name="car_type" 
            onChange={this.handleChange} 
            placeholder="car type"/>
          <input 
            type="text" 
            name="date" 
            onChange={this.handleChange} 
            placeholder="date"/>
          <input 
            type="text" 
            name="time" 
            onChange={this.handleChange} 
            placeholder="time of departure"/>
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
            placeholder="state"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  destination: state.destination,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(OfferContainer)