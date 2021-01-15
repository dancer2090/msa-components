import { SET_CONFIGURATION } from './action-types';

const setConfiguration = (config) => ({
  type: SET_CONFIGURATION,
  payload: config,
});

export const initConfiguration = (props) => (dispatch, getState) => {
  dispatch(setConfiguration(props));
};
