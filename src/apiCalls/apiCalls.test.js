import * as API from './apiCalls';
import * as MOCK from './mockData';
import { geoKey } from './../apiKey';

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

describe('signupUser', () => {
  let mockUser;
  let url;
  let mockBody;
  
  beforeEach(() => {
    url = 'http://localhost:3000/api/users/new';
    mockUser = {
      user_name: 'sage',
      email: 'thurmanvogt@gmail.com',
      password: 'sage'
    }
    mockBody = {
      method: "POST",
      body: JSON.stringify(mockUser),
      headers: {
        "Content-Type": "application/json"
      }
    }
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: '200',
        json: () => Promise.resolve(mockUser)
      }))
  })

  it('should be called with the correct params', async () => {
    await API.signupUser(mockUser);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody)
  })

  it('should return user data', async () => {
    const expected = mockUser;
    const actual = await API.signupUser(mockUser);

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

  describe('fetchRides', () => {
    let url;
    let mockDestination;
    let mockBody;

    beforeEach(() => {
      mockDestination = 1;
      mockBody = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      };
      url = `http://localhost:3000/api/rides/get/${mockDestination}`;
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve(MOCK.mockRides.rides)
        })
      );
      
    })

    it('should be called with the correct params', async () => {
      let expected = (url, mockBody);

      API.fetchRides(mockDestination);

      expect(window.fetch).toHaveBeenCalledWith(url, mockBody)
    })

    it('should return the expected object if status ok', async () => {
      let expected = MOCK.mockRides.rides;

      let actual = await API.fetchRides(mockDestination);

      expect(actual).toEqual(expected);
    })
  })

describe('fetchPickups', () => {
  let url;
  let mockLocation;
  let mockBody;
  
  beforeEach(() => {
    mockLocation = 1;
    mockBody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    }
    url = `http://localhost:3000/api/pickup/get/${mockLocation}`;
    
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(MOCK.mockPickups)
      })
    );
  });

  it('should be called with the correct params', async () => {
    await API.fetchPickups(mockLocation);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  })

  it('should return the expected object', async () => {
    let actual = await API.fetchPickups(mockLocation);
    let expected = MOCK.mockPickups;

    expect(actual).toEqual(expected)
  })
})

describe('fetchGeocode', () => {
  let mockAddress;

  beforeEach(() => {
    mockAddress = '2600+fairview,+denver,+WA';
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(MOCK.mockGeoInfo)
    }))
  })

  it('should call fetch with the correct params', async () => {
    let expected = `https://maps.googleapis.com/maps/api/geocode/json?address=${mockAddress}&key=${geoKey}`;
    await API.fetchGeocode(mockAddress);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  })

  it('should return an object full of location data', async () => {
    let expected = MOCK.mockGeoInfo;
    let actual = await API.fetchGeocode(mockAddress);

    expect(actual).toEqual(expected);
  })
});

describe('submitNewRide', () => {
  let url;
  let mockBody;
  let mockRide;

  beforeEach(() => {
    url = `http://localhost:3000/api/rides/new`;
    mockRide = {
      location_id: 1,
      driver_id: 1,
      car_capacity: '5',
      seats_remaining: '4',
      car_type: 'sedan',
      date: '12/12/12',
      time: '4:00pm',
    };
    mockBody = {
      method: 'POST',
      body: JSON.stringify(mockRide),
      headers: {
        "Content-Type": "application/json"        
      }
    };
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(2)
    }))
  })

  it('should be called with the correct params', async () => {
    await API.submitNewRide(mockRide);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  });

  it('should return an id number', async () => {
    let actual = await API.submitNewRide(mockRide);
    let expected = 2;

    expect(actual).toEqual(expected);
  });
});

describe('submitNewPickup', () => {
  let url;
  let mockBody;
  let mockPickup;

  beforeEach(() => {
    mockPickup = {
      ride_id: 2,
      location_id: 1,
      lat: 123123,
      lng: 12312
    };
    url = `http://localhost:3000/api/pickup/new`;
    mockBody = {
      method: 'POST',
      body: JSON.stringify(mockPickup),
      headers: {
        "Content-Type": "application/json"        
      }
    };
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(1)
    }))
  })

  it('should be called with the correct params', async () => {
    await API.submitNewPickup(mockPickup);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  })

  it('should return the expected id', async () => {
    let actual = await API.submitNewPickup(mockPickup);
    let expected = 1;

    expect(actual).toEqual(expected);
  })
});

describe('fetchRidesPassengers', () => {
  let url;
  let mockLocationId;
  let mockBody;

  beforeEach(() => {
    mockLocationId = 1;
    mockBody = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }
    };
    url = `http://localhost:3000/api/rides_passengers/get/passengers/${mockLocationId}`;
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        "ride": [{
              "id": 1,
              "ride_id": 1,
              "passenger_id": 1,
              "location_id": 1
        }]
      })
    }))
  })

  it('should be called with the correct params', async () => {
    await API.fetchRidesPassengers(mockLocationId);
    expect(window.fetch).toHaveBeenCalledWith(url, mockBody)
  })

  it('should return expected object', async () => {
    let expected = {
      ride: [{
        id: 1,
        ride_id: 1,
        passenger_id: 1,
        location_id: 1
      }]
    }
    let actual = await API.fetchRidesPassengers(mockLocationId);

    expect(actual).toEqual(expected);
  })
})

describe('postRidesPassengers', () => {
  let url;
  let mockBody;
  let mockArg;

  beforeEach(() => {
    url = `http://localhost:3000/api/rides_passengers/new`;   
    mockArg = {
      ride_id: 1,
      passenger_id: 1
    }
    mockBody = {
      method: "POST",
      body: JSON.stringify(mockArg),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(1)
    }))
  });

  it('should be called with the correct params', async () => {
    await API.postRidesPassengers(mockArg);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  })

  it('should return ride passenger id', async () => {
    let expected = 1;
    let actual = await API.postRidesPassengers(mockArg);
    
    expect(actual).toEqual(expected);
  })
})

describe('postNewProfile', () => {
  let mockProfile;
  let url;
  let mockBody;

  beforeEach(() => {
    mockProfile = {
      profile_id: 1,
      bio: 'dogs',
      rating: '',
      user_img: '',
      reviews: ''
    };
    url = `http://localhost:3000/api/profiles/new`; 
    mockBody = {
      method: "POST",
      body: JSON.stringify(mockProfile),
      headers: {
        "Content-Type": "application/json"
      }
    }  
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({
          id: 1,
          ...mockProfile
        })
      }))
  });

  it('should be called with the correct params', async () => {
    await API.postNewProfile(mockProfile);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody)
  })

  it('should return the expected object', async () => {
    let expected = {
      id: 1,
      ...mockProfile
    };
    let actual = await API.postNewProfile(mockProfile);

    expect(actual).toEqual(expected);
  })
})

describe('removePassengerRide', () => {
  let url;
  let mockRideId;
  let mockPassengerId;
  let mockDestinationId;
  let mockBody;

  beforeEach(() => {
    mockRideId = 1;
    mockPassengerId = 1;
    mockDestinationId = 1;
    mockBody = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    url = `http://localhost:3000/api/rides/${mockRideId}/passengers/${mockPassengerId}/destination/${mockDestinationId}`;
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve()
      }));
  });

  it('should be called with the correct params', async () => {
    await API.removePassengerRide(mockRideId, mockPassengerId, mockDestinationId);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody)
  });
});

describe('fetchUserRide', () => {
  let url;
  let mockUserId;
  let mockBody;
  let mockRides;

  beforeEach(() => {
    mockRides = {
      rides: [{}, {}]
    };
    mockUserId = 1;
    mockBody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };
    url = `http://localhost:3000/api/rides_passengers/get/rides/${mockUserId}`;
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        rides: [{}, {}]
      })
    }));
  });

  it('should be called with the correct params', async () => {
    await API.fetchUserRides(mockUserId);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  })

  it('should resolve to the correct object', async () => {
    let expected = mockRides;
    let actual = await API.fetchUserRides(mockUserId);

    expect(actual).toEqual(expected);
  })
})

describe('fetchRidesFromUser', () => {
  let url;
  let mockRideId;
  let mockBody;
  let mockRides;

  beforeEach(() => {
    mockRides = {
      rides: [{}, {}]
    };
    mockRideId = 1;
    mockBody = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };
    url = `http://localhost:3000/api/rides/${mockRideId}/get/user/`;
    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        rides: [{}, {}]
      })
    }));
  });

  it('should be called with the correct params', async () => {
    await API.fetchRidesFromUser(mockRideId);

    expect(window.fetch).toHaveBeenCalledWith(url, mockBody);
  })

  it('should resolve to the correct object', async () => {
    let expected = mockRides;
    let actual = await API.fetchRidesFromUser(mockRideId);

    expect(actual).toEqual(expected);
  })
})

describe('reverseGeoCode', () => {
  let url;
  let mockLat;
  let mockLng;

  beforeEach(() => {
    mockLat = 23;
    mockLng = 23;
    url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${mockLat},${mockLng}&key=${geoKey}`;
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve(MOCK.mockReverseGeoInfo)
      })
    );
  });

  it('should be called with the correct params', async () => {
    let expected = url;

    await API.reverseGeoCode(mockLat, mockLng);

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return the expected object', async () => {
    let expected = MOCK.mockReverseGeoInfo;

    let actual = await API.reverseGeoCode(mockLat, mockLng);

    expect(actual).toEqual(expected);
  });
});