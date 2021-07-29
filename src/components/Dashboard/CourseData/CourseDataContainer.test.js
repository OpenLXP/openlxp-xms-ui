import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

import CourseDataContainer from "./CourseDataContainer";

// mocking jest
jest.mock("axios");

// setup
const testData = {
  unique_record_identifier: "2341",
  date_deleted: null,
  date_inserted: "2021-07-20T19:34:31.567535Z",
  date_transmitted: null,
  metadata: {
    Metadata_Ledger: {
      Course: {
        CourseURL: "Course URL",
        CourseCode: "Course Code",
        CourseType: "Course Type",
        CourseTitle: "Course Title",
        CourseProviderName: "Course Provider",
        CourseShortDescription: "some description",
        EstimatedCompletionTime: 5,
      },
    },
    Supplemental_Ledger: {
      Instance: 1000000200,
    },
  },
  metadata_hash: "metadata_hash",
  metadata_key: "metadata_key",
  metadata_key_hash: "metadata_key_hash",
  metadata_transmission_status: "Ready",
  metadata_transmission_status_code: "",
  provider_name: "Course Provider",
  record_status: "Active",
  updated_by: "Owner",
};
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

describe("CourseDataContainer", () => {
  it("does render", async () => {
    await act(async () => {
      // mocking the calls for jest
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: testData })
      );
      render(
        <MemoryRouter
          initialEntries={[
            "/dashboard/JKO/course/000e893d-5741-4c07-8dd8-2e3d9fa4b862",
          ]}
        >
          <CourseDataContainer />
        </MemoryRouter>,
        container
      );
    });
    screen.getByText("CourseURL");
    screen.getByText("CourseCode");
    screen.getByText("CourseType");
    screen.getByText("CourseTitle");
    screen.getByText("CourseProviderName");
    screen.getByText("CourseShortDescription");
    screen.getByText("EstimatedCompletionTime");
  });
  it("does render correct data for each data field", async () => {
    await act(async () => {
      // mocking the calls for jest
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: testData })
      );
      render(
        <MemoryRouter
          initialEntries={[
            "/dashboard/JKO/course/2341",
          ]}
        >
          <CourseDataContainer />
        </MemoryRouter>,
        container
      );
    });
    screen.getByPlaceholderText(
      testData.metadata.Metadata_Ledger.Course.CourseURL
    );
    screen.getByPlaceholderText(
      testData.metadata.Metadata_Ledger.Course.CourseCode
    );
    screen.getByPlaceholderText(
      testData.metadata.Metadata_Ledger.Course.CourseType
    );
    screen.getByPlaceholderText(
      testData.metadata.Metadata_Ledger.Course.CourseTitle
    );
    screen.getByPlaceholderText(
      testData.metadata.Metadata_Ledger.Course.EstimatedCompletionTime
    );
  });
  it("does show error message", async () => {
    await act(async () => {
      // mocking the calls for jest
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: testData })
      );
      render(
        <MemoryRouter
          initialEntries={[
            "/dashboard/JKO/course/000e893d-5741-4c07-8dd8-2e3d9fa4b862",
          ]}
        >
          <CourseDataContainer />
        </MemoryRouter>,
        container
      );
    });

    await act(async () => {
      fireEvent.click(screen.getByText("Edit"));
    });
    await act(async () => {
      axios.patch.mockImplementationOnce(() => Promise.reject());
      fireEvent.click(screen.getByText("Update"));
    });

    screen.getByText(/Error Submitting/i);
  });
});
