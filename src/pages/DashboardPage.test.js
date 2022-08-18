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
// import MockAxios from 'jest-mock-axios';


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

      // axios.get.mockResolvedValue(response);
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: data })
      );

      // MockAxios.get.mockImplementation(() =>
      //   Promise.resolve(response)
      // );

      render(
        <StaticRouter location={{ pathname: "/dashboard" }}>
          <DashboardPage />
        </StaticRouter>
      );
    });
    screen.getByText("Catalogs");
    screen.getByText("Error loading catalogs. Please contact an administrator");
    // screen.getByText("Test Name 1");
    // screen.getByText("Test Name 2");
  });
});
