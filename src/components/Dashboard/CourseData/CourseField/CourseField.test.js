import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import CourseField from "./CourseField";

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

describe("CourseField", () => {
  test("does render when passed only label", () => {
    act(() => {
      render(<CourseField label="Test Label" />);
    });

    screen.getByText("Test Label");
  });

  test("does render when passed only data", () => {
    act(() => {
      render(<CourseField data="Test Data" />);
    });

    screen.getByDisplayValue("Test Data");
  });

  test("does update data when value is changed", () => {
    act(() => {
      render(<CourseField data="Test Data" />);
    });

    const input = screen.getByDisplayValue("Test Data");
    fireEvent.change(input, { target: { value: "New Test Data" } });

    screen.getByDisplayValue("New Test Data");
  });
});
