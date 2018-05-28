const pickupReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PICKUPS':
      return action.pickups;
    default:
      return state;
  }
}

export default pickupReducer;