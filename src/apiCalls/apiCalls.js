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

export {
  signinUser,
  signupUser,
  fetchDestination,
  fetchRides,
  fetchPickups,
  fetchGeocode
}