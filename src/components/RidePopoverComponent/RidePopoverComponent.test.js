import React from 'react';
import { shallow }  from 'enzyme';
import { RidePopoverComponent, mapStateToProps } from './RidePopoverComponent';

describe('RidePopoverComponent', () => {
  let wrapper;
  let mockRidesAccounted;
  let mockRides;

  beforeEach(() => {
    mockRides = [{}, {}];
    mockRidesAccounted = [{}, {}];
    wrapper = shallow(<RidePopoverComponent 
    ridesAccounted={mockRidesAccounted}
    rides={mockRides}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should map the ridesAccounted to props', () => {
      let mockState = {
        user: {},
        ridesAccounted: mockRidesAccounted
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.ridesAccounted;

      expect(actual).toEqual(mockRidesAccounted);
    })
  })
})