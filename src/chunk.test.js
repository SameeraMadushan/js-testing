import chunkArray from "./chunk";
import { expect } from "@jest/globals";

test("chunk array exists ", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk an array of 10 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const len = 2;
  const arr = chunkArray(numbers, len);
  expect(arr).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 0],
  ]);
});
