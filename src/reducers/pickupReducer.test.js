import pickupReducer from './pickupReducer';

describe('pickupReducer', () => {

  it('should return a state with pickup locations', () => {
    let initialState = [];
    let mockAction = {
      type: 'ADD_PICKUPS',
      pickups: [{}, {}]
    };
    let expected = [{}, {}];
    let actual = pickupReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);
  })

  it('should return a state with a toggled show pickup', () => {
    let initialState = [
      {
        id: 1,
        isShowing: false
      }, 
      {
        id: 2,
        isShowing: false
      }];
    let mockAction = {
      type: "TOGGLE_SHOWING",
      pickup: {
        id: 1,
        isShowing: false
      }
    };
    let expected = [
      {
        id: 1,
        isShowing: true
      }, 
      {
        id: 2,
        isShowing: false
      }]
    let actual = pickupReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })

  it('should return an updated state with ADD_NEW_PICKUP case', () => {
    let initialState = [{}, {}];
    let mockAction = {
      type: 'ADD_NEW_PICKUP',
      pickup: {}
    };
    let actual = pickupReducer(initialState, mockAction);
    let expected = [{}, {}, {}];

    expect(actual).toEqual(expected);
  })

  it('should return the state in default case', () => {
    let initialState = [{}, {}];
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = pickupReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  });

  it('should return an empty array in REMOVE_PICKUPS case', () => {
    let initialState = [{}, {}];
    let mockAction = {
      type: 'REMOVE_PICKUPS'
    };
    let actual = pickupReducer(initialState, mockAction);
    let expected = [];

    expect(actual).toEqual(expected);
  })
});