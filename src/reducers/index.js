import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import currentLocationReducer from './currentLocationReducer';
import { destinationReducer } from './destinationReducer';
// import pickupLocations from './pickupLocationsReducer';

const rootReducer = combineReducers({
 user: userReducer,
//  currentLocation: currentLocationReducer,
 destination: destinationReducer,
//  pickupLocations: pickupLocationsReducer
});

export default rootReducer;