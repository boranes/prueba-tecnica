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
});
