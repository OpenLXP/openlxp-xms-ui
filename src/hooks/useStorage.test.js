import { renderHook } from '@testing-library/react-hooks';

import { useLocalStorage, useSessionStorage } from "./useStorage";

describe("function useLocalStorage", () => {
  it("returns default value", () => {
    const [returned, update, remove] = renderHook(() => useLocalStorage("missing", "default value")).result.current;
    expect(returned).toBe("default value");
  });
  it("remove value", () => {
    const [returned, update, remove] = renderHook(() => useLocalStorage("missing", "default value")).result.current;
    expect(remove()).toBe(undefined);
  });
  it("default function value", () => {
    const [returned, update, remove] = renderHook(() => useLocalStorage("missing", () => {return "hi"})).result.current;
    expect(returned).toBe("hi");
  });
});

describe("function useSessionStorage", () => {
  it("returns default value", () => {
    const [returned, update, remove] = renderHook(() => useSessionStorage("missing", "default value")).result.current;
    expect(returned).toBe("default value");
  });
});
