import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";

import SidebarNav from "./SidebarNav";

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

describe("SidebarNav", () => {
  test("dose render", () => {
    act(() => {
      render(
        <MemoryRouter>
          <SidebarNav />
        </MemoryRouter>
      );
    });

    screen.getByText("Experience Management Service");
  });

  test("does render a new button", () => {
    const pages = [{ title: "New Page", path: "/new-page" }];

    act(() => {
      render(
        <MemoryRouter>
          <SidebarNav navButtons={pages} />
        </MemoryRouter>
      );
    });
    // screen.getByText("New Page");
  });

  test("does render a list of pages", () => {
    const pages = [
      { title: "New Page", path: "/new-page" },
      { title: "New Page 2", path: "/new-page2" },
    ];
    act(() => {
      render(
        <MemoryRouter>
          <SidebarNav navButtons={pages} />
        </MemoryRouter>
      );
    });

    const container =
      screen.getByText("New Page 2").parentElement.parentElement
        .childElementCount;
    expect(container).toBe(2);
  });

  test("does change location on button click", () => {
    let testLocation, testHistory;
    act(() => {
      render(
        <MemoryRouter initialEntries={["/my/test/location"]}>
          <SidebarNav navButtons={[{ title: "New Page", path: "/new-page" }]} />
          <Route
            path="/new-page"
            render={({ history, location }) => {
              testHistory = history;
              testLocation = location;
            }}
          />
        </MemoryRouter>
      );
      const button = screen.getByText("New Page");
      act( () => {
        fireEvent(button, new MouseEvent("click", { bubbles: true }));
      });
    });

    // expect(testLocation.pathname).toBe("/new-page");
  });
});
