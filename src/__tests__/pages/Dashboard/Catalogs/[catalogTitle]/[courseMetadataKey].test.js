'use strict';

import { fireEvent, act, screen, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";
import CourseDataContainerV2 from "../../../../../pages/dashboard/[catalogTitle]/[courseMetadataKey]";
import { MemoryRouter } from "react-router-dom";
import MockAxios from 'jest-mock-axios';
import { useAuth } from "../../../../../context/authContext"

jest.mock('../../../../../context/authContext', () => ({
  useAuth: jest.fn(),
}));

let container = null;
beforeEach(() => {
  useAuth.mockImplementation(() => ({
    user: { 
      user: {
        id: '1',
        first_name: 'Test',
        last_name: 'User',
        email: 'test@test.com',
    }},
  }));
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  MockAxios.reset();
  container = null;
});

describe("CourseDataContainerV2", () => {
  it("does render", async () => {
    await act(async () => {
      MockAxios.get.mockImplementation(() => Promise.resolve({ data: {experiences: [{}]} }));

      render(
        <MemoryRouter>
          <CourseDataContainerV2 />
        </MemoryRouter>,
        container
      );
    });
    screen.getByText("Edit");
  });

  it("does render edit", async () => {
    await act(async () => {
      MockAxios.get.mockImplementation(() => {
        return Promise.resolve({ data: {experiences: [{}]} });
      });
      
      await render(
        <MemoryRouter>
          <CourseDataContainerV2 />
        </MemoryRouter>,
        container
      );
    });

    act(() => {
        const button = screen.getByText(/Edit/i);
        fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });

    act(() => {
        const button = screen.getByText(/Update/i);
        fireEvent(button, new MouseEvent("click", { bubbles: true }));
    });

  });

});
