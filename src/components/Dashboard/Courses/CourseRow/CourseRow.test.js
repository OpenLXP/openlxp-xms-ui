'use strict';

import { render, act, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CourseRow from "./CourseRow";

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

describe("CourseRow", () => {
  test("does not render when data is not populated", () => {
    act(() => {
      render(
        <table>
          <tbody data-testid="course-table">
            <CourseRow />
          </tbody>
        </table>,
        container
      );
    });

    expect(screen.getByTestId("course-table").childElementCount).toBe(0);
  });

  test("does render when passed data", () => {
    act(() => {
      const data = {
        unique_record_identifier: "Record Identifer",
        date_deleted: null,
        date_inserted: "2021-04-28T14:46:33.629277Z",
        date_transmitted: null,
        metadata: {
          Metadata_Ledger: {
            Course: {
              CourseURL: "https://www.testurl.com",
              CourseCode: "TestCode123",
              CourseLevel: "Intermediate",
              CourseTitle: "Test Title",
              DepartmentName: "Department Name",
              CourseProviderName: "edX",
              CoursePrerequisites: "Prerequisites",
              CourseSubjectMatter: "Subject Matter",
              CourseFullDescription: "Course Description",
              EstimatedCompletionTime: 40,
              CourseAdditionalInformation: "extra_description",
            },
            CourseInstance: {
              EndDate: "2021-12-31T04:00:00Z",
              Duration: 40,
              CourseURL: "https://www.testurl.com",
              StartDate: "2021-02-20T04:00:00Z",
              Thumbnail: "https://www.testurl.com",
              CourseCode: "course-v1:TsinghuaX+30240184.2x+1T2021",
              InLanguage: "zh-cmn",
              Instructor: "Deng",
              CourseLevel: "Intermediate",
              CourseTitle: "Test Title",
              DeliveryMode: "Self",
              InstructorBio: "Instructor Bio",
              EnrollmentEndDate: "",
              EnrollmentStartDate: "",
              CourseFullDescription: "Full Course Description",
              CourseLearningOutcome: "Course Learning Outcome",
              CourseShortDescription: "Course Short Description",
            },
            Technical_Information: {
              Thumbnail: "https://www.testurl.com",
            },
          },
        },
        metadata_hash: "123412312",
        metadata_key: "TestCode123",
        metadata_key_hash: "1234",
        metadata_transmission_status: "Ready",
        metadata_transmission_status_code: "",
        provider_name: "edX",
        record_status: "Active",
        updated_by: "System",
      };

      render(
        <BrowserRouter>
          <table>
            <tbody>
              <CourseRow data={data} rowIndex={1} />
            </tbody>
          </table>
        </BrowserRouter>,
        container
      );
    });

    screen.getByText("Test Title");
    screen.getByText("CC: TestCode123");
    screen.getByText("Active");
  });
});
