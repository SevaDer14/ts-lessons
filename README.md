# Setup Codespace

If you see Error: `bun: not found` you need to install Bun which is modern JavaScript runtime. To do it run command

```bash
npm install -g bun
```

To check if installation was successful run command

```bash
bun --version
```

It should print Bun version like `1.0.26`

# Running Code

To execute code in the root `index.ts` file run command

```bash
npm run lesson
```

To execute code of specific file run

```bash
bun run PATH_TO_FILE
```

where PATH_TO_FILE is relative path to file from the root of the project. Ex. `./lessons/1-variables-and-types/lesson.ts`

# Check Homework

To check homework run automated tests by executing command:

```bash
npm run test
```

to run specific test, find it in the homework.test.ts file and add `.only` after `test`

example:

```ts
test.only("newtonGravity", () => {
  expect(Exercises.newtonGravity()).toBe(0.0003337);
});
```

# Additional resources

1. More exercises at https://www.codewars.com/
2. JavaScript documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript
