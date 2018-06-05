import * as MOCK from './../apiCalls/mockData';
import * as cleaner from './cleaners';

describe('geocodeCleaner', () => {
  it('should return an object with only latitude and longtude', () => {
    let expected = {
      lat: 39.7594866,
      lng: -104.9994026
    }
    let actual = cleaner.geocodeCleaner(MOCK.mockGeoInfo);

    expect(actual).toEqual(expected);
  })
})

describe('seatsRemainingCleaner', () => {
  it('should adjust the seats remaining if the ride has passengers', () => {{
    let expected = MOCK.mockUpdatedRides.rides;
    let mockRidesPassengers = [
      {
        id: 1,
        ride_id: 2,
        passenger_id: 1
      }
    ];
    let actual = cleaner.seatsRemainingUpdate(MOCK.mockRides.rides, mockRidesPassengers);

    expect(actual).toEqual(expected);
  }})
})

describe('reversGeoCodeCleaner', () => {
  it('should return a clean adderess', () => {
    let expected = "277 Bedford Avenue, Brooklyn, NY 11211, USA";
    let actual = cleaner.latLngToAddress(MOCK.mockReverseGeoInfo);

    expect(actual).toEqual(expected);
  });
});