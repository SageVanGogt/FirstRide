export const addRidesAccounted = (ridesAccounted) => {
  return ({
    type: "ADD_RIDES_ACCOUNTED",
    ridesAccounted
  })
}

export const removeRideAccounted = (ride) => {
  return ({
    type: 'REMOVE_RIDE_ACCOUNTED',
    ride
  });
};