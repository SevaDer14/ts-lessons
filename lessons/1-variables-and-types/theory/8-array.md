# Array:

Represents an ordered list of values. Arrays can be typed using the element type followed by [] or using the generic Array type.

```ts
const numbers: number[] = [1, 2, 3];
const fruits: Array<string> = ["apple", "banana", "orange"];
// number[] and Array<number> are equivalent definitions
```

Normally in TypeScript array does not have a limit on a number of elements. However there is a possibility to define more strict type called tuple that shares all the properties of the array but has a fixed length.

```ts
const person: [string, number] = ["John", 25];
```

Even though normal array can have elements of different type by assigning type `any[]`, it is a good practice to have more strict typing such as all elements are strings, numbers, etc. For tuples however that is not the case and it is very common to see elements of different type within a tuple.

## Access elements

Elements in the array are accessed by index. First element has index of `0`. because of that, to get the 3rd element we need to provide index of `2`. Index is provided in square brackets the following way:

```ts
const animals: string[] = ["Cat", "Dog", "Bird", "Snake"];
const firstElement: string = animals[0]; // "Cat"
const thirdElement: string = animals[2]; // "Bird"
```

Instead of providing a specific number as an index you can provide a variable of type `number`.

```ts
const animals: string[] = ["Cat", "Dog", "Bird", "Snake"];

let index: number = 0;
let element: string = animals[index]; // "Cat"

index = index + 1;
element = animals[index]; // "Dog"
```

Index has to be an `integer`

```ts
const animals: string[] = ["Cat", "Dog", "Bird", "Snake"];
const element: string = animals[2.5]; // will throw an error!
```

It is also possible to access element on the array directly:

```ts
const element: string = ["Cat", "Dog", "Bird", "Snake"][3]; // "Snake"
```

## Array methods:

Just like other types, arrays have a bunch of helpful methods of them. Full list is available in [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Here are some common ones:

### Length

To get the length of an array, or how many elements are in it you can access `length` property

```ts
const myArray: string[] = ["pigs", "goats", "sheep"];
const length: number = myArray.length; // 3
```

### Push, pop

You can add elements to the end of array by using method `push`

```ts
const myArray: string[] = ["pigs", "goats", "sheep"];

myArray.push("cows")
console.log(myArray);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
```

To remove element from the end of array use method `pop`
```ts
const myArray: string[] = ["pigs", "goats", "sheep"];

myArray.pop()
console.log(myArray);
// Expected output: Array ["pigs", "goats"]
```

Note that even though `myArray` is declared as `const` we still can change the array using those methods. However what we cannot do is assign new array to such variable.

```ts
const myArray: string[] = ["pigs", "goats", "sheep"];
myArray = ["cats", "dogs"] // will throw error!
```

To reassign variable use `let` instead of `const`.

### Join

Very handy method to convert array into string by concatenating all the elements in the array using specified separator.

```ts
const genres: string[] = ["action", "drama", "thriller"];

const result1: string = genres.join() // "actiondramathriller"
const result2: string = genres.join(",") // "action,drama,thriller"
const result3: string = genres.join(", ") // "action, drama, thriller"
```
 It is not necessary for elements of the array to be strings, TypeScript will automatically convert type of elements in to string.


### Destructuring

Very handy way to save values from tuple (any array really) into variables is to use destructuring assignment.

```ts
const [firstElement, secondElement, thirdElement] = ["Bob", 23, ["Linux", "TypeScript"]]
console.log(firstElement) // "Bob"
console.log(secondElement) // 23
console.log(thirdElement) // ["Linux", "TypeScript"]
```