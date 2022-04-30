import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("Testing User Card Component", () => {
  test("Should render component successfully", () => {
    const mockedUser = {
      id: 1,
      first_name: "Bob",
      last_name: "Marley",
      email: "bobmarley@gmail.com",
      avatar: "http://example.com",
    };
    render(<UserCard user={mockedUser} />);
    expect(screen.getByText(mockedUser.first_name)).toBeInTheDocument();
    expect(screen.getByText(mockedUser.last_name)).toBeInTheDocument();
    expect(screen.getByText(mockedUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockedUser.avatar)).toBeInTheDocument();
  });
});
