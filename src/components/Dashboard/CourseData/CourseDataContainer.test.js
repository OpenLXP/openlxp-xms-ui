import { render, act, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";

import CourseDataContainer from "./CourseDataContainer";

// mocking jest
jest.mock("axios");

// setup
const testData = {
  unique_record_identifier: "000e893d-5741-4c07-8dd8-2e3d9fa4b862",
  date_deleted: null,
  date_inserted: "2021-07-20T19:34:31.567535Z",
  date_transmitted: null,
  metadata: {
    Metadata_Ledger: {
      Course: {
        CourseURL:
          "https://jkodirect.jten.mil/html/COI.xhtml?course_prefix=CES&course_number=-103",
        CourseCode: "CES-103",
        CourseType: "SCORM 2004",
        CourseTitle:
          "Cyber Excepted Service (CES) Department of Defense (DoD) HR Elements (5 hrs)",
        CourseProviderName: "JKO",
        CourseShortDescription:
          "The Cyber Excepted Service (CES) Department of Defense (DoD) HR Elements Course is a ten-hour interactive module-based course that has been designed to provide HR Practitioners with the knowledge and tools to operationalize the new CES policies and procedures.  Along with providing an overview of key attributes and implementation process for the new personnel system, this course includes the following lesson modules:  Occupational Structure (CES-103-1), Employment and Placement (CES-103-2), Compensation Administration (CES-103-3), Performance Management (CES-103-4), and Performance and Conduct Actions (CES-103-5).  This course will equip the HR Practitioners (HR Officers, Specialists, Personnel Action Processors, and Liaisons) with the requisite knowledge to serve as a CES advisor for leaders, managers/supervisors, and employees in their organizations.",
        EstimatedCompletionTime: 5,
      },
    },
    Supplemental_Ledger: {
      Instance: 1733998,
    },
  },
  metadata_hash: "4765692fbbeb11a0033cf39aea8ece8f",
  metadata_key: "CES-103_JKO",
  metadata_key_hash: "7580c14f18ef647d99bbe9094e2fd35b",
  metadata_transmission_status: "Ready",
  metadata_transmission_status_code: "",
  provider_name: "JKO",
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
            "/dashboard/JKO/course/000e893d-5741-4c07-8dd8-2e3d9fa4b862",
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
