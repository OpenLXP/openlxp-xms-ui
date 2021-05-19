import { flattenObject } from "./flattenDataObjectUtils";

describe("flattenObject", () => {
  test("returns undefined when no data is passed", () => {
    const data = null;

    const flattenedData = flattenObject(data);
    expect(flattenedData).toBeUndefined();
  });

  test("returns the same 1-D list", () => {
    const data = { this: "that", they: "them", fe: "fi", fo: "fum" };

    const flattenedObject = flattenObject(data);
    expect(flattenedObject).toEqual(data);
  });

  test("returns a 1-D list from a 2-D list", () => {
    const data = { this: { they: "them", fe: "fi", fo: "fum" } };
    const dataToExpect = { they: "them", fe: "fi", fo: "fum" };

    const flattenedData = flattenObject(data);
    expect(flattenedData).toEqual(dataToExpect);
  });

  test("returns a singleton list when the variable is overridden.", () => {
    const data = { this: "that", this: { this: "that" } };
    const dataToExpect = { this: "that" };

    const flattenedData = flattenObject(data);
    expect(flattenedData).toEqual(dataToExpect);
  });
});
