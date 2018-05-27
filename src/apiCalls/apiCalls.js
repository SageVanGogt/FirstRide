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
  const url = `http://localhost:3000/api/rides/get/${location}`;
}

export {
  signinUser,
  signupUser,
  fetchDestination,
  fetchRides
}