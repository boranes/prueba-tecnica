import * as ReactRedux from "react-redux";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../store/store";
import Header from "./Header";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(() => {}),
}));

describe("Testing Header Component", () => {
  test("Should exist a button with 'Logout' text", () => {
    render(<Header />);
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });

  test("Should call logout function if Logout Button is clicked", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    render(<Header />);
    userEvent.click(screen.getByText("Logout"));
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
