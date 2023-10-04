'use strict';

import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";

import DashboardHeaderIcon from "./DashboardHeaderIcon";

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

describe("DashboardHeaderIcon", () => {
  test("does render", () => {
    act(() => {
      render(
        <MemoryRouter>
          <DashboardHeaderIcon />
        </MemoryRouter>
      );
    });
    screen.getByText("Experience Management Service");
  });

  test("does change location to home on click", () => {
    let testLocation, testHistory;
    act(() => {
      render(
        <MemoryRouter initialEntries={["/my/test/location"]}>
          <DashboardHeaderIcon />
          <Route
            props="/"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
            }}
          />
        </MemoryRouter>
      );

      const button = screen.getByText("Experience Management Service");
      fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });

    expect(testLocation.pathname).toBe("/");
  });
});
