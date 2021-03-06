import React from 'react';
import { shallow } from 'enzyme';
import { OfferContainer, mapStateToProps, mapDispatchToProps } from './OfferContainer';
import * as API from './../../apiCalls/apiCalls';
import * as MOCK from './../../apiCalls/mockData';
import * as cleaner from './../../cleaners/cleaners';

jest.mock('./../../apiCalls/apiCalls');

describe('OfferContainer', () => {
  let wrapper;
  let mockDestination;
  let mockUser;
  let mockLoadRides;
  let mockSetNewPickup;
  let mockHandleShowOffer;
  let mockSetNewRide;

  beforeEach(() => {
    mockHandleShowOffer = jest.fn();
    mockSetNewRide = jest.fn();
    mockSetNewPickup = jest.fn();
    mockLoadRides = jest.fn();
    mockDestination = { id: 1 };
    mockUser = { id: 1 };
    wrapper = shallow(<OfferContainer 
      user={mockUser}
      destination={mockDestination}
      loadRides={mockLoadRides}
      setNewPickup={mockSetNewPickup}
      handleShowOffer={mockHandleShowOffer}
      setNewRide={mockSetNewRide}
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

    it('should call setNewPickup on handle submit', async () => {
      let mockEvent = {
        preventDefault: jest.fn()
      };

      await wrapper.instance().handleSubmitRide(mockEvent);

      expect(mockSetNewRide).toHaveBeenCalled();
    });
  });

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
        lng: -104.9994026,
        isShowing: false,
        address: "277 Bedford Avenue, Brooklyn, NY 11211, USA"
      };

      await wrapper.instance().handleSubmitPickup(mockRideId);

      expect(API.submitNewPickup).toHaveBeenCalledWith(expected);
    })

    it('should call setNewPickup with the correct params', async () => {
      let expected = {id: 1};
      await wrapper.instance().handleSubmitPickup(mockRideId);
      
      expect(mockSetNewPickup).toHaveBeenCalledWith(expected);
    })

    it('should call handleShowOffer', async () => {
      await wrapper.instance().handleSubmitPickup(mockRideId);
      
      expect(mockHandleShowOffer).toHaveBeenCalled();
    });
  });

  describe('getAddress', () => {

    it('should call the api call with the correct params', async () => {
      let mockLat = 2;
      let mockLng = 6;
      await wrapper.instance().getAddress(mockLat, mockLng);

      expect(API.reverseGeoCode).toHaveBeenCalledWith(mockLat, mockLng);
    });

    it('should return the correct value', async () => {
      let mockLat = 2;
      let mockLng = 6;
      let expected = "277 Bedford Avenue, Brooklyn, NY 11211, USA";
      let actual = await wrapper.instance().getAddress(mockLat, mockLng);

      expect(actual).toEqual(expected);
    })
  })

  describe('getGeoInfo', () => {
    
    it('should call fetchGeoCode with the correct params', async () => {
      let expected = ',+,+'

      await wrapper.instance().getGeoInfo();

      expect(API.fetchGeocode).toHaveBeenCalledWith(expected);
    });
  });

  describe('formatAddress', () => {

    it('should return an address with no spaces', () => {
      let expected = '2600+fairview,+seattle,+WA'
      wrapper.setState({
        street: '2600 fairview',
        city: 'seattle', 
        state: 'WA'
      })
      let actual = wrapper.instance().formatAddress();
      
      expect(actual).toEqual(expected);
    })
  });

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

  describe('mapDispatchToProps', () => {
    it('should call dispatch for setNewPickup with the correct params', () => {
      let mockPickup = {};
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_NEW_PICKUP",
        pickup: mockPickup
      }
      mappedProps.setNewPickup(mockPickup);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })

    it('should call dispatch for setNewRide with the correct params', () => {
      let mockRide = {};
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_NEW_RIDE",
        ride: mockRide
      };
      mappedProps.setNewRide(mockRide);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params if setError', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_ERROR",
        error: 'nono'
      }
      
      mappedProps.setError('nono');

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});