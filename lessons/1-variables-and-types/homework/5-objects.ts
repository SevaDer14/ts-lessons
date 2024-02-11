type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// Object Declaration:
// Declare an object variable called person of type Person
export function declareObject(): Person {

  return person;
}

// Read property on object:
// Declare a variable name that holds a value of property firstName of myObject
export function readObjectProp(person: Person): string {

  return name;
}

// Write to property on object:
// Set value for property age on person object to be 70
export function setObjectProp(person: Person): Person {

  return person;
}

// Destructure object
// Get firstName and age properties elements from person object
// using destructuring assignment and return them as tuple
export function destructureObject(person: Person): [string, number] {
  
  return tuple;
}
