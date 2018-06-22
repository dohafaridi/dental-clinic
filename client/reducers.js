/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import intl from './modules/Intl/IntlReducer';
import services from './modules/Service/ServiceReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  intl,
  services,
});
