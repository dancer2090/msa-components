import { combineReducers } from 'redux';
import configuration from './configuration/reducer';
import application from './application/reducer';
import chat from './chat/reducer';

const rootReducer = combineReducers({
  configuration,
  application,
  chat,
});

export default rootReducer;
