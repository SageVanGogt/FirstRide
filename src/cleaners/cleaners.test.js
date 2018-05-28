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