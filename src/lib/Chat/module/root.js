import { combineReducers } from 'redux';
import configuration from './configuration/reducer';
import application from './application/reducer';

const rootReducer = combineReducers({
  configuration,
  application,
});

export default rootReducer;
