# Number:

Represents numeric values, including integers and floating-point numbers.

```ts
const count: number = 42;
const price: number = 9.99;
```

## Basic operations

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
