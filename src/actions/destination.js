export const setDestination = (location) => {
  return ({
    type: 'SET_DESTINATION',
    destination: location
  });
};

export const removeDestination = () => {
  return ({
    type: "REMOVE_DESTINATION"
  });
};