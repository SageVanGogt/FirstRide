const ridesAccountedReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_RIDES_ACCOUNTED':
      return action.ridesAccounted;
    case 'REMOVE_RIDE_ACCOUNTED':
      // let newState = [...state]
      // let updatedState = newState.filter(eachRide => {
      //   return (eachRide.ride_id !== action.ride.ride_id & eachRide.passenger_id !== action.ride.passenger_id)
      // })
      return [...state].filter(eachRide => (
        eachRide.ride_id && eachRide.passenger_id !==
        action.ride.ride_id && action.ride.passenger_id
      ));
    default: 
      return state;
  };
};

export default ridesAccountedReducer;