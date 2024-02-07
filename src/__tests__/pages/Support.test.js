'use strict';

import { unmountComponentAtNode } from "react-dom";
import { render, act, screen, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Support from "../../pages/support";
import { useAuthenticatedUser } from "@/__mocks__/predefinedMocks";

let container = null;

beforeEach(() => {
  useAuthenticatedUser();
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Support page", () => {
  test("does render", () => {
    act(() => {
      render(
        <StaticRouter location={{ pathname: "/support" }}>
          <Support />
        </StaticRouter>
      );
    });
    expect(screen.getAllByText('Support').length).toBe(2);
    screen.getByText("About");
    screen.getByText("Navigating the Expereince Management Service");
    screen.getByText("What is ECC?");

    const button = screen.getByText("What is ECC?");
      fireEvent(button, new MouseEvent("click", { bubbles: true }));

  });
});
