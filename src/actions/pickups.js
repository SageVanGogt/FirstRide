export const addPickups = (pickups) => {
  return ({
    type: 'ADD_PICKUPS',
    pickups
  })
}

export const updatePickupShowing = (pickup) => {
  return ({
    type: "TOGGLE_SHOWING",
    pickup
  });
}