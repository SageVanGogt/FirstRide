
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

export const addNewRide = (ride) => {
  return ({
    type: "ADD_NEW_RIDE",
    ride
  });
};