import { SET_CONFIGURATION } from './action-types';

export const setConfiguration = (config) => ({
  type: SET_CONFIGURATION,
  payload: config,
});

// export const initConfiguration = (props) => {
//   dispatch(setConfiguration(props));
// };
