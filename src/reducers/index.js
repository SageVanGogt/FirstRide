import { combineReducers } from 'redux';
import userReducer from './userReducer';
import currentLocationReducer from './currentLocationReducer';
import { destinationReducer } from './destinationReducer';
import pickupReducer from './pickupReducer';
import ridesReducer from './ridesReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
 user: userReducer,
 rides: ridesReducer,
 currentLocation: currentLocationReducer,
 destination: destinationReducer,
 pickupLocations: pickupReducer,
 error: errorReducer
});

export default rootReducer;