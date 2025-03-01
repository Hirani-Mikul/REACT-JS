import { UPDATE_WINDOW_WIDTH } from '../constants/dimensionConstant';
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../constants/userConstant';

export const userListReducers = (
  state = { loading: true, users: [] },
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
export const styleValues = (
  state = { showCards: true, applyStyle: false, isActive: false },
  action
) => {
  switch (action.type) {
    case UPDATE_WINDOW_WIDTH:
      return {
        showCards: action.payload.showCards,
        applyStyle: action.payload.applyStyle,
        isActive: action.payload.isActive,
      };
    default:
      return state;
  }
};
