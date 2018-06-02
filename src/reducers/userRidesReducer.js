
const userRidesReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_USER_RIDES":
      return action.userRides;
    case "REMOVE_USER_RIDES":
      return [];
    default: 
      return state;
  }
}

export default userRidesReducer;