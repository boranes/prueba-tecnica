import { render, screen, waitFor } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserList from "./UserList";
import store from "../../store/store";
import React from "react";
import UserService from "../../services/Users/users.service";

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Testing User List Page", () => {
  test("There should be 0 users at the beginning and expect same length of users after user service response", async () => {
    let mockedUsers = [];
    UserService.getUsers(1).then((data) => {
      mockedUsers = data.data;
    });

    useSelector.mockImplementation((callback) => {
      return callback({ auth: { isLoggedIn: true, currentUser: "1234" } });
    });

    render(<UserList />, { wrapper: Wrapper });

    expect(screen.queryAllByRole("listitem").length).toBe(0);

    await waitFor(() => {
      expect(screen.queryAllByRole("listitem").length).toBe(mockedUsers.length);
    });
  });
});
