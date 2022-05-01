import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

describe("Testing UserForm Component", () => {
  test("Should have three inputs with First Name, Last Name and Email values", async () => {
    const mockedUser = {
      id: 1,
      first_name: "Bob",
      last_name: "Marley",
      email: "bobmarley@gmail.com",
      avatar: "http://example.com/",
    };
    render(<UserForm user={mockedUser} />);
    expect(
      screen.getByDisplayValue(`${mockedUser.first_name}`)
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue(`${mockedUser.last_name}`)
    ).toBeInTheDocument();

    expect(screen.getByDisplayValue(mockedUser.email)).toBeInTheDocument();
  });
});
