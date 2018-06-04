import ridesReducer from './ridesReducer';
import * as MOCK from './../apiCalls/mockData';

describe('ridesReducer', () => {

  it('should return a new state with rides in case ADD_RIDES', () => {
    let initialState = [];
    let expected = MOCK.mockRides.rides;
    let mockAction = {
      type: "ADD_RIDES",
      rides: MOCK.mockRides.rides
    };
    let actual = ridesReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });

  it('should return the state of empty array in REMOVE_RIDES case', () => {
    let initialState = [{}, {}];
    let mockAction = {
      type: 'REMOVE_RIDES'
    };
    let actual = ridesReducer(initialState, mockAction);
    let expected = [];

    expect(actual).toEqual(expected);
  });

  it('should return the state in default case', () => {
    let initialState = [{}, {}];
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = ridesReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  })
})