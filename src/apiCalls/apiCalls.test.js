import * as API from './apiCalls';

describe('fetchDestination', () => {
  let url;
  let mockName;
  let mockResponse;

  beforeEach(() => {
    mockName = 'Red Rocks';
    mockResponse = {
      "id": 1,
      "location_name": "Red Rocks",
      "location_lat_lng": "12341, 123412"
    };
    url = `http://localhost:3000/api/locations/${mockName}`;
    window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockResponse)
        })
      );
  });

  it('should be called with the correct params', async () => {
    const expected = 'http://localhost:3000/api/locations/Red Rocks';
    await API.fetchDestination(mockName);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  
})