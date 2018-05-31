import React from 'react';
import { shallow } from 'enzyme';
import { NavContainer, mapStateToProps, mapDispatchToProps } from './NavContainer';

describe('NavContainer', () => {
  let wrapper;
  let mockState;
  let mockLogoutUser;

  beforeEach(() => {
    mockLogoutUser = jest.fn();
    mockState = {
      user: 'sage',
      rides: [{}, {}]
    };
    wrapper = shallow(<NavContainer 
      {...mockState}
      logoutUser={mockLogoutUser}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleSignout', () => {
    it('should call logoutUser', () => {
      wrapper.instance().handleSignout();
      
      expect(mockLogoutUser).toHaveBeenCalled();
    })
  })

  describe('mapStateToProps', () => {
    it('should get the user from the store', () => {
      let expected = 'sage';
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      
      expect(actual).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: 'SIGNOUT_USER'
      }
      mappedProps.logoutUser();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  })
})