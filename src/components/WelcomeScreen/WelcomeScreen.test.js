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
    screen.getByText("About Experience Management Service");
    screen.getByText(/The Experience Management Service is the human-facing application*?/);
  });
});
