import { unmountComponentAtNode } from "react-dom";
import { render, act, screen } from "@testing-library/react";
import About from "./About";

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

describe("About", () => {
  test("does render", () => {
    act(() => {
      render(
          <About />
      );
    });

    screen.getByText("About Enterprise Course Catalog (ECC)");
    screen.getByText("The Challenge");
    screen.getByText("One major benefit of a Defense-wide learning ecosystem is the availability and accessibility of instructional resources from across the agency. However, with hundreds of DoD organizations currently using a wide variety of methods to describe and publish these resources, there are now thousands of proprietary and disconnected catalog capabilities across the enterprise, many of them hard to find or even know they exist.");
    screen.getByText("About the Project");
    screen.getByText("The ECC uses a metadata curation service to automatically generate metadata from different pools of information stored within the catalog owner’s local network. For example, DAU requires students to complete a course survey at the end of each course. These data are stored in DAU’s data warehouse and might be used to drive a course’s aggregate rating, which is a common feature found in most commercial course catalogs.");

  });
});
