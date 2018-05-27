import React from 'react';
import { shallow } from 'enzyme';
import { RidesContainer } from './RidesContainer';

describe('RidesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<RidesContainer />, 
      { disableLifeCycleMethods: true });
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('', () => {

  })
})