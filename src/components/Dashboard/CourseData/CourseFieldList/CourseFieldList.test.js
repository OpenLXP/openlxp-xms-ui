import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import CourseFieldList from "./CourseFieldList";

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

describe("CourseFieldList", () => {
  test("does render", () => {
    act(() => {
      render(<CourseFieldList />);
    });
    screen.getByTestId("course-field-list");
  });

  test("does render fields when data is present", () => {
    act(() => {
      const data = {
        testRecord: "Record Identifer",
      };

      render(<CourseFieldList data={data} />);
    });

    let component = screen.getByTestId("course-field-list").firstChild;
    expect(component.childElementCount).toBe(1);
  });

  test("does not render fields when data is not present", () => {
    act(() => {
      render(<CourseFieldList />);
    });

    let component = screen.getByTestId("course-field-list").firstChild;
    expect(component.childElementCount).toBe(0);
  });

  test("does not render fields present in dataToSkip list", () => {
    act(() => {
      const data = {
        testRecord1: "Record Identifer",
        testRecord2: "Record Identifer",
      };

      render(<CourseFieldList data={data} dataToSkip={["testRecord1"]} />);
    });

    let component = screen.getByTestId("course-field-list").firstChild;
    expect(component.childElementCount).toBe(1);
  });
});
