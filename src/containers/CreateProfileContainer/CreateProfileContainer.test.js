import React from 'react';
import { shallow } from 'enzyme';
import { CreateProfileContainer, mapStateToProps, mapDispatchToProps } from './CreateProfileContainer';

describe('ProfileContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateProfileContainer />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    it('should update the state when input value changes', () => {
      const mockEvent = {
        target: {
          value: 'bees are cool',
          name: "bio"
        }
      }
      const expected = {
        bio: 'bees are cool',
        rating: '',
        user_img: '',
        reviews: ''
      }
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state()).toEqual(expected)
    })
  })

  describe('handleSubmit', () => {
    it('should call postProfile with the correct params', () => {
      
    })
  })
})