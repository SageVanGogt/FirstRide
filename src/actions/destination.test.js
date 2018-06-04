import * as actions from './destination';

describe('setDestination', () => {
  it('should return an object with type SET_DESTINATION', () => {
    const destination = {
      id: 1, 
      location_name: 'Red Rocks', 
      location_lat_lng: '39.6654, 105.2057'
    }
    const expected = {
      type: 'SET_DESTINATION',
      destination
    }
    const actual = actions.setDestination(destination);
    expect(actual).toEqual(expected);
  });
});

describe('removeDestination', () => {
  it('should return an object with type REMOVE_DESTINATION', () => {
    let expected = {
      type: "REMOVE_DESTINATION"
    };
    let actual = actions.removeDestination();
    
    expect(actual).toEqual(expected);
  });  
});