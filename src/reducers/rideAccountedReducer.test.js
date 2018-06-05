
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
  });

  it('should return an updated state with one less ride if requirements are met', () => {
    let initialState = [
      {id: 1}, 
      {id: 2}
    ];
    let mockAction = {
      type: 'REMOVE_RIDE_ACCOUNTED',
      ride: 1
    };
    let expected = [{id: 2}];
    let actual = ridesAccountedReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);
  })

  it('should return the state in default case', () => {
    let initialState = [{}, {}];
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = ridesAccountedReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  });
})