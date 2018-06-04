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

export const addSinglePickup = (pickup) => {
  return ({
    type: 'ADD_NEW_PICKUP',
    pickup
  });
};