### String:

Represents sequences of characters (text).

```ts
const message: string = "Hello, TypeScript!";
```

#### Basic operations with strings

Following are most used operations for manipulating and working with strings in TypeScript. There are many ways to solve the same task by combining those operations and there is no way to say which way is best. Usually the markers of good solution are correctness, being concise, readable and maintainable. With experience you will develop your own style of programming.

### Concatenation:

```ts
const greeting: string = "Hello";
const name: string = "John";

const message: string = greeting + ", " + name; // result in "Hello, John"
const templateStringMessage: string = `${greeting}, ${name}`; // same result with template strings
```

### Length:

```ts
const str: string = `Programming`;
const length: number = str.length; // length of the string of 11
```

### Accessing Characters:

```ts
const word: string = "TypeScript";
const firstChar: string = word[0]; // Accessing the first character
```

### Substring:

```ts
const sentence: string = "This is a TypeScript tutorial.";
const subStr: string = sentence.substring(5, 12); // Extract substring from index 5 to 12
```

### UpperCase and LowerCase:

```ts
const str: string = "typescript";
const upperCaseStr: string = str.toUpperCase(); // TYPESCRIPT
const lowerCaseStr: string = upperCaseStr.toLowerCase(); // typescript
```

### String Searching:

```ts
const sentence: string = "TypeScript is fun.";
const containsFun: boolean = sentence.includes("fun"); // Check if the string contains a substring
```

### String Replacement:

```ts
let sentence: string = "JavaScript is powerful.";
let updatedSentence: string = sentence.replace("JavaScript", "TypeScript"); // Replace substring
```