import React from 'react';
import { shallow } from 'enzyme';
import { RidesContainer, mapStateToProps, mapDispatchToProps } from './RidesContainer';
import * as MOCK from './../../apiCalls/mockData';

describe('RidesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RidesContainer />, 
      { disableLifeCycleMethods: true });
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('loadRides', () => {

  })

  describe('mapStateToProps', () => {
    it('should return a state with expected props', () => {
      let mockState = {
        destination: 'Red Rocks',
        user: {},
        rides: []
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.destination;
      let expected = 'Red Rocks';

      expect(actual).toEqual(expected);
    })
  })
})