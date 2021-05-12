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

    expect(screen.getByTestId("catalog-list")).toBeInTheDocument();
  });

  test("does render when empty data is passed", () => {
    act(() => {
      const data = [];

      render(
        <BrowserRouter>
          <CatalogList catalogs={data} />
        </BrowserRouter>,
        container
      );
    });

    expect(screen.getByTestId("catalog-list")).toBeInTheDocument();
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

    expect(screen.getByText("DAU").parentElement.childElementCount).toBe(2);
    expect(screen.getByText("DAU")).toBeInTheDocument();
    expect(screen.getByText("edX")).toBeInTheDocument();
  });
});
