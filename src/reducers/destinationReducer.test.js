import { destinationReducer } from './destinationReducer';

describe('destinationReducer', () => {
  it('should return an updated state with a destination if type is SET_DESTINATION', () => {
    const initialState = {};
    const mockAction = {
      type: 'SET_DESTINATION',
      destination: {
        id: 1, 
        location_name: 'Red Rocks', 
        location_lat_lng: '39.6654, 105.2057'
      }
    };
    const expected = {
      id: 1, 
      location_name: 'Red Rocks', 
      location_lat_lng: '39.6654, 105.2057'
    };
    const actual = destinationReducer(initialState, mockAction);

    expect(actual).toEqual(expected);
  })
})