import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
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

describe("Testing UserDetail Page", () => {
  test("UserDetail User data has to be same as mocked User", async () => {
    let mockedUser = [];
    UserService.getUser(2).then((data) => {
      mockedUser = data.data;
    });

    render(<UserDetail />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(
        screen.getByText(`${mockedUser.first_name} ${mockedUser.last_name}`)
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(mockedUser.email)).toBeInTheDocument();
    });
  });
});
