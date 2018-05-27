import { combineReducers } from 'redux';
import userReducer from './userReducer';
// import currentLocationReducer from './currentLocationReducer';
import { destinationReducer } from './destinationReducer';
// import pickupLocations from './pickupLocationsReducer';
import ridesReducer from './ridesReducer';

const rootReducer = combineReducers({
 user: userReducer,
 rides: ridesReducer,
//  currentLocation: currentLocationReducer,
 destination: destinationReducer,
//  pickupLocations: pickupLocationsReducer
});

export default rootReducer;