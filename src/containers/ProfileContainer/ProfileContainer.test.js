import React from 'react';
import { shallow } from 'enzyme';
import { ProfileContainer, mapStateToProps, mapDispatchToProps } from './ProfileContainer';

describe('ProfileContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ProfileContainer />)
  })
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})