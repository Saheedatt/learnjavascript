/*Imagine you're building a Lego castle. You wouldn't just slap all the bricks together and hope for the best, right? You'd check each piece to make sure it fits before moving on.
JS testing is like checking your Lego bricks – but for code! It's a way to make sure your JavaScript code works properly before you put it all together in your website or app.
Here's the basic idea:

Tiny Tests: You break your code down into small chunks, like functions.
Write Instructions: You write simple instructions that tell the code what to do and what answer you expect.
Run the Tests: You use a special tool to run these tests on your code.
Catch Errors Early: If the code doesn't give the expected answer, the test fails, letting you know there's a problem.
This way, you can find and fix mistakes in small pieces of code before they cause bigger problems in your final project. It's like making sure each Lego brick fits perfectly before building your entire castle!
There are different ways to test JS code, kind of like different ways to check your Lego bricks. Some tools can even run the tests automatically, like a helpful friend checking your castle as you build.
The important thing is that JS testing helps you write better, more reliable code. It's like having a safety net when building your Lego creations – or any JavaScript project!*/

//Now to use jest in our code:
//Jest has some packages that you can install:
// const {test, describe, expect} = require('jest/globals')

//How do you know if a function is doing what it is supposed to do? Call the function
// function add() {
//   return a + b;
// }
// add();
// //The above code gives a reference error because a and b are not defined

function add1(a, b) {
  // if (typeof a !== 'number' || typeof b !== 'number') {
  //   throw new Error('a and b must be numbers');
  // }
  return a + b;
}

function sub(a, b) {
  return a - b;
}

if (add1(3, 7) !== 10) {
  throw new Error("Expected 10 but got " + add1(3, 7));
}

console.log(add1(3, 5));
// //to manually test our above code for correctness:
// // if (add1(3, 5) === 8) {
// //   console.log("test passed");
// // } else {
// //   console.log("test failed");
// // }
// //the above can be called mini-test. The if statement checks to see the code running properly but you need something better for your code.

// //A quick callback to test it:
// test("it should add 2 numbers together", () => {
//   const result = add1(3, 7);
//   if (result !== 10) {
//     throw new Error("Expected 10 but got " + result);
//   }
// });
//As much as this code tests the function, it still doesn't tell us where the problem of the code is arising from which isn't efficient enough.
//To write better tests for your code,we write a test-runner function that takes a title and a callback function:
/*function test(title, callback) {
  try {
    callback();
    console.log(`${title} passed`);
  } catch (error) {
    console.log(`{title} failed`);
  }
}*/

//use yarn add jest --dev to install jest to enable testing using jest

/* */
// //Now to use jest in our code:
// //Jest has some packages that you can install:
// const {test, describe, expect} = require('jest/globals')

describe("add ", () => {
  test("it should add 2 numbers", () => {
    //assertion
    expect(add1(3, 7)).toBe(10);
  });
  // test("only 2 numbers must be passed to the add function", () => {
  //   expect(() => add1(3, "7")).toThrow();
  // });
});
//jest into.js to test our code
// .\node_modules\.bin\jest intro.test.js
//A test runner has the ability to look at your code, run the code and give you exact information of where the error in your code is coming from.
//You will get to a stage in your career that for whatever you are building, there has to be test for it. It is called coverage.

/*The different types of test we have:
1. Unit Test:
Purpose: Tests the smallest units of code in isolation (e.g., functions, methods, or classes).
Scope: Focuses on verifying that individual components work as expected.
Tools: Jest, Mocha, Jasmine, etc.

2. Integration Test:
Purpose: Verifies that different parts of the system work together.
Scope: Tests the interaction between components, modules, or systems.
Tools: Jest, Vitest, Mocha, Jasmine, etc.

3. End-to-End Test:
Purpose: Tests the entire application flow from start to finish.
Scope: Mimics real user behavior by interacting with the application as a whole.
Tools: Cypress, Selenium, Puppeteer, Playwright, etc.

4. Test-Driven Development (TDD):
Approach: Writing tests before implementing the corresponding functionality. You are writingn a test and the errors in the test will guide how you proceed with development.
Cycle: Red-Green-Refactor (Write a failing test, make it pass, and then refactor the code).
Benefits: Ensures that code is testable, encourages small, modular components, and provides a safety net for code changes.
Tools: Jest, Mocha, Jasmine, etc. */

//write your own expect function
function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toEqual: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    },
    toHaveProperty: (prop) => {
      if (!actual.hasOwnProperty(prop)) {
        throw new Error(`Expected ${actual} to have property ${prop}`);
      }
    },
    toBeGreaterThan: (expected) => {
      if (actual <= expected) {
        throw new Error(`Expected ${actual} to be greater than ${expected}`);
      }
    },
    toHave: (expected) => {
      if (!actual.includes(expected)) {
        throw new Error(`Expected ${actual} to have ${expected}`);
      }
    },
  };
}
//expect checks whether the actual value is equal to the expected value.
//Jest already has its own expect built in so you don't need to write your own expect

// describe("add", () => {
//   test("it should add 2 numbers", () => {
//     //assertions
//     const obj = [1, 2, 3];
//     expect(obj).toHave(4);
//     //expect(add1(3,7)).toEqual(10)
//   });
// });
