import { destinationReducer } from './destinationReducer';

describe('destinationReducer', () => {
  it('should return an updated state with a destination if type is SET_DESTINATION', () => {
    let initialState = {};
    let mockAction = {
      type: 'SET_DESTINATION',
      destination: {
        id: 1, 
        location_name: 'Red Rocks', 
        location_lat_lng: '39.6654, 105.2057'
      }
    };
    let expected = {
      id: 1, 
      location_name: 'Red Rocks', 
      location_lat_lng: '39.6654, 105.2057'
    };
    let actual = destinationReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  });

  it('should return an empty object in the REMOVE_DESTINATION case', () => {
    let mockAction = {
      type: "REMOVE_DESTINATION"
    };
    let initialState = { id: 1 };
    let actual = destinationReducer(initialState, mockAction);
    let expected = {};

    expect(actual).toEqual(expected);
  });

  it('should return the state in default case', () => {
    let initialState = {id: 1};
    let mockAction = {
      type: 'DEFAULT'
    };
    let actual = destinationReducer(initialState, mockAction);
    let expected = initialState;

    expect(actual).toEqual(expected);
  });
})