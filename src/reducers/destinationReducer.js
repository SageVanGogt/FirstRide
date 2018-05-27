export const destinationReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_DESTINATION': 
      return action.destination;
    default:
      return state;
  }
}