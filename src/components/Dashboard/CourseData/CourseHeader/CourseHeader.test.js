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
  test("does render title", () => {
    act(() => {
      render(<CourseHeader title="Test Title" />);
    });
    screen.getByText("Test Title");
  });

  test("does render course status when passed a status", () => {
    act(() => {
      render(<CourseHeader status="Inactive" />);
    });
    screen.getByText("Inactive");
  });

  test("does render course status undefined when passed nothing", () => {
    act(() => {
      render(<CourseHeader />);
    });
    screen.getByText("undefined");
  });
});
