import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CatalogCard from "./CatalogCard";
import icon from "../../../../images/placeholder.jpg";

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

describe("CatalogCard ", () => {
  test("does render", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CatalogCard />
        </BrowserRouter>,
        container
      );
    });
    expect(container.textContent).toBe("");
    expect(screen.getByAltText("catalog image").src).toBe("");
    expect(screen.getByTestId("nav-link")).toBeVisible();
  });

  test("does render passed title", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CatalogCard title="Title" />
        </BrowserRouter>,
        container
      );
    });

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeVisible();
  });

  test("does render passed image", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CatalogCard img={icon} />
        </BrowserRouter>,
        container
      );
    });

    expect(screen.getByAltText("catalog image")).toBeInTheDocument();
    expect(screen.getByAltText("catalog image")).toBeVisible();
  });
});
