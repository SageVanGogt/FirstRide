import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

})

export const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileContainer);