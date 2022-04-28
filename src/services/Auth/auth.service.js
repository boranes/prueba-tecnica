import ContentType from "../../utils/ContentType";
import HTTPMethods from "../../utils/HTTPMethods";
import APIService from "../api.service";

const register = async (email, password) => {
  const url = APIService.buildUrl("/register");
  return authBaseCall(url, email, password);
};

const login = async (email, password) => {
  const url = APIService.buildUrl("/login");
  return authBaseCall(url, email, password);
};

const logout = () => {
  localStorage.removeItem("currentUser");
};

const authBaseCall = async (url, email, password) => {
  const options = {
    headers: {
      "Content-Type": ContentType.JSON,
    },
    body: JSON.stringify({ email, password }),
    method: HTTPMethods.POST,
  };
  return APIService.call(url, options);
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
