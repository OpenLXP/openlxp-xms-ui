import { fireEvent, act, screen, render } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";
import CoursesContainer from "./CoursesContainer";
import { MemoryRouter } from "react-router-dom";

// mocking axios
jest.mock("axios");

let container = null;
beforeEach(() => {
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
      axios.get.mockImplementation(() => {
        return Promise.resolve({ data: [] });
      });

      render(
        <MemoryRouter>
          <CoursesContainer />
        </MemoryRouter>,
        container
      );
    });
    screen.getByText("Course List");
  });

  it("does render search box", async () => {
    await act(async () => {
      axios.get.mockImplementation(() => {
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
  });

  it("dose render courses", async () => {
    await act(async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          data: [
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
        });
      });

      render(
        <MemoryRouter>
          <CoursesContainer />
        </MemoryRouter>,
        container
      );
    });

    screen.getByText("CourseTitle");
    screen.getByText("CC: CourseCode");
  });
  it("does sort by filter elements", async () => {
    await act(async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve({
          data: [
            {
              unique_record_identifier: "UID123",
              date_deleted: null,
              date_inserted: "2021-07-20T19:34:31.567535Z",
              date_transmitted: null,
              metadata: {
                Metadata_Ledger: {
                  Course: {
                    CourseURL: "URL",
                    CourseCode: "CourseCode1",
                    CourseType: "Type1",
                    CourseTitle: "Title1",
                    CourseProviderName: "Provider1",
                    CourseShortDescription: "ShortDescription1",
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
                    CourseType: "Type2",
                    CourseTitle: "Title2",
                    CourseProviderName: "Provider2",
                    CourseShortDescription: "ShortDescription2",
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
        });
      });

      render(
        <MemoryRouter>
          <CoursesContainer />
        </MemoryRouter>,
        container
      );
    });

    act(() => {
      fireEvent.change(screen.getByPlaceholderText("Search"), {
        target: { value: "1" },
      });
    });

    expect(screen.getAllByText(/CourseCode/i).length).toBe(1);
    screen.getByText("Title1");
  });
});
