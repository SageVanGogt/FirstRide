import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer, mapStateToProps, mapDispatchToProps } from './MapContainer';
import * as MOCK from './../../apiCalls/mockData';

describe('MapContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MapContainer />);
  })

  describe('mapStateToProps', () => {

    it('should return the desired props from state', () => {
      let mockState = {
        destination: {
          id: 1,
          location_name: 'Red Rocks'
        },
        rides: [{}, {}]
      };
      let mappedProps = mapStateToProps(mockState);
      let expected = mockState.destination;
      let actual = mappedProps.destination;

      expect(actual).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params', () => {
      let mockDispatch = jest.fn();
      let mappedProps = mapDispatchToProps(mockDispatch);
      let expected = {
        type: "ADD_PICKUPS", 
        pickups: MOCK.mockPickups.pickup
      }
      mappedProps.setPickups(MOCK.mockPickups.pickup);
      expect(mockDispatch).toHaveBeenCalledWith(expected);
    })
  })
})