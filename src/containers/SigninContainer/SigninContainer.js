import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupContainer from './../SignupContainer/SignupContainer';
import { signinUser } from './../../apiCalls/apiCalls';
import * as actions from './../../actions/user';

export class SigninContainer extends Component {
  constructor(props) {
    super(props);
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

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signinUser(this.state);
    this.props.signinUser(response.user[0]);
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="email"
            onChange={this.handleChange}
            placeholder="email"
          />
          <input 
            type="password" 
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
  signinUser: (userData) => dispatch(actions.signinUser(userData))
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer);