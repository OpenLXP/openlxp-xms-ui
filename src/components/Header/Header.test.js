import Header from "./Header";
import Courses from "../Courses/Courses";
import { unmountComponentAtNode } from "react-dom";
import { render, act } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

let container = HTMLElement;
let testComponent = (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Testing Logo rendering", () => {
  test("Renders navbar without crashing", () => {
    const { getByTestId } = render(testComponent);
    const elm = getByTestId("header-nav");
    expect(elm).toBeInTheDocument();
  });

  test("Renders the icon text", () => {
    const { getByText } = render(testComponent);
    expect(getByText("Experience Management Service")).toBeInTheDocument();
    expect(getByText("U.S. Department of Defense")).toBeInTheDocument();
  });

  test("Renders the img", () => {
    const { getByTestId } = render(testComponent);

    const elm = getByTestId("dod-logo");
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });
});

describe("Testing button renders", () => {
  test("Renders Home button", () => {
    const { getByTestId } = render(testComponent);

    const elm = getByTestId("home-btn");
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });

  test("Renders Catalogs button", () => {
    const { getByTestId } = render(testComponent);

    const elm = getByTestId("catalogs-btn");
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });

  test("Renders Courses button", () => {
    const { getByTestId } = render(testComponent);

    const elm = getByTestId("courses-btn");
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });

  test("Renders sign-in button", () => {
    const { getByTestId } = render(testComponent);

    const elm = getByTestId("login-btn");
    expect(elm).toBeInTheDocument();
    expect(elm).toBeVisible();
  });
});
