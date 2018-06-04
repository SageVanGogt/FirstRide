const ridesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RIDES':
      return action.rides;
    case 'REMOVE_RIDES':
      return [];
    default: 
      return state;
  }
};

export default ridesReducer;