import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserList from "./UserList";
import store from "../../store/store";
import React from "react";

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

describe("Testing User List Page", () => {
  test("Should show empty message at the beginning and a user list after a while due async call", async () => {
    const mockedUsers = [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
    ];
    render(<UserList />, { wrapper: Wrapper });
    expect(screen.getByText("No users were found")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryAllByRole("listitem").length).toBe(mockedUsers.length);
    });
  });
});
