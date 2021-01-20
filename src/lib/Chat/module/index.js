import { createStore } from 'redux';
import rootReducer from './root';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
