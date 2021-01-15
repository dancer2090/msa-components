import { combineReducers } from 'redux';
import configuration from './configuration/reducer';

const rootReducer = combineReducers({
  configuration
});

export default rootReducer;
