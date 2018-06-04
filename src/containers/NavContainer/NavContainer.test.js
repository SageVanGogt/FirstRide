import React from 'react';
import { shallow } from 'enzyme';
import { NavContainer, mapStateToProps, mapDispatchToProps } from './NavContainer';

describe('NavContainer', () => {
  let wrapper;
  let mockState;
  let mockLogoutUser;
  let mockToggleLogin;
  let mockRemoveUserRides;

  beforeEach(() => {
    mockRemoveUserRides = jest.fn();
    mockToggleLogin = jest.fn();
    mockLogoutUser = jest.fn();
    mockState = {
      user: {id: 1},
      rides: [{}, {}]
    };
    wrapper = shallow(<NavContainer 
      {...mockState}
      toggleLogin={mockToggleLogin}
      logoutUser={mockLogoutUser}
      removeUserRides={mockRemoveUserRides}
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

    it('should call toggleLogin', () => {
      wrapper.instance().handleSignout();
      
      expect(mockRemoveUserRides).toHaveBeenCalled();
    })

    it('should call removeUserRides', () => {
      wrapper.instance().handleSignout();
      
      expect(mockToggleLogin).toHaveBeenCalled();
    })
  })

  describe('mapStateToProps', () => {
    it('should get the user from the store', () => {
      let expected = {id: 1};
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      
      expect(actual).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {
    
    it('should call dispatch with the correct params for logoutUser', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: 'SIGNOUT_USER'
      }
      mappedProps.logoutUser();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })

    it('should call dispatch with the correct params for removeUserRides', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: 'REMOVE_USER_RIDES'
      }
      mappedProps.removeUserRides();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params for removeCurrentLocation', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: 'REMOVE_CURR_LOCATION'
      };
      mappedProps.removeCurrentLocation();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params for removeDestination', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: 'REMOVE_DESTINATION'
      };
      mappedProps.removeDestination();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});