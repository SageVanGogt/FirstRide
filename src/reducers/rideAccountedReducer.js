const ridesAccountedReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RIDES_ACCOUNTED':
      return action.ridesAccounted;
    default: 
      return state;
  };
};

export default ridesAccountedReducer;