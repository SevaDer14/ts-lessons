## Variables

In programming, a variable is like a labeled storage container that holds data. Think of it as a named box where you can store a value, and later, you can refer to that box by its name to retrieve or modify the stored information.

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