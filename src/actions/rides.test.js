import * as actions from './rides';
import * as MOCK from './../apiCalls/mockData';

describe('addRides', () => {
  it('should return an object with the type ADD_RIDES', () => {
    let mockRides = MOCK.mockRides;
    let expected = {
      type: 'ADD_RIDES',
      rides: mockRides.rides
    }
    let actual = actions.addRides(mockRides.rides);

    expect(actual).toEqual(expected);
  })
})