const currentLocationReducer = (state = {}, action) => {
  switch(action.type) {
    case "ADD_CURR_LOCATION":
      return action.location;
    default: 
      return state;
  }
}

export default currentLocationReducer;