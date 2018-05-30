import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signupUser } from './../../apiCalls/apiCalls';
import './SignupContainer.css';

export class SignupContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async () => {
    const response = await signupUser(this.state);
  }

  render() {
    return (
      <div className="signup-container">
        <form 
          action="submit" 
          onSubmit={this.handleSubmit}
          className="signup-form">
          <input 
            className="signup-input"
            type="text" 
            value="" 
            name="name"
            onChange={this.handleChange}
            placeholder="name"
          />
          <input 
            className="signup-input"
            type="text" 
            value="" 
            name="email"
            onChange={this.handleChange}
            placeholder="email"
          />
          <input 
            className="signup-input"
            type="password" 
            value="" 
            name="password"
            onChange={this.handleChange}
            placeholder="password"
          />
          <input 
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);