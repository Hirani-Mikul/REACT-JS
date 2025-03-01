import axios from 'axios';
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../constants/userConstant';
import { UPDATE_WINDOW_WIDTH } from '../constants/dimensionConstant';

export const listUsers = () => async (dispatch) => {
  dispatch({
    type: USER_LIST_REQUEST,
  });

  try {
    const { data } = await axios.get('/api/users');
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: err.message,
    });
  }
};
export const windowWidth = (val) => async (dispatch) => {
  dispatch({
    type: UPDATE_WINDOW_WIDTH,
    payload: val,
  });
};
