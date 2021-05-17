import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import WelcomeScreen from "./WelcomeScreen";

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

describe("WelcomeScreen", () => {
  test("does render", () => {
    act(() => {
      render(<WelcomeScreen />, container);
    });
    screen.getByText("Welcome!");
    screen.getByText("DOD - Experience Management Service");
    screen.getByText(/Lorem ipsum*?/);
  });
});
