// Array Declaration:
// Declare an array variable myArray and assign it an array of numbers from 1 to 4
export function arrayDeclaration(): number[] {
  
  return myArray;
}

// Array length:
// Declare a variable arrayLength that holds the length of myArray
export function arrayLength(myArray: any[]): number {

  return arrayLength;
}

// Push to array:
// Push a value of 'drama' to myArray
export function pushToArray(myArray: string[]): string[] {
  return myArray;
}

// Reverse array:
// Declare a variable reversed that holds elements of myArray in reversed order
export function reverseArray(myArray: any[]): any[] {

  return reversed;
}

// Join values in the array:
// Declare a variable sentence that is a readable sentence made from words array
export function joinArray(): string {
  const words = ["This", "is", "how", "you", "join", "array!"];

  return sentence;
}

// Sort array:
// Declare a variable sorted that sorts myArray in ascending alphabetical order
export function sortArray(myArray: string[]): any[] {

  return sorted;
}

// Sort array :
// Declare a variable sorted that sorts myArray in descending alphabetical order
export function sortArrayDescending(myArray: string[]): any[] {
  const sorted = myArray.sort().reverse();

  return sorted;
}

// Get first element of the array:
// Declare a variable third that hold value of third element of myArray
export function getThirdElement(myArray: string[]): string {

  return third;
}

// Get element of the array dynamically:
// Declare a variable element that holds value of a given index of myArray
export function getElementDynamically(
  myArray: number[],
  index: number
): number {

  return element;
}

// Tuple Declaration:
// Declare a tuple variable called myTuple with a specified structure, e.g., [string, number], assign values accordingly
export function declareTuple(): [string, number] {

  return myTuple;
}

// Destructure array
// Get first and second elements of myArray using destructuring assignment
// and get their sum in the sum variable
export function destructureArray(myArray: number[]): number {

  return sum;
}
