const ridesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RIDES':
      return action.rides;
    default: 
      return state;
  }
}

export default ridesReducer;