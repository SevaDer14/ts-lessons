# Other types

There are many more types in TypesScript, here are some common ones.
## Any:

Represents a dynamic or untyped value. Variables of type `any` can hold values of any type.

```ts
let dynamicValue: any = 42;
dynamicValue = "Hello";
```

If typing all variables as `any` TypeScript effectively becomes JavaScript.

## Null and Undefined:

Represents the absence of a value or an uninitialized value.

```ts
const nullValue: null = null;
const undefinedValue: undefined = undefined;
```

There is no consensus on what is the difference between `null` and `undefined`. Usually `null` is used as intentional absence of value and `undefined` as unintentional or uninitialized value. But that rule is being broken more often that not. It is more common to see people using `undefined` as a go to nullish value, while `null` is used when you cannot use `undefined` for whatever reason.
