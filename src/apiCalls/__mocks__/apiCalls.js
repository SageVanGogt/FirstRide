import * as MOCK from './../mockData';

const signinUser = jest.fn().mockImplementation(() => 
  Promise.resolve({
    user: [{
    "id":1,
    "user_name": "sage"
    }]
  })
);

const signupUser = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));

const fetchDestination = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1,
  "location_name": "Red Rocks",
  "location_lat_lng": "12341, 123412"
}));

const fetchRides = jest.fn().mockImplementation(() => 
Promise.resolve(MOCK.mockRides));

const fetchPickups = jest.fn().mockImplementation(() => 
Promise.resolve(MOCK.mockPickups));

const fetchGeocode = jest.fn().mockImplementation(() => 
Promise.resolve(MOCK.mockGeoInfo));

const submitNewRide = jest.fn().mockImplementation(() => 
Promise.resolve({
  id: 1
}));

const submitNewPickup = jest.fn().mockImplementation(() => 
Promise.resolve({
  id: 1
}));

const postRidesPassengers = jest.fn().mockImplementation(() => 
Promise.resolve({
  id: 1
}));

const fetchRidesPassengers = jest.fn().mockImplementation(() => 
Promise.resolve({
  ride: [{
    id: 1,
    ride_id: 2,
    location_id: 1,
    passenger_id: 1
  }]
}));

const postNewProfile = jest.fn().mockImplementation(() => 
Promise.resolve({
  id: 1,
  profile_id: 1,
  bio: 1,
  user_img: '',
  rating: '4',
  reviews: ''
}));

const fetchUserRides = jest.fn().mockImplementation(() => 
Promise.resolve({
  rides: [{}, {}]
}));

const fetchRidesFromUser = jest.fn().mockImplementation(() => 
Promise.resolve({
  rides: [{}, {}]
}));

export {
  signinUser,
  signupUser,
  fetchDestination,
  fetchRides,
  fetchPickups,
  fetchGeocode,
  submitNewPickup,
  submitNewRide,
  postRidesPassengers,
  fetchRidesPassengers,
  postNewProfile,
  fetchUserRides,
  fetchRidesFromUser
}