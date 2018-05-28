import pickupReducer from './pickupReducer';

describe('pickupReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = [];
  })

  it('should return a state with pickup locations', () => {
    let mockAction = {
      type: 'ADD_PICKUPS',
      pickups: [{}, {}]
    };
    let expected = [{}, {}];
    let actual = pickupReducer(initialState, mockAction);
    
    expect(actual).toEqual(expected);
  })
})