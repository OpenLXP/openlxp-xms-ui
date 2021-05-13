import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CatalogList from "./CatalogList";

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

describe("Catalog List", () => {
  test("does render when no data is passed", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CatalogList />
        </BrowserRouter>,
        container
      );
    });

    screen.getByTestId("catalog-list");
  });

  test("does render catalog header", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CatalogList />
        </BrowserRouter>,
        container
      );
    });
    screen.getByText("Course Catalogs");
  });

  test("does not render when empty data is passed", () => {
    act(() => {
      const data = [];

      render(
        <BrowserRouter>
          <CatalogList catalogs={data} />
        </BrowserRouter>,
        container
      );
    });

    screen.getByTestId("catalog-list");
  });

  test("does render catalog cards when passed data", () => {
    act(() => {
      const data = ["DAU", "edX"];
      render(
        <BrowserRouter>
          <CatalogList catalogs={data} />
        </BrowserRouter>,
        container
      );
    });

    screen.getByText("DAU");
    screen.getByText("edX");
  });
});
