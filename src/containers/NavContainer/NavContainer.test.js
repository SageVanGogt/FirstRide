import React from 'react';
import { shallow } from 'enzyme';
import NavContainer from './NavContainer';

describe('NavContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavContainer />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})