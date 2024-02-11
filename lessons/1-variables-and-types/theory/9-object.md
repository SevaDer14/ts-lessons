# Object:

In TypeScript, an object is a fundamental data type that represents a collection of key-value pairs. Each key in the object is a string, and the associated value can be of any data type, including numbers, strings, booleans, arrays, functions, or even other objects. Objects are used to organize and structure data in a way that reflects real-world entities or concepts.

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

## Accessing property value

There are several ways to read a value of a property on an object.

```ts
const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  isStudent: true,
};

const name: string = person.firstName; // "John" this is a most common way to access value
const personAge: number = person["age"]; // 25 this way is mostly used to access values programmatically

const key: string = "isStudent";
const personIsStudent: boolean = person[key]; // true
```

## Adding, overwriting property value

It is possible to add new property values or overwrite existing ones even when object is declared with `const` keyword.

```ts
type Book = {
  title: string;
  year: number;
  description?: string; // the question mark means the value is optional or in this case its type is string | undefined
};

const book: Book = {
  title: "Harry Potter",
  year: 1997,
};

book.description = "Book about a boy who became a magician"; // add new value to book
book.author = "J.K. Rowling"; // will throw error as that property does not exist on type Book
book.year = 1998; // overwrite existing value
```

The same programmatic approach can be used as in reading the value instead of dot notation.

### Destructuring

As with arrays you can use destructuring assignment to save property values into variables. The difference is that names of variables has to be the same as property names of the object.

```ts
type Book = {
  title: string;
  year: number;
};

const book: Book = {
  title: "Harry Potter",
  year: 1997,
};

const { title, year } = book; // Note that here curvy braces are used instead of square brackets
console.log(title); // "Harry Potter"
console.log(year); // 1997
```
