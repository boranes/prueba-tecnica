import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
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

const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

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

  test("Error message should not be in the document until the submit button is pressed, then it should disappear after 2600ms", async () => {
    const mockFn = jest.fn(() => () => Promise.reject("Error"));
    const buttonText = "Create account";
    const errorMessageTestId = "error-message";

    render(
      <SignForm
        title="Sign up"
        buttonText={buttonText}
        signFunction={mockFn}
      />,
      {
        wrapper: Wrapper,
      }
    );

    expect(screen.queryByTestId(errorMessageTestId)).not.toBeInTheDocument();

    userEvent.click(screen.getByText(buttonText));

    expect(mockFn).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.getByTestId(errorMessageTestId)).toBeInTheDocument();
    });

    await waitForElementToBeRemoved(
      () => screen.queryByTestId(errorMessageTestId),
      { timeout: 2600 }
    );
  });

  test("Should navigate after successful login or register action", async () => {
    const mockFn = jest.fn(() => () => Promise.resolve("OK"));
    const buttonText = "Create account";

    render(
      <SignForm
        title="Sign up"
        buttonText={buttonText}
        signFunction={mockFn}
      />,
      {
        wrapper: Wrapper,
      }
    );

    userEvent.click(screen.getByText(buttonText));

    await waitFor(() => {
      expect(mockedNavigator).toHaveBeenCalled();
    });
  });
});
