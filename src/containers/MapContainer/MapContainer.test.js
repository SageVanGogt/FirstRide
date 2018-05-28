import React from 'react';
import { shallow } from 'enzyme';
import { MapContainer, mapStateToProps, mapDispatchToProps } from './MapContainer';

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
})