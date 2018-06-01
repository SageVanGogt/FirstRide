import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from './../../apiCalls/apiCalls';

export class CreateProfileContainer extends Component {
  constructor(props) {
    super(props),

    this.state = {
      bio: '',
      rating: '',
      user_img: '',
      reviews: ''
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
    const profileData = {
      profile_id: this.props.user.id,
      ...this.state
    }
    const profile = await API.postNewProfile(profileData);
    
  }

  render() {
    return (
      <div>
        <form action="submit" onClick={this.handleSubmit}>
          All you have to do is tell us a little about
          yourself and leave an image if you would like!
          <input 
            type="text" 
            name="bio" 
            onChange={this.handleChange}/>
          <input 
            type="text" 
            name="user_img" 
            onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileContainer);