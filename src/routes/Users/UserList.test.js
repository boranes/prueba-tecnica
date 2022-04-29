import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import UserList from "./UserList";
import store from "../../store/store";

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

describe("Testing User List Page", () => {
  test("Should show empty message if UserList is empty", () => {
    render(<UserList />, { wrapper: Wrapper });
    expect(screen.getByText("No users were found")).toBeInTheDocument();
  });

  test("Should render a list of users", () => {
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
    const renderedUsers = screen.getAllByRole("listitem");
    expect(renderedUsers.length).toEqual(mockedUsers.length);
  });
});
