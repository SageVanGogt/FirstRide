import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupContainer from './../SignupContainer/SignupContainer';
import { signinUser } from './../../apiCalls/apiCalls';

export class SigninContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async () => {
    const response = await signinUser(this.state);
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value="" 
            name="email"
            onChange={this.handleChange}
            placeholder="email"
          />
          <input 
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
        <SignupContainer/>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);