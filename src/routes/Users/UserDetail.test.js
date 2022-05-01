import { render, screen, waitFor } from "@testing-library/react";
import UserService from "../../services/Users/users.service";
import UserDetail from "./UserDetail";

jest.mock("react-router-dom", () => ({
  useParams: () => ({
    userId: 2,
  }),
}));

describe("Testing User Detail Page", () => {
  test("UserDetail User data has to be same as mocked User", async () => {
    let mockedUser = [];
    UserService.getUser(1).then((data) => {
      mockedUser = data.data;
    });
    render(<UserDetail />);
    await waitFor(() => {
      expect(screen.getByText(mockedUser.first_name)).toBeInTheDocument();
    });
  });
});
