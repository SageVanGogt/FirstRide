import * as MOCK from './../mockData';

const signinUser = jest.fn().mockImplementation(() => 
  Promise.resolve({
    user: [{
    "id":1,
    "user_id":"456",
    "user_img":"http://us.cdn281.fansshare.com/photos/channingtatum/bfhgoi-ccaagvrc-large-fat-44506770.jpg",
    "bio":"I like to eat",
    "rating":"Solid 7"
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

export {
  signinUser,
  signupUser,
  fetchDestination,
  fetchRides,
  fetchPickups,
  fetchGeocode,
  submitNewPickup,
  submitNewRide,
  postRidesPassengers
}