// String Variable:
// Declare a variable myString and assign it a string value
export function declareString(): string {
  
  return myString;
}

// Concatenate strings:
// Declare a variable result that contains a result of concatenation of string1 and string2
export function concatenateStrings(string1: string, string2: string): string {

  return result;
}

// Template strings:
// Declare a variable greeting that contains a greeting of a person.
// ex. name = 'Sara', greeting = 'Hello Sara!'
export function templateStrings(name: string): string {

  return greeting;
}

// Length of a string
// Declare a variable length that contains length of a provided string
export function lengthOfString(myString: string): number {

  return length;
}

// Access first character
// Declare a variable char that contains first character of myString
export function accessFirstCharacter(myString: string): string {

  return char;
}

// Access character
// Declare a variable char that contains sixth character of myString
export function accessCharacter(myString: string): string {

  return char;
}

// Access character dynamic
// Declare a variable char that contains a character of myString with a given index
export function accessCharacterDynamic(
  myString: string,
  index: number
): string {

  return char;
}

// Slice a string
// Declare a variable slice that contains slice of string from 5th to 10th character
export function sliceString(myString: string): string {

  return slice;
}

// Slice a string dynamic
// Declare a variable slice that slices myString but use arguments start and end to declare a slice
export function sliceStringDynamic(
  myString: string,
  start: number,
  end: number
): string {

  return slice;
}

// To upper case
// Declare a variable allCaps that contains myString converted to upper case
export function stringUpperCase(myString: string): string {

  return allCaps;
}

// Search string
// Declare a variable hasName that is true if myString has argument name as a substring
export function searchString(name: string): boolean {
  const myString = "My name is Bob";

  return hasName;
}

// Replace string
// declare variable result which has a value of myString with name 'Bob' replaced with newName argument
export function replaceString(newName: string): string {
  let myString = "My name is Bob";

  return result;
}
