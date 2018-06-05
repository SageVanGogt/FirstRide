const ridesAccountedReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RIDES_ACCOUNTED':
      return action.ridesAccounted;
    case 'REMOVE_RIDE_ACCOUNTED':
      return [...state].filter(eachRide => eachRide.id !== action.ride);
    default: 
      return state;
  };
};

export default ridesAccountedReducer;