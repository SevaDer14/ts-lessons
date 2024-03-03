
/* Declare array */         const myArray: any[] = ["Adam", 5, true];
/* Declare tuple */         const myTuple: [number, string] = [23, "Baker street"];
/* Select item */           myArray[0]; // first item "Adam"
/* Select item at */        myArray.at(-1); // last item true
/* Array length */          myArray.length; // returns 3
/* Push to end of array */  [1, 2].push(3); // returns [1, 2, 3]
/* Pop from the end */      [1, 2].pop(); // returns 2, array will be [1]
/* Join array */            ["Action", "Drama"].join(", "); // returns "Action, Drama"
/* Reverse array */         [5, 2, 23].reverse(); // returns [23, 2, 5]
/* Sort array */            ['b', 'a', 'c'].sort(); // returns ['a', 'b', 'c']
/* Destructure array */     const [name, age, isFamily] = ["Alice", 14, false];


export default [myArray, myTuple, name, age, isFamily];
