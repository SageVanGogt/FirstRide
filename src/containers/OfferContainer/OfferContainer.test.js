import React from 'react';
import { shallow } from 'enzyme';
import { OfferContainer, mapStateToProps, mapDispatchToProps } from './OfferContainer';
import * as API from './../../apiCalls/apiCalls';
import * as MOCK from './../../apiCalls/mockData';

jest.mock('./../../apiCalls/apiCalls');

describe('OfferContainer', () => {
  let wrapper;
  let mockDestination;
  let mockUser;

  beforeEach(() => {
    mockDestination = { id: 1 };
    mockUser = { id: 1 };
    wrapper = shallow(<OfferContainer 
      user={mockUser}
      destination={mockDestination}
    />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {

    it('should update the state when changes are made to inputs', () => {
      let mockEvent = {
        target: {
          name: 'car_type',
          value: 'sedan'
        }
      }
      let expected = 'sedan'
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('car_type')).toEqual(expected);
    })
  })

  describe('handleSubmitRide', () => {
    it('should call submitNewRide with correct params', async () => {
      let expected = {
        location_id: 1,
        driver_id: 1,
        car_capacity: '',
        seats_remaining: '',
        car_type: '',
        date: '',
        time: ''
      }
      let mockEvent = {
        preventDefault: jest.fn()
      }
      await wrapper.instance().handleSubmitRide(mockEvent);

      expect(API.submitNewRide).toHaveBeenCalledWith(expected)
    })
  })

  describe('handleSubmitPickup', () => {
    let mockRideId;

    beforeEach(() => {
      mockRideId = 1;
    })

    it('should call submitNewPickup with the correct params', async () => {
      let expected = {
        ride_id: 1,
        location_id: 1,
        lat: 39.7594866,
        lng: -104.9994026
      }

      await wrapper.instance().handleSubmitPickup(mockRideId);

      expect(API.submitNewPickup).toHaveBeenCalledWith(expected);
    })
  })

  describe('getGeoInfo', () => {
    it('should call fetchGeoCode with the correct params', async () => {
      let expected = {
        street: '',
        city: '',
        state: ''
      }

      await wrapper.instance().getGeoInfo();

      expect(API.fetchGeocode).toHaveBeenCalledWith(expected)
    })
  })

  describe('mapStateToProps', () => {

    it('should map the destination to props', () => {
      let mockState = {
        destination: {
          id: 1
        },
        user: {
          id: 1
        }
      };
      let expected = { id: 1 };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.destination;

      expect(actual).toEqual(expected);
    })

    it('should map the destination to props', () => {
      let mockState = {
        destination: {
          id: 1
        },
        user: {
          id: 1
        }
      };
      let expected = { id: 1 };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;

      expect(actual).toEqual(expected);
    })
  })
})