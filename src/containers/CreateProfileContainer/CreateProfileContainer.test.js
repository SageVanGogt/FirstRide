import React from 'react';
import { shallow } from 'enzyme';
import { CreateProfileContainer, mapStateToProps, mapDispatchToProps } from './CreateProfileContainer';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('ProfileContainer', () => {
  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = {
      id: 1,
      user_name: 'sage'
    };
    wrapper = shallow(<CreateProfileContainer 
      user={mockUser}/>)
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
    let mockEvent;

    beforeEach(() => {
      mockEvent = {
        preventDefault: jest.fn()
      };
    })

    it('should call postNewProfile with the correct params', async () => {
      let expected = {
        profile_id: 1,
        bio: '',
        rating: '',
        user_img: '',
        reviews: ''
      }
      await wrapper.instance().handleSubmit(mockEvent);

      expect(API.postNewProfile).toHaveBeenCalledWith(expected);
    })
  })

  describe('mapStateToProps', () => {
    it('should map the user from state to props', () => {
      let mockState = {
        user: 'sage',
        rides: [{}, {}]
      }
      let expected = 'sage';
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      
      expect(actual).toEqual(expected);
    })
  })
})