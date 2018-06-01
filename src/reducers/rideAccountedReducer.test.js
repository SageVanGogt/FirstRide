
import ridesAccountedReducer from './rideAccountedReducer';
import { mockRides } from '../apiCalls/mockData';

describe('ridesAccountedReducer', () => {
  it('should return a state of the recent rides accounted', () => {
    let mockRidesAccounted = [{}, {}];
    let mockAction = {
      type: "ADD_RIDES_ACCOUNTED",
      ridesAccounted: mockRidesAccounted
    }
    let initialState = [];
    let actual = ridesAccountedReducer(initialState, mockAction);

    expect(actual).toEqual(mockRidesAccounted);
  })
})