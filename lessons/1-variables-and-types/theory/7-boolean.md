### Boolean:

Represents `true` or `false` values.

```ts
const isTrue: boolean = true;
const isFalse: boolean = false;
```

#### Basic operations with booleans

In TypeScript, as in many programming languages, you can perform various logical operations with boolean values. These operations help you make decisions in your code and control the flow of execution. Here are the common logical operations you can do with booleans in TypeScript:

##### Logical AND, OR, NOT

The logical AND operator returns true if both operands are true; otherwise, it returns false.

```ts
const result: boolean = true && false; // false
```

The logical OR operator returns true if at least one of the operands is true; otherwise, it returns false.

```ts
const result: boolean = true || false; // true
```

The logical NOT operator negates the boolean value of its operand. If the operand is true, it returns false, and vice versa.

```ts
const result1: boolean = !true; // false
const result2: boolean = !false; // true
```

#### Equality operators

Equality operators compare values for equality. The === operator returns true if the values are equal; otherwise, it returns false. The !== operator returns true if the operands are not equal; otherwise, it returns false.

```ts
const result1: boolean = 'Bob' === 'Alice';  // false
const result2: boolean = 'Bob' === 'Bob';  // true
const result3: boolean = 'Bob' !== 'Alice';  // true

const result4: boolean = 5 === '5';  // false
const result5: boolean = 5 === 5;  // true

const result6: boolean = 'true' === true;  // false
const result7: boolean = (2 + 2) === 4;  // true
const result7: boolean = 'Bob'.length() === 3;  // true
```