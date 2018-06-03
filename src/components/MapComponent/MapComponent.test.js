import React from 'react';
import { shallow } from 'enzyme';
import MapComponent, { mapStateToProps } from './MapComponent';

describe('MapComponent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MapComponent />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})