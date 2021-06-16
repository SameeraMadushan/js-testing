import functions from "./functions";
import { expect } from "@jest/globals";

// Checking two numbers
test("Adds 2+2 to equal 4 ", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// Checking not equality
test("Adds 2+2 to not equal 5 ", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Null check
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// Falsy/truthy check
test("should be false", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// Object checking
test("should be sameera madushan object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Sameera",
    lastName: "Madushan",
  });
});

// Object checking
test("should be sameera madushan object", () => {
  expect(functions.createUser()).toMatchObject({
    firstName: "Sameera",
    lastName: "Madushan",
  });
});

// Less than check
test("should be under 1000", () => {
  const l1 = 800;
  const l2 = 100;
  expect(l1 + l2).toBeLessThan(1000);
});

// Regex check
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Array element check
test("sam should be in usernames array", () => {
  const usernames = ["sam", "sachith", "madush"];
  expect(usernames).toContain("sam");
});

//working with API data
// API field check
test("User fetched name should be Leanne Graham ", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
