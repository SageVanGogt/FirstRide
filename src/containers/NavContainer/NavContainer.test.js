import React from 'react';
import { shallow } from 'enzyme';
import { NavContainer, mapStateToProps } from './NavContainer';

describe('NavContainer', () => {
  let wrapper;
  let mockState;

  beforeEach(() => {
    mockState = {
      user: 'sage',
      rides: [{}, {}]
    }
    wrapper = shallow(<NavContainer 
    {...mockState}/>);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should get the user from the store', () => {
      let expected = 'sage';
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      
      expect(actual).toEqual(expected);
    })
  })
})