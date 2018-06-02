import React from 'react';
import { shallow } from 'enzyme';
import { UserRidesContainer, mapStateToProps } from './UserRidesContainer';
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
    })
  })

  describe('loadRideDetails', () => {
    it('should call fetchRidesFrom user with the correct params', async () => {
      let expected = 1;
      let mockRideArray = [{
          ride_id: 1
      }];
      await wrapper.instance().loadRideDetails(mockRideArray);

      expect(API.fetchRidesFromUser).toHaveBeenCalledWith(1)
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
  });
});