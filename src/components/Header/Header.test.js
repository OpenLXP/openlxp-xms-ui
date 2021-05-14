import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
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
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
    });

    screen.getByText("Sign In");
    screen.getByText("Home");
    screen.getByText("Experience Management Service");
    screen.getByText("Department of Defense");
  });
});
