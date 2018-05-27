import ridesReducer from './ridesReducer';
import * as MOCK from './../apiCalls/mockData';

describe('ridesReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = [];
  })

  it('should return a new state with rides in case ADD_RIDES', () => {
    let expected = MOCK.mockRides.rides;
    let mockAction = {
      type: "ADD_RIDES",
      rides: MOCK.mockRides.rides
    };
    let actual = ridesReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })
})