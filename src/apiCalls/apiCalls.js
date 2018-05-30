import { geoKey } from './../apiKey';

const signinUser = async (user) => {
  const url = 'http://localhost:3000/api/users/';
  const init = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch(url, init);
  const profile = await response.json();
  return profile;
} 

const signupUser = async (user) => {

} 

const fetchDestination = async (name) => {
  const url = `http://localhost:3000/api/locations/${name}`;
  const response = await fetch(url);
  const destination = await response.json();
  return destination;
}

const fetchRides = async (destination) => {
  const url = `http://localhost:3000/api/rides/get/${destination}`;
  const body = {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch(url, body);
  const rides = await response.json();
  return rides;
}

const fetchPickups = async (location) => {
  const url = `http://localhost:3000/api/pickup/get/${location}`;
  const body = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const pickups = await response.json();
  return pickups;
}

const fetchGeocode = async (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoKey}`;  
  const response = await fetch(url);
  const locationData = await response.json();
  return locationData
} 

const submitNewRide = async (ride) => {
  const url = `http://localhost:3000/api/rides/new`;
  const body = {
    method: 'POST',
    body: JSON.stringify(ride),
    headers: {
      "Content-Type": "application/json"        
    }
  };
  const response = await fetch(url, body);
  const rideId = await response.json();
  return rideId;
}

const submitNewPickup = async (location) => {
  const url = `http://localhost:3000/api/pickup/new`;
  const body = {
    method: 'POST',
    body: JSON.stringify(location),
    headers: {
      "Content-Type": "application/json"        
    }
  };
  const response = await fetch(url, body);
  const pickupId = await response.json();
  return pickupId;
}

const fetchRidesPassengers = async (rideId) => {
  const url = `http://localhost:3000/api/rides_passengers/get/passengers/${rideId}`;
  const body = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, body);
  const passengers = await response.json();
  return passengers;
}

const postRidesPassengers = async (newPassenger) => {
  const url = `http://localhost:3000/api/rides_passengers/new`;   
  const body = {
    method: "POST",
    body: JSON.stringify(newPassenger),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, body);
} 

export {
  signinUser,
  signupUser,
  fetchDestination,
  fetchRides,
  fetchPickups,
  fetchGeocode,
  submitNewRide,
  submitNewPickup,
  fetchRidesPassengers,
  postRidesPassengers
}