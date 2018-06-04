
export const addRides = (rides) => {
  return ({
    type: 'ADD_RIDES',
    rides
  });
};

export const removeRides = () => {
  return ({
    type: 'REMOVE_RIDES'
  });
};