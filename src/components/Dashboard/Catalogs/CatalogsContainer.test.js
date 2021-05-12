import { render, act, screen } from "@testing-library/react";
import axios from "axios";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CatalogContainer from "./CatalogsContainer";

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

jest.mock("axios");

describe("CatalogsContainer", () => {
  test("shows error message when no data is shown.", async () => {
    await act(() => {
      axios.get.mockResolvedValueOnce(null);
      render(
        <BrowserRouter>
          <CatalogContainer />
        </BrowserRouter>,
        container
      );
    });
    expect(
      screen.getByText(
        "Error loading catalogs. Please contact an administrator"
      )
    ).toBeInTheDocument();
  });
});
