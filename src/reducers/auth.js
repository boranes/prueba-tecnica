import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const initialState = currentUser
  ? { isLoggedIn: true, currentUser }
  : { isLoggedIn: false, currentUser: null };

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload.currentUser,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload.currentUser,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
