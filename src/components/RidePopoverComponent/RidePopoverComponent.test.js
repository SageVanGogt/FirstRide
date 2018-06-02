import React from 'react';
import { shallow }  from 'enzyme';
import { RidePopoverComponent, mapStateToProps } from './RidePopoverComponent';

describe('RidePopoverComponent', () => {
  let wrapper;
  let mockRidesAccounted;
  let mockRides;
  let mockUser;

  beforeEach(() => {
    mockUser = {id: 1};
    mockRides = [{}, {}];
    mockRidesAccounted = [{}, {}];
    wrapper = shallow(<RidePopoverComponent 
    ridesAccounted={mockRidesAccounted}
    rides={mockRides}
    user={mockUser}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should map the ridesAccounted to props', () => {
      let mockState = {
        user: {id: 1},
        ridesAccounted: mockRidesAccounted
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.ridesAccounted;

      expect(actual).toEqual(mockRidesAccounted);
    })

    it('should map the user to props', () => {
      let mockState = {
        user: {id: 1},
        ridesAccounted: mockRidesAccounted
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;

      expect(actual).toEqual(mockUser);
    })
  })
})