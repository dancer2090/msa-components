import React, {createContext, useReducer} from 'react';
import initialState from './initial-state';
import { SET_PAGE } from './action-types';

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children, ...props } ) => {
  const { configuration } = props;
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case SET_PAGE:
        const newState = {...initialState, portal: 'nurse'};
        return newState;
      default:
        return state;
    };
  }, initialState);

  return <Provider value={{ state: { ...state, configuration }, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
export default store;
