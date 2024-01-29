'use strict';

import { unmountComponentAtNode } from "react-dom";
import { render, act, screen, fireEvent } from "@testing-library/react";
import {
  BrowserRouter,
  MemoryRouter,
  StaticRouter,
  Route,
} from "react-router-dom";
import { useAuthenticatedUser } from "@/__mocks__/predefinedMocks";
import MainPage from "../../pages/index";

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

describe("MainPage", () => {
  test("does render", () => {
    useAuthenticatedUser();
    act(() => {
      render(
        <StaticRouter location={{ pathname: "/" }}>
          <MainPage />
        </StaticRouter>
      );
    });

    screen.getByText("About Experience Management Service");
    screen.getByText("Sign In");
  });
});
