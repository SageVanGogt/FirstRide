import { geoKey } from './../apiKey';

const signinUser = async (user) => {
  const url = 'http://localhost:3000/api/users/';
  const init = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, init);
  const profile = await response.json();
  return profile;
}; 

const signupUser = async (user) => {
  const url = 'http://localhost:3000/api/users/new';
  const body = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const userRecieved = await response.json();
  return userRecieved;
};

const fetchDestination = async (name) => {
  const url = `http://localhost:3000/api/locations/${name}`;
  const response = await fetch(url);
  const destination = await response.json();
  return destination;
};

const fetchRides = async (destination) => {
  const url = `http://localhost:3000/api/rides/get/${destination}`;
  const body = {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const rides = await response.json();
  return rides;
};

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
};

const fetchGeocode = async (address) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geoKey}`;  
  try {
    const response = await fetch(url);
    const locationData = await response.json();
    if (!locationData) {
      return new Error('error')
    }
    return locationData;
  } catch (error) {
    throw error;
  }
}; 

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
};

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
};

const fetchRidesPassengers = async (locationId) => {
  const url = `http://localhost:3000/api/rides_passengers/get/passengers/${locationId}`;
  const body = {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const response = await fetch(url, body);
  const passengers = await response.json();
  return passengers;
};

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
  const ridePassenger = await response.json();
  return ridePassenger;
};

const postNewProfile = async (profile) => {
  const url = `http://localhost:3000/api/profiles/new`;
  const body = {
    method: "POST",
    body: JSON.stringify(profile),
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const profileInfo = await response.json();
  return profileInfo;
};

const removePassengerRide = async (rideId, passengerId, destinationId) => {
  const url = `http://localhost:3000/api/rides/${rideId}/passengers/${passengerId}/destination/${destinationId}`; 
  const body = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const deletedId = await response.json();
  return deletedId;
};

const fetchUserRides = async (userId) => {
  const url = `http://localhost:3000/api/rides_passengers/get/rides/${userId}`;
  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const rides = response.json();
  return rides;
};

const fetchRidesFromUser = async (rideId) => {
  const url = `http://localhost:3000/api/rides/${rideId}/get/user/`;
  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(url, body);
  const ridesInfo = await response.json();
  return ridesInfo;
};

const reverseGeoCode = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${geoKey}`;
  const response = await fetch(url);
  const geoData = await response.json();
  return geoData;
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
  postRidesPassengers,
  postNewProfile,
  removePassengerRide,
  fetchUserRides,
  fetchRidesFromUser,
  reverseGeoCode
};