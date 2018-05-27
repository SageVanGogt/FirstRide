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

const fetchRides = jest.fn().mockImplementation(() => Promise.resolve(
  {
    "id": 1,
    "location_id": 1,
    "driver_id": 1,
    "car_capacity": "5",
    "seats_remaining": "2",
    "car_type": "prius",
    "date": "6/1/2018",
    "time": "4:00pm"
  },
  {
      "id": 2,
      "location_id": 1,
      "driver_id": 2,
      "car_capacity": "5",
      "seats_remaining": "2",
      "car_type": "prius",
      "date": "6/1/2018",
      "time": "4:00pm"
  },
  {
      "id": 3,
      "location_id": 1,
      "driver_id": 3,
      "car_capacity": "2",
      "seats_remaining": "1",
      "car_type": "tesla roadster",
      "date": "6/1/2018",
      "time": "4:30pm"
  }
));

export {
  signinUser,
  signupUser,
  fetchDestination,
  fetchRides
}