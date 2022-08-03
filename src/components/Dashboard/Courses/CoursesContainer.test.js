import { fireEvent, act, screen, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";
import CoursesContainer from "./CoursesContainer";
import { MemoryRouter } from "react-router-dom";
import MockAxios from 'jest-mock-axios';
import { useAuth } from "../../../context/authContext";

// mocking axios
// jest.mock("axios");
jest.mock('../../../context/authContext', () => ({
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
  container = null;
});

describe("CoursesContainer", () => {
  it("does render", async () => {
    await act(async () => {
      MockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

      render(
        <MemoryRouter>
          <CoursesContainer />
        </MemoryRouter>,
        container
      );
    });
    screen.getByText("Course List");
  });

  it("does render search box and pagination", async () => {
    await act(async () => {
      MockAxios.get.mockImplementation(() => {
        return Promise.resolve({ data: [] });
      });

      render(
        <MemoryRouter>
          <CoursesContainer />
        </MemoryRouter>,
        container
      );
    });

    screen.getByPlaceholderText("Search");
    screen.getByText("Clear Search");
    screen.getByText("Next");
    screen.getByText("Previous");
  });

  it("dose render courses", async () => {
    const testData = {
      experiences: [
        {
          unique_record_identifier: "UID123",
          date_deleted: null,
          date_inserted: "2021-07-20T19:34:31.567535Z",
          date_transmitted: null,
          metadata: {
            Metadata_Ledger: {
              Course: {
                CourseURL: "URL",
                CourseCode: "CourseCode",
                CourseType: "CourseType",
                CourseTitle: "CourseTitle",
                CourseProviderName: "Provider",
                CourseShortDescription: "ShortDescription",
                EstimatedCompletionTime: 5,
              },
            },
            Supplemental_Ledger: {
              Instance: 1733998,
            },
          },
          metadata_hash: "12345",
          metadata_key: "1234",
          metadata_key_hash: "2234",
          metadata_transmission_status: "Ready",
          metadata_transmission_status_code: "",
          provider_name: "JKO",
          record_status: "Active",
          updated_by: "Owner",
        },
        {
          unique_record_identifier: "UID123",
          date_deleted: null,
          date_inserted: "2021-07-20T19:34:31.567535Z",
          date_transmitted: null,
          metadata: {
            Metadata_Ledger: {
              Course: {
                CourseURL: "URL",
                CourseCode: "CourseCode2",
                CourseType: "CourseType2",
                CourseTitle: "CourseTitle2",
                CourseProviderName: "Provider",
                CourseShortDescription: "ShortDescription",
                EstimatedCompletionTime: 5,
              },
            },
            Supplemental_Ledger: {
              Instance: 1733998,
            },
          },
          metadata_hash: "12345",
          metadata_key: "1234",
          metadata_key_hash: "2234",
          metadata_transmission_status: "Ready",
          metadata_transmission_status_code: "",
          provider_name: "JKO",
          record_status: "Active",
          updated_by: "Owner",
        },
      ],
    }; 
    
    await act(async () => {
      MockAxios.get.mockImplementationOnce(() => {
        return Promise.resolve({ data: testData });
      });

      render(
        <MemoryRouter>
          <CoursesContainer />
        </MemoryRouter>,
        container
      );
    });

    // screen.getByText("CourseTitle");
  });

  // it("does sort by filter elements", async () => {
  //   await act(async () => {
  //     MockAxios.get.mockImplementation(() => {
  //       return Promise.resolve({
  //         data: [
  //           {
  //             unique_record_identifier: "UID123",
  //             date_deleted: null,
  //             date_inserted: "2021-07-20T19:34:31.567535Z",
  //             date_transmitted: null,
  //             metadata: {
  //               Metadata_Ledger: {
  //                 Course: {
  //                   CourseURL: "URL",
  //                   CourseCode: "CourseCode1",
  //                   CourseType: "Type1",
  //                   CourseTitle: "Title1",
  //                   CourseProviderName: "Provider1",
  //                   CourseShortDescription: "ShortDescription1",
  //                   EstimatedCompletionTime: 5,
  //                 },
  //               },
  //               Supplemental_Ledger: {
  //                 Instance: 1733998,
  //               },
  //             },
  //             metadata_hash: "12345",
  //             metadata_key: "1234",
  //             metadata_key_hash: "2234",
  //             metadata_transmission_status: "Ready",
  //             metadata_transmission_status_code: "",
  //             provider_name: "JKO",
  //             record_status: "Active",
  //             updated_by: "Owner",
  //           },
  //           {
  //             unique_record_identifier: "UID123",
  //             date_deleted: null,
  //             date_inserted: "2021-07-20T19:34:31.567535Z",
  //             date_transmitted: null,
  //             metadata: {
  //               Metadata_Ledger: {
  //                 Course: {
  //                   CourseURL: "URL",
  //                   CourseCode: "CourseCode2",
  //                   CourseType: "Type2",
  //                   CourseTitle: "Title2",
  //                   CourseProviderName: "Provider2",
  //                   CourseShortDescription: "ShortDescription2",
  //                   EstimatedCompletionTime: 5,
  //                 },
  //               },
  //               Supplemental_Ledger: {
  //                 Instance: 1733998,
  //               },
  //             },
  //             metadata_hash: "12345",
  //             metadata_key: "1234",
  //             metadata_key_hash: "2234",
  //             metadata_transmission_status: "Ready",
  //             metadata_transmission_status_code: "",
  //             provider_name: "JKO",
  //             record_status: "Active",
  //             updated_by: "Owner",
  //           },
  //         ],
  //       });
  //     });

  //     render(
  //       <MemoryRouter>
  //         <CoursesContainer />
  //       </MemoryRouter>,
  //       container
  //     );
  //   });

  //   act(() => {
  //     fireEvent.change(screen.getByPlaceholderText("Search"), {
  //       target: { value: "1" },
  //     });
  //   });

  //   expect(screen.getAllByText(/CourseCode/i).length).toBe(1);
  //   screen.getByText("Title1");
  // });
});
