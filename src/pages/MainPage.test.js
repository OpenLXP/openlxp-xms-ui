import { unmountComponentAtNode } from "react-dom";
import { render, act, screen, fireEvent } from "@testing-library/react";
import {
  BrowserRouter,
  MemoryRouter,
  StaticRouter,
  Route,
} from "react-router-dom";
import MainPage from "./MainPage";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("MainPage", () => {
  test("does render", () => {
    act(() => {
      render(
        <StaticRouter location={{ pathname: "/" }}>
          <MainPage />
        </StaticRouter>
      );
    });

    // screen.getByText("Welcome!");
    screen.getByText("Sign In");
  });
});
