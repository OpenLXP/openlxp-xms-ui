import { unmountComponentAtNode } from "react-dom";
import { render, act, screen, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Support from "./Support";

let container = null;

beforeEach(() => {
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
    screen.getByText("Support");
    screen.getByText("About");
    screen.getByText("Navigating the Expereince Management Service");
    screen.getByText("What is ECC?");
  });
});
