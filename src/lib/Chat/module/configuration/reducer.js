import { SET_CONFIGURATION } from './action-types';
import initialState from './initial-state';

const configuration = (state = initialState, action) => {
  switch (action.type) {

    case SET_CONFIGURATION:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default configuration;
