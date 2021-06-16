import reverseString from "./reversestring";
import { expect } from "@jest/globals";

afterAll(() => console.log("Finished all"));

describe("Checking function", () => {
  beforeEach(() => console.log("Check started"));
  afterEach(() => console.log("Check ended"));

  test("reverseString is a function", () => {
    expect(typeof reverseString).toEqual("function");
  });

  test("reverseString function exists", () => {
    expect(reverseString).toBeDefined();
  });
});

test("String reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

test("String reverses with uppercase", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});
