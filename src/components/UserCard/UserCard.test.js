import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserCard from "./UserCard";

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

describe("Testing User Card Component", () => {
  test("Should render component successfully", () => {
    const mockedUser = {
      id: 1,
      first_name: "Bob",
      last_name: "Marley",
      email: "bobmarley@gmail.com",
      avatar: "http://example.com/",
    };
    render(<UserCard user={mockedUser} />, { wrapper: Wrapper });
    expect(
      screen.getByText(`${mockedUser.first_name} ${mockedUser.last_name}`)
    ).toBeInTheDocument();
    expect(screen.getByText(mockedUser.email)).toBeInTheDocument();
    expect(
      screen.getByAltText(`${mockedUser.first_name} ${mockedUser.last_name}`)
        .src
    ).toEqual(mockedUser.avatar);
  });
});
