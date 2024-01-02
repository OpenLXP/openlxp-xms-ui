'use strict';

import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import NavBar from "../../../../components/Header/NavBar/NavBar";

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

describe("NavBar", () => {
  test("does render", () => {
    act(() => {
      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
    });
    expect(screen.getByTestId("navbar-menu")).toBeInTheDocument();
  });

  test("does render buttons", () => {
    act(() => {
      const button = [{ name: "test", testId: "test-id", route: "/" }];
      render(
        <BrowserRouter>
          <NavBar navButtons={button} />
        </BrowserRouter>
      );
    });
    screen.getByText("test");
    screen.getByTestId("test-id");
  });
});
