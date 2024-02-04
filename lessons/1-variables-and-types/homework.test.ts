import { expect, test, describe } from "bun:test";
import * as Exercises from "./homework";

describe("Variables and types homework", () => {
  test("declareNumber", () => {
    expect(Exercises.declareNumber()).toBe(5);
  });
});
