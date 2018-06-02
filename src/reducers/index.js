import { combineReducers } from 'redux';
import userReducer from './userReducer';
import currentLocationReducer from './currentLocationReducer';
import { destinationReducer } from './destinationReducer';
import pickupReducer from './pickupReducer';
import ridesReducer from './ridesReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import ridesAccountedReducer from './rideAccountedReducer';
import userRidesReducer from './userRidesReducer';

const rootReducer = combineReducers({
  user: userReducer,
  rides: ridesReducer,
  currentLocation: currentLocationReducer,
  destination: destinationReducer,
  pickupLocations: pickupReducer,
  profile: profileReducer,
  error: errorReducer,
  ridesAccounted: ridesAccountedReducer,
  userRides: userRidesReducer
});

export default rootReducer;