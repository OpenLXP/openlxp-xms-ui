import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";

import Header from "./Header";
import { useAuth } from "../../context/authContext";

// mocking the useAuth hook
jest.mock('../../context/authContext', () => ({
  useAuth: jest.fn(),
}));
let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  useAuth.mockImplementation(() => ({
    user: false, login: () => {}
  }));
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Header", () => {
  test("does render", () => {
    act(() => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
    });

    screen.getByText("Sign In");
    screen.getByText("Home");
    screen.getByText("Support");
  });

  test("does take user to home when clicking home", () => {
    let testHistory, testLocation;
    act(() => {
      render(
        <MemoryRouter initialEntries={["/my/initial/route"]}>
          <Header />
          <Route
            path="/"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
            }}
          />
        </MemoryRouter>
      );

      const button = screen.getByText("Home");
      fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });

    expect(testLocation.pathname).toBe("/");
  });

  test("does take user to home when clicking Header Logo", () => {
    let testHistory, testLocation;
    act(() => {
      render(
        <MemoryRouter initialEntries={["/my/initial/route"]}>
          <Header />
          <Route
            path="/"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
            }}
          />
        </MemoryRouter>
      );

      const button = screen.getByTestId("home-btn");
      fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });

    expect(testLocation.pathname).toBe("/");
  });

  test("dose take user to Dashboard when clicking Sign In", () => {
    let testHistory, testLocation;
    act(() => {
      render(
        <MemoryRouter initialEntries={["/my/initial/route"]}>
          <Header />
          <Route
            path="/"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
            }}
          />
        </MemoryRouter>
      );

      const button = screen.getByText("Sign In");
      fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });

    expect(testLocation.pathname).toBe("/login");
  });

  test("dose take user to Dashboard when clicking Logout", () => {
    useAuth.mockImplementation(() => ({
      user: {user: {first_name: "jo", last_name: "smith"}}, logout: () => {}
    }));
    let testHistory, testLocation;
    act(() => {
      render(
        <MemoryRouter initialEntries={["/my/initial/route"]}>
          <Header />
          <Route
            path="/"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
            }}
          />
        </MemoryRouter>
      );

      const button = screen.getByText("Logout");
      fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });
  });
});
