
export const addUserRides = (rides) => {
  return ({
    type: "ADD_USER_RIDES",
    rides
  });
}

export const removeUserRides = () => {
  return ({
    type: "REMOVE_USER_RIDES"
  });
}