export const addCurrentLocation = (location) => {
  return ({
    type: "ADD_CURR_LOCATION",
    location
  });
};

export const removeCurrentLocation = () => {
  return ({
    type: "REMOVE_CURR_LOCATION"
  });
};