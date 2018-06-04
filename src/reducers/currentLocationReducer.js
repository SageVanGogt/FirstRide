const currentLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CURR_LOCATION":
      return action.location;
    case "REMOVE_CURR_LOCATION":
      return {};
    default: 
      return state;
  }
};

export default currentLocationReducer;