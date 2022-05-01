import AuthService from "../services/Auth/auth.service";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

export const register = (email, password) => (dispatch) => {
  return AuthService.register(email, password).then(
    ({ token, error }) => {
      if (token) {
        localStorage.setItem("currentUser", JSON.stringify(token));
        dispatch({
          type: REGISTER_SUCCESS,
          payload: { currentUser: token },
        });
        return Promise.resolve();
      }
      if (error) {
        dispatch({
          type: REGISTER_FAIL,
        });
        return Promise.reject(error);
      }
    },
    ({ error }) => {
      dispatch({
        type: REGISTER_FAIL,
      });
      return Promise.reject(error);
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    ({ token, error }) => {
      if (token) {
        localStorage.setItem("currentUser", JSON.stringify(token));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { currentUser: token },
        });
        return Promise.resolve();
      }
      if (error) {
        dispatch({ type: LOGIN_FAIL });
        return Promise.reject(error);
      }
    },
    ({ error }) => {
      dispatch({ type: LOGIN_FAIL });
      return Promise.reject(error);
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
