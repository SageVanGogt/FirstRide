const signinUser = async (user) => {

} 

const signupUser = async (user) => {

} 

const fetchDestination = async (name) => {
  const url = `http://localhost:3000/api/locations/${name}`;
  const response = await fetch(url);
  const destination = await response.json();
  return destination;
}

export {
  signinUser,
  signupUser,
  fetchDestination
}