import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import SignForm from "./SignForm";

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

describe("Testing Register Page", () => {
  test("Register page should have a title saying 'Sign up!", () => {
    render(<SignForm />, { wrapper: Wrapper });
    expect(screen.getByText(/Sign up!/i)).toBeInTheDocument();
  });

  test("Register page should have an email input", () => {
    render(<SignForm />, { wrapper: Wrapper });
    const emailInput = screen.getByPlaceholderText("Your email");
    expect(emailInput).toBeInTheDocument();
  });

  test("Register page should have a password input", () => {
    render(<SignForm />, { wrapper: Wrapper });
    const passwordInput = screen.getByPlaceholderText("Your password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("Register page should show error message if we click on 'Create account' button and inputs are empty", () => {
    render(<SignForm />, { wrapper: Wrapper });
    expect(screen.getByText("Error")).not.toBeVisible();
    userEvent.click(screen.getByText("Login"));
    expect(screen.getByText("Error")).toBeVisible();
  });
});
