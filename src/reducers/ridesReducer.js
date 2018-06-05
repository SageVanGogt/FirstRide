const ridesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RIDES':
      return action.rides;
    case 'REMOVE_RIDES':
      return [];
    case "ADD_NEW_RIDE":
      return [...state, action.ride];
    default: 
      return state;
  }
};

export default ridesReducer;