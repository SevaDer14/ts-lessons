# Basic TypeScript

JavaScript is a high-level, interpreted programming language primarily used for building dynamic web content. It was developed by Brendan Eich in 1995 at Netscape. JavaScript gained popularity for its ability to bring interactivity to web pages or for the content of web pages (HTML and CSS) to change programmatically depending on user input. In 1997, it was standardized as ECMAScript, with subsequent versions evolving to include new features and improvements. Today, JavaScript is a key language for web development, used both on the client side (browser) and server side (Node.js).

TypeScript is like a smarter version of JavaScript built by Microsoft. It takes everything that JavaScript has to offer and includes types to a language. Types strictly define what type of data the given variable is which helps developers catch mistakes and bugs early on while writing code. It's a tool that makes coding easier and safer, especially when working on bigger projects. Today it is a defacto standard for large projects.

## Code comments

In TypeScript, as in many programming languages, comments are annotations within the code that are not executed but provide explanations or additional information for developers. TypeScript supports both single-line and multi-line comments. Here's how you can use comments in TypeScript:

### 1. Single-line comments

Single-line comments begin with `//` and extend to the end of the line. They are often used for brief explanations.

```ts
// This is a single-line comment
let myNumber: number = 42; // This comment explains the purpose of the variable
```

### 2. Multi-line comments

Multi-line comments start with /_ and end with _/. They are useful for longer explanations or comments that span multiple lines.

```ts
/*
This is a multi-line comment
It can provide more detailed explanations
about the code or its functionality.
*/

let myString: string = "Hello, TypeScript!";
```

## Variables

In programming, a variable is like a labeled storage container that holds information or data. Think of it as a named box where you can store a value, and later, you can refer to that box by its name to retrieve or modify the stored information.

In TypeScript, you can declare variables using the `let`, `const`, or `var` (outdated) keywords. However, TypeScript introduces static typing, allowing you to specify the variable's type. Here are examples of variable declarations in TypeScript:

Using `let` with Type Inference:

```ts
let myNumber = 42; // TypeScript infers the type as number
let myString = "Hello, TypeScript!"; // TypeScript infers the type as string
```

Explicit Typing with `let`:

```ts
let myExplicitNumber: number = 42;
let myExplicitString: string = "Hello, TypeScript!";
```

Using `const`:

```ts
const pi: number = 3.14159;
```

Note: `const` is used for constants and must be initialized with a value at the time of declaration. It cannot be reassigned.

Variable Declaration with `var` (Avoided in Modern TypeScript):

```ts
var myVar: string = "Old-style variable declaration"; // Avoid using 'var' in modern TypeScript
```

Note: `var` is less preferred in modern TypeScript due to its different scoping behavior compared to let and const.

Union Types:

```ts
let myUnion: number | string;

myUnion = 42; // Valid
myUnion = "Hello"; // Valid
```

Here, myUnion can hold either a `number` or a `string`.

Remember that TypeScript's static typing helps catch errors early and improves code quality. It's beneficial to specify types explicitly, but TypeScript can also infer types in many cases, making the code concise and still type-safe.

## Different types in TypeScript

A type refers to a category or classification that specifies which kind of data a variable can hold or which operations can be performed on that data. In computers all data is stored in binary format like this `01101000 01100101 01101100 01101100 01101111`. Depending on a type of data that same series of ones and zeros can mean different things. In it is of type `number` (integer) it will mean a number 448378203247. But if it is ASCII encoded `string` it will mean word "hello". Type is the context that programmer provides to computer so it can interpret binary data correctly.

In programming the source of a lot of bugs is mismatch of expected and actual data type. For example while writing a program you may expect to get an age of a person as number 31 but upon execution it get it as a string "31". Thus performing operations on that variable won't lead to expected outcomes. Typescript helps developers to track the types of data and hint if there are mismatches of data types in their code.

In TypeScript, like in many programming languages, there are several basic data types that represent different kinds of values. Here are the primary basic data types in TypeScript:

### Number:

Represents numeric values, including integers and floating-point numbers.

```ts
const count: number = 42;
const price: number = 9.99;
```

### String:

Represents sequences of characters (text).

```ts
const message: string = "Hello, TypeScript!";
```

### Boolean:

Represents `true` or `false` values.

```ts
const isTrue: boolean = true;
const isFalse: boolean = false;
```

### Array:

Represents an ordered list of values. Arrays can be typed using the element type followed by [] or using the generic Array type.

```ts
const numbers: number[] = [1, 2, 3];
const fruits: Array<string> = ["apple", "banana", "orange"];
// number[] and Array<number> are equivalent definitions
```

### Tuple:

Represents an array with a fixed number of elements, each potentially of a different type.

```ts
const person: [string, number] = ["John", 25];
```

### Object:

In TypeScript, an object is a fundamental data type that represents a collection of key-value pairs. Each key in the object is a string or symbol, and the associated value can be of any data type, including numbers, strings, booleans, arrays, functions, or even other objects. Objects are used to organize and structure data in a way that reflects real-world entities or concepts.

```ts
type Person = {
  firstName: string;
  lastName: string;
  age: number;
  isStudent: boolean;
};

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: true,
};
```

```ts
const person: [string, number] = ["John", 25];
```

### Any:

Represents a dynamic or untyped value. Variables of type any can hold values of any type.

```ts
let dynamicValue: any = 42;
dynamicValue = "Hello";
```

### Null and Undefined:

Represents the absence of a value or an uninitialized value.

```ts
const nullValue: null = null;
const undefinedValue: undefined = undefined;
```

These are the basic data types in TypeScript. They provide a foundation for working with different kinds of values in your programs. TypeScript's static typing allows you to explicitly define the types of variables, making your code more readable and less error-prone.

## Basic operations with numbers

Following basic operations provide the foundation for mathematical calculations in TypeScript. Depending on your application, you may need to combine operations to perform more complex calculations. Always be mindful of the data types and potential rounding errors when working with numerical operations in programming.

```ts
const priceOfApple: number = 2;
const priceOfMilk: number = 1.4;
const discountPercent: number = 10;

const basketTotal: number =
  (2 * priceOfApple + priceOfMilk) * (discountPercent / 100);
const banknote: number = 20;
const change: number = banknote - basketTotal;
```

other operations

```ts
const remainder: number = 15 % 4; // Gives the remainder of the division

let counter: number = 10;
counter++; // Increment by 1, counter becomes 11
counter--; // Decrement by 1, counter becomes 10 again

const result: number = 2 ** 3; // 2 raised to the power of 3 (2 * 2 * 2)

const squareRoot: number = Math.sqrt(25); // Square root
const absoluteValue: number = Math.abs(-7); // Absolute value
const roundedNumber: number = Math.round(3.6); // Round to the nearest integer
```

## Basic operations with strings

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
