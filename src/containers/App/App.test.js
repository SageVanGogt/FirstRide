import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';
 
describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {
    it('should pull user from the state', () => {
      let mockState = {
        user: {
          email: "thurmanvogt@gmail.com"
        }
      };
      let mappedProps = mapStateToProps(mockState);
      let actual = mappedProps.user;
      let expected = mockState.user;

      expect(actual).toEqual(expected);
    })
  })
})
