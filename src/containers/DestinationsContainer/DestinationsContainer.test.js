import React from 'react';
import { shallow } from 'enzyme';
import DestinationsContainer from './DestinationsContainer';

describe('DestinationsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DestinationsContainer />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})