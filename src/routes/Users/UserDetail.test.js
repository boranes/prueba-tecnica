import { render, screen, waitFor } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import UserService from "../../services/Users/users.service";
import UserDetail from "./UserDetail";

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    userId: 2,
  }),
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Testing UserDetail Page", () => {
  test("Should have correct avatar", async () => {
    let mockedUser = [];
    UserService.getUser(2).then((data) => {
      mockedUser = data.data;
    });

    useSelector.mockImplementation((callback) => {
      return callback({ auth: { isLoggedIn: true, currentUser: "1234" } });
    });

    render(<UserDetail />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(
        screen.getByAltText(`${mockedUser.first_name} ${mockedUser.last_name}`)
          .src
      ).toEqual(mockedUser.avatar);
    });
  });
});
