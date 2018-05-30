import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from './LoginComponent';

describe('LoginComponent', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<LoginComponent />)

    expect(wrapper).toMatchSnapshot();
  })
})