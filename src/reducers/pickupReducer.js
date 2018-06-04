const pickupReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PICKUPS':
      return action.pickups;
    case 'TOGGLE_SHOWING':
      const toggledState = [...state.map(location => {
        if (location.id === action.pickup.id) {
          location.isShowing = !location.isShowing
        }
        return location
      })]
      return toggledState;
    case 'ADD_NEW_PICKUP':
      return [...state, action.pickup];
    case 'REMOVE_PICKUPS':
      return [];
    default:
      return state;
  }
}

export default pickupReducer;