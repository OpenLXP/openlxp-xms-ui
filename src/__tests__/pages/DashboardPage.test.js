'use strict';

import { render, act, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { unmountComponentAtNode } from "react-dom";
import { StaticRouter } from "react-router-dom";
import DashboardPage from "../../pages/dashboard";
import mockAxios from 'jest-mock-axios';
import { useAuthenticatedUser } from "@/__mocks__/predefinedMocks";

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
  useAuthenticatedUser();
  test("does render", async () => {
    await act(async () => {
      const data = ["Test Name 1", "Test Name 2", "Test Name 3"];
      const response = { data: data };

      // axios.get.mockResolvedValue(response);
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(response)
      );


      render(
        <StaticRouter location={{ pathname: "/dashboard" }}>
          <DashboardPage />
        </StaticRouter>
      );
    });
    // screen.getByText("Catalogs");
    screen.getByText("Error loading catalogs. Please contact an administrator");
  });
});
