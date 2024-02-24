import { expect, test, describe } from "bun:test";
import * as Exercises from "./1-basic-loops";

describe("Numbers homework", () => {
  test("generateIntegers", () => {
    expect(Exercises.generateIntegers()).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  test("sumNumbers", () => {
    expect(Exercises.sumNumbers([0, -1, 1, 2, -2])).toEqual(0);
  });

  test("sumNumbers", () => {
    expect(Exercises.sumNumbers([6, 13, 2, 3])).toEqual(24);
  });

  test("findPositives", () => {
    expect(Exercises.findPositives([1, 5, -3, 2, -8])).toEqual([1, 5, 2]);
  });

  test("findPositives", () => {
    expect(Exercises.findPositives([-3, 7, 6, -1, 3, 2])).toEqual([7, 6, 3, 2]);
  });

  test("containsString", () => {
    expect(Exercises.containsString(["ab", "bc", "cd"], "a")).toEqual(false);
  });

  test("containsString", () => {
    expect(Exercises.containsString(["ab", "bc", "cd"], "bc")).toEqual(true);
  });

  test("containsString", () => {
    expect(Exercises.containsString(["ab", "bc", "cd"], "CD")).toEqual(false);
  });

  test("joinArrays", () => {
    expect(
      Exercises.joinArrays(["Alice", "John", "Bob", "Sara"], [24, 32, 19, 48])
    ).toEqual([
      ["Alice", 24],
      ["John", 32],
      ["Bob", 19],
      ["Sara", 48],
    ]);
  });

  test("generateIntegersUpToNumber", () => {
    expect(Exercises.generateIntegersUpToNumber(4)).toEqual([0, 1, 2, 3]);
  });

  test("generateIntegersUpToNumber", () => {
    expect(Exercises.generateIntegersUpToNumber(12)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    ]);
  });

  test("generateIntegersReversed", () => {
    expect(Exercises.generateIntegersReversed(5)).toEqual([5, 4, 3, 2, 1, 0]);
  });

  test("generateIntegersReversed", () => {
    expect(Exercises.generateIntegersReversed(3)).toEqual([3, 2, 1, 0]);
  });

  test("capitalizeStrings", () => {
    expect(Exercises.capitalizeStrings(["a", "b", "c"])).toEqual(["A", "B", "C"]);
  });

  test("capitalizeStrings", () => {
    expect(Exercises.capitalizeStrings(["john", "alice", "frank"])).toEqual(["JOHN", "ALICE", "FRANK"]);
  });

  test("findStrings", () => {
    expect(Exercises.findStrings(["sigma", "apple", "banana", "Alice"])).toEqual(["apple", "Alice"]);
  });

  test("findMaxNumber", () => {
    expect(Exercises.findMaxNumber([-125,0,13,2,-1,2.1,1,-16])).toEqual(13);
  });

  test("multiplicationTable", () => {
    expect(Exercises.multiplicationTable()).toEqual([
        [1,2,3,4,5,6,7,8,9],
        [2,4,6,8,10,12,14,16,18],
        [3,6,9,12,15,18,21,24,27],
        [4,8,12,16,20,24,28,32,36],
        [5,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
        [1,2,3,4,5,6,7,8,9],
    ]);
  });
});
