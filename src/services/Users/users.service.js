import ContentType from "../../utils/ContentType";
import HTTPMethods from "../../utils/HTTPMethods";
import APIService from "../api.service";

const getUsers = async (page = 1) => {
  let url = APIService.buildUrl("/users?per_page=3");
  if (page > 1) url = url.concat(`&page=${page}`);
  return APIService.call(url);
};

const getUser = async (id) => {
  const url = APIService.buildUrl(`/users/${id}`);
  return APIService.call(url);
};

const updateUser = async (user) => {
  const url = APIService.buildUrl(`/users/${user.id}`);
  const options = {
    headers: {
      "Content-Type": ContentType.JSON,
    },
    body: JSON.stringify(user),
    method: HTTPMethods.PUT,
  };
  return APIService.call(url, options);
};

const deleteUser = async (id) => {
  const url = APIService.buildUrl(`/users/${id}`);
  const options = {
    headers: {
      "Content-Type": ContentType.JSON,
    },
    method: HTTPMethods.DELETE,
  };
  return APIService.call(url, options);
};

const UserService = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};

export default UserService;
