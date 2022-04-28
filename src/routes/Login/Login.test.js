import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Testing Login Page", () => {
  test("Login page should have a title saying 'Welcome!", () => {
    render(<Login />);
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
  });

  test("Login page should have an email input", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText("Your email");
    expect(emailInput).toBeInTheDocument();
  });

  test("Login page should have a password input", () => {
    render(<Login />);
    const passwordInput = screen.getByPlaceholderText("Your password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("Login page should show error message if we click on login button and inputs are empty", () => {
    render(<Login />);
    expect(screen.getByText("Error")).not.toBeVisible();
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Error")).toBeVisible();
  });
});
