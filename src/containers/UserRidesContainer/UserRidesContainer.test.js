import React from 'react';
import { shallow } from 'enzyme';
import { UserRidesContainer, mapStateToProps, mapDispatchToProps } from './UserRidesContainer';
import * as API from './../../apiCalls/apiCalls';

jest.mock('./../../apiCalls/apiCalls');

describe('UserRidesContainer', () => {
  let wrapper;
  let mockUser;

  beforeEach(() => {
    mockUser = {id: 1};
    wrapper = shallow(<UserRidesContainer 
    user={mockUser}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('loadPassengerRides', () => {
    it('should call fetchUserRides with the correct params', async () => {
      let expected = 1;
      await wrapper.instance().loadPassengerRides();

      expect(API.fetchUserRides).toHaveBeenCalledWith(expected);
    });

    it('should return the expected array', async () => {
      let expected = [{}, {}];
      let actual = await wrapper.instance().loadPassengerRides();

      expect(actual).toEqual(expected);
    });
  })

  describe('loadRideDetails', () => {
    it('should call fetchRidesFrom user with the correct params', async () => {
      let expected = 1;
      let mockRideArray = [{
          ride_id: 1
      }];
      await wrapper.instance().loadRideDetails(mockRideArray);

      expect(API.fetchRidesFromUser).toHaveBeenCalledWith(expected);
    })

    it('should return an object', async () => {
      let expected = [{}];
      let mockRideArray = [{
          ride_id: 1
      }];
      let actual = await wrapper.instance().loadRideDetails(mockRideArray);

      expect(actual).toEqual(expected);
    })
  })

  describe('mapStateToProps', () => {
    it('should map the user to props', () => {
      let mockState = {
        user: {id: 1},
        rides: [{}, {}]
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.user;
      let actual = mappedProps.user;

      expect(actual).toEqual(expected);
    });

    it('should map the userRides to props', () => {
      let mockState = {
        user: {id: 1},
        rides: [{}, {}],
        userRides: [{}, {}]
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.userRides;
      let actual = mappedProps.userRides;

      expect(actual).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let mockRides = [{}, {}]
      let expected = {
        type: "ADD_USER_RIDES",
        userRides: mockRides
      }
      let actual = mappedProps.setUserRides(mockRides);
      
      expect(mockDispatch).toHaveBeenCalledWith(expected)
    })
  })
});