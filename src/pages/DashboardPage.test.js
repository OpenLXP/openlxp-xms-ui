import { render, act, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { unmountComponentAtNode } from "react-dom";
import {
  BrowserRouter,
  MemoryRouter,
  StaticRouter,
  Route,
} from "react-router-dom";
import DashboardPage from "./DashboardPage";

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

jest.mock("axios");

describe("DashboardPage", () => {
  test("does render", async () => {
    await act(async () => {
      const data = ["Test Name 1", "Test Name 2", "Test Name 3"];
      const response = { data: data };

      axios.get.mockResolvedValue(response);

      render(
        <StaticRouter location={{ pathname: "/dashboard" }}>
          <DashboardPage />
        </StaticRouter>
      );
    });
    screen.getByText("Catalogs");
    screen.getByText("Experience Management Service");
    screen.getByText("Test Name 1");
    screen.getByText("Test Name 2");
  });
});
