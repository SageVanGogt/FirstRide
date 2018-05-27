const signinUser = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));

const signupUser = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1
}));

const fetchDestination = jest.fn().mockImplementation(() => Promise.resolve({
  "id": 1,
  "location_name": "Red Rocks",
  "location_lat_lng": "12341, 123412"
}));

export {
  signinUser,
  signupUser,
  fetchDestination
}