import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { login } from "../../actions/auth";
import store from "../../store/store";
import SignForm from "./SignForm";

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

describe("Testing SignForm Component", () => {
  test("Should have a title saying 'Welcome!", () => {
    render(<SignForm title="Welcome!" buttonText="Login" />, {
      wrapper: Wrapper,
    });
    expect(screen.getByText(/Welcome!/i)).toBeInTheDocument();
  });

  test("Should have an email input", () => {
    render(<SignForm title="Welcome!" buttonText="Login" />, {
      wrapper: Wrapper,
    });
    const emailInput = screen.getByPlaceholderText("Your email");
    expect(emailInput).toBeInTheDocument();
  });

  test("Should have a password input", () => {
    render(<SignForm title="Welcome!" buttonText="Login" />, {
      wrapper: Wrapper,
    });
    const passwordInput = screen.getByPlaceholderText("Your password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("Should show error message if we click on submit button and inputs are empty", () => {
    render(
      <SignForm title="Welcome!" buttonText="Login" signFunction={login} />,
      {
        wrapper: Wrapper,
      }
    );
    expect(screen.getByTestId("error-message")).not.toBeVisible();
    userEvent.click(screen.getByText("Login"));
    setTimeout(() => {
      expect(screen.getByTestId("error-message")).toBeVisible();
    }, 1000);
  });
});
