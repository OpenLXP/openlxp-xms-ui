import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import CourseHeader from "./CourseHeader";

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

describe("CourseHeader", () => {
  test("does render", () => {
    act(() => {
      render(<CourseHeader />, container);
    });
    expect(screen.getByTestId("table-header")).toBeInTheDocument();
    expect(screen.getByTestId("table-header")).toBeVisible();
  });

  test('does contain "Title" header', () => {
    act(() => {
      render(<CourseHeader />, container);
    });

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Course Code")).toBeInTheDocument();
  });
});
