import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";

import Footer from "./Footer";

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

describe("Footer ", () => {
  test("does render", () => {
    act(() => {
      render(<Footer />);
    });

    screen.getByText("Contact US");
    screen.getByText("DOD Home Page");
  });
});
