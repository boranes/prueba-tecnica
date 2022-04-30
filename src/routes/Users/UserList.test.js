import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
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

describe("Testing User List Page", () => {
  test("Should show empty message at the beginning and a user list after a while due async call", async () => {
    let mockedUsers = [];
    UserService.getUsers(1).then((data) => {
      mockedUsers = data.data;
    });
    render(<UserList />, { wrapper: Wrapper });
    expect(screen.getByText("No users were found")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryAllByRole("listitem").length).toBe(mockedUsers.length);
    });
  });
});
