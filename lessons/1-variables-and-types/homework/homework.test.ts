import { expect, test, describe } from "bun:test";
import * as Exercises from "./index";

describe("Numbers homework", () => {
  test("declareNumber", () => {
    expect(typeof Exercises.declareNumber()).toBe("number");
  });

  test("sumNumbers", () => {
    expect(Exercises.sumNumbers()).toBe(18);
  });

  test("divideNumbers", () => {
    expect(Exercises.divideNumbers(21, 7)).toBe(3);
  });

  test("newtonGravity", () => {
    expect(Exercises.newtonGravity()).toBe(0.0003337);
  });
});

describe("Strings homework", () => {
  test("declareString", () => {
    expect(typeof Exercises.declareString()).toBe("string");
  });

  test("concatenateStrings", () => {
    expect(Exercises.concatenateStrings("Conca", "tenated")).toBe(
      "Concatenated"
    );
  });

  test("templateStrings", () => {
    expect(Exercises.templateStrings("Boris")).toBe("Hello Boris!");
  });

  test("lengthOfString", () => {
    expect(Exercises.lengthOfString("TypeScript")).toBe(10);
  });

  test("accessFirstCharacter", () => {
    expect(Exercises.accessFirstCharacter("hello")).toBe("h");
  });

  test("accessCharacter", () => {
    expect(Exercises.accessCharacter("prototype")).toBe("t");
  });

  test("accessCharacterDynamic", () => {
    expect(Exercises.accessCharacterDynamic("Some string", 7)).toBe("r");
  });

  test("sliceString", () => {
    expect(Exercises.sliceString("Slice of string")).toBe(" of s");
  });

  test("sliceStringDynamic", () => {
    expect(Exercises.sliceStringDynamic("Slice of string", 9, 12)).toBe("str");
  });

  test("stringUpperCase", () => {
    expect(Exercises.stringUpperCase("lowercase")).toBe("LOWERCASE");
  });

  test("searchString", () => {
    expect(Exercises.searchString("Bob")).toBe(true);
  });

  test("replaceString", () => {
    expect(Exercises.replaceString("John")).toBe("My name is John");
  });
});

describe("Booleans homework", () => {
  test("declareBoolean", () => {
    expect(typeof Exercises.declareBoolean()).toBe("boolean");
  });

  test("logicalNot", () => {
    expect(Exercises.logicalNot(true)).toBe(false);
  });

  test("logicalOr", () => {
    expect(Exercises.logicalOr(false, true)).toBe(true);
  });

  test("checkIsTruthy", () => {
    expect(Exercises.checkIsTruthy("")).toBe(false);
  });

  test("checkIsTruthy", () => {
    expect(Exercises.checkIsTruthy("a")).toBe(true);
  });

  test("compareNumbers", () => {
    expect(Exercises.compareNumbers(2, 2)).toBe(true);
  });

  test("compareNumbers", () => {
    expect(Exercises.compareNumbers(1, 2)).toBe(false);
  });

  test("compareStringLengths", () => {
    expect(Exercises.compareStringLengths("abc", "def")).toBe(false);
  });

  test("compareStringLengths", () => {
    expect(Exercises.compareStringLengths("hello", "sir")).toBe(true);
  });
});

describe("Arrays homework", () => {
  test("arrayDeclaration", () => {
    expect(Array.isArray(Exercises.arrayDeclaration())).toBe(true);
  });

  test("arrayLength", () => {
    expect(Exercises.arrayLength([1, 2, 3, 4, 5])).toBe(5);
  });

  test("pushToArray", () => {
    expect(Exercises.pushToArray(["action", "thriller"])).toEqual([
      "action",
      "thriller",
      "drama",
    ]);
  });

  test("reverseArray", () => {
    expect(Exercises.reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test("joinArray", () => {
    expect(Exercises.joinArray()).toBe("This is how you join array!");
  });

  test("sortArray", () => {
    expect(Exercises.sortArray(["pear", "apple", "potato", "banana"])).toEqual([
      "apple",
      "banana",
      "pear",
      "potato",
    ]);
  });

  test("sortArrayDescending", () => {
    expect(
      Exercises.sortArrayDescending(["pear", "apple", "potato", "banana"])
    ).toEqual(["potato", "pear", "banana", "apple"]);
  });

  test("getThirdElement", () => {
    expect(
      Exercises.getThirdElement(["pear", "apple", "potato", "banana"])
    ).toBe("potato");
  });

  test("getElementDynamically", () => {
    expect(Exercises.getElementDynamically([10, 2, 56, 41, 11], 2)).toBe(56);
  });

  test("declareTuple", () => {
    expect(typeof Exercises.declareTuple()[0]).toBe("string");
  });

  test("declareTuple", () => {
    expect(typeof Exercises.declareTuple()[1]).toBe("number");
  });
  test("declareTuple", () => {
    expect(Exercises.declareTuple().length).toBe(2);
  });

  test("destructureArray", () => {
    expect(Exercises.destructureArray([13, 67])).toBe(80);
  });
});

describe("Objects homework", () => {
  test("declareObject", () => {
    expect(typeof Exercises.declareObject()).toBe("object");
  });

  test("declareObject", () => {
    expect(typeof Exercises.declareObject().firstName).toBe("string");
  });

  test("declareObject", () => {
    expect(typeof Exercises.declareObject().lastName).toBe("string");
  });

  test("declareObject", () => {
    expect(typeof Exercises.declareObject().age).toBe("number");
  });

  test("readObjectProp", () => {
    expect(
      Exercises.readObjectProp({ firstName: "Max", lastName: "Green", age: 41 })
    ).toBe("Max");
  });

  test("setObjectProp", () => {
    expect(
      Exercises.setObjectProp({ firstName: "Max", lastName: "Green", age: 41 })
        .age
    ).toBe(70);
  });

  test("destructureObject", () => {
    expect(
      Exercises.destructureObject({
        firstName: "Max",
        lastName: "Green",
        age: 41,
      })
    ).toEqual(["Max", 41]);
  });
});
