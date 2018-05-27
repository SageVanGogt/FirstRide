import * as API from './apiCalls';
import * as MOCK from './mockData';

describe('signinUser', () => {
  let url;
  let mockSignin;
  let mockBody;

  beforeEach(() => {
    mockSignin = {
      email: "thurmanvogt@gmail.com",
      password: "sage"
    };
    mockBody = {
      method: "POST",
      body: JSON.stringify(mockSignin),
      headers: {
        "Content-Type": "application/json"
      }
    }
    url = 'http://localhost:3000/api/users/';
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(MOCK.mockUser)
    }))
  })

  it('should be be called with the correct params', async () => {
    await API.signinUser(mockSignin);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  })

  it('should return the expected object', async () => {
    let actual = await API.signinUser(mockSignin);
    let expected = MOCK.mockUser;

    expect(actual).toEqual(expected);
  })
})

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
  });

  it('should return an expected object if the status is ok', async () => {
    const expected = {
      id: 1,
      location_name: "Red Rocks",
      location_lat_lng: "12341, 123412"
    }
    const actual = await API.fetchDestination(mockName);
    
    expect(actual).toEqual(expected);
  });
})