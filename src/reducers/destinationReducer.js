export const destinationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DESTINATION': 
      return action.destination;
    case "REMOVE_DESTINATION":
      return {};
    default:
      return state;
  }
};