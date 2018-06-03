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
})