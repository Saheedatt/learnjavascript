//Closure: A closure is a feature in JavaScript where a function retains access to variables from its outer (enclosing) scope even after the outer function has finished executing.A closure is a function that remembers its outer variables and access them.All functions in JavaScript are closures except one(The new function to be treated later. This allows the inner function to "close over" and capture the environment in which it was created. In simpler terms, a closure allows a function to access variables from its lexical scope, even when the function is executed outside that scope. Here's a basic example to illustrate closure:
function outerFunction() {
  let outerVariable = 'I am  the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
} 

const closureExample = outerFunction();
closureExample(); // "I am from the outer function"
//In this example, innerFunction forms a closure over outerVariable. Even after outerFunction has finished executing, innerFunction still has access to outerVariable.

//Currying: Currying is a technique in functional programming where a function with multiple arguments is transformed into a series of functions, each taking a single argument. The curried function returns a new function for each argument until all the arguments are provided, and then the final result is returned. Here's a simple example of currying:
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const curriedAdd = curryAdd(2)(3);
console.log(curriedAdd(4)); // 9
//In this example, curryAdd is a curried function that takes three arguments. You can call it partially, providing one argument at a time. This is useful in scenarios where you might want to reuse a part of a function with specific arguments.

//Currying is often used to create more flexible and reusable functions. Libraries like Ramda or Lodash provide utility functions for currying in JavaScript.

//These concepts, closures, and currying, are powerful tools in JavaScript and are often used in functional programming to create more modular and maintainable code. Understanding these concepts can enhance your ability to write efficient and expressive code.
// Closure - access to a closed variable during currying
function addTrouble(a) {
    return function(b) {
      return a + b;
    }
  }
  
  console.log(addTrouble(10)(20));

//Scoping:
//Scoping refers to the visibility and accessibility of variables within a program. In JavaScript, there are two main types of scope: global scope and local scope. Global scope refers to variables that are accessible from anywhere in the program, while local scope refers to variables that are only accessible within a specific function or block of code. Here's an example to illustrate scoping:
function exampleFunction() {
  var localVar = "I am local";
  console.log(localVar); // Accessible here
}

exampleFunction();
// console.log(localVar); // Error - localVar is not defined outside the function
//In this example, localVar is a local variable that is only accessible within the exampleFunction. If you try to access localVar outside the function, you'll get an error because it's out of scope.

var globalVar = "I am global";

function exampleFunction() {
  console.log(globalVar); // Accessible within the function
}

exampleFunction();
console.log(globalVar); // Accessible outside the function
//In this example, globalVar is a global variable that is accessible from anywhere in the program. You can access it both inside and outside the exampleFunction.

//Understanding scoping is important for writing clean and maintainable code. It helps prevent variable name conflicts and makes it easier to reason about the behavior of your code. In modern JavaScript, the let and const keywords are often used to define variables with block scope, which can help improve the predictability and maintainability of your code.

//Nested functions:
//Nested functions are functions that are defined within the body of another function. These functions are often used to encapsulate logic and create modular code. Here's an example of a nested function:
function outerFunction() {
  var outerVar = "I am from outer";

  function innerFunction() {
    var innerVar = "I am from inner";
    console.log(outerVar); // Access outerVar from the outer scope
    console.log(innerVar); // Access innerVar from the local scope
  }

  innerFunction();
  // console.log(innerVar); // Error - innerVar is not defined outside innerFunction
}

outerFunction();
//In this example, innerFunction is a nested function that is defined within the body of outerFunction. It has access to variables from the outer scope, such as outerVar, and can also define its own local variables, such as innerVar.

//Hoisting
//It is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use a variable or function before it has been declared. Here's an example to illustrate hoisting:
console.log(myVar); // undefined
var myVar = "I am hoisted";
//In this example, myVar is declared and initialized after the console.log statement, but it still works because the declaration is hoisted to the top of the scope during compilation.
//Variable Hoisting:
//When a variable is declared using the var keyword, it is hoisted to the top of its scope. However, only the declaration is hoisted, not the initialization.
console.log(x);  // undefined
var x = 5;
console.log(x);  // 5
//In this example, the declaration of x is hoisted to the top of the scope, so the first console.log statement outputs undefined. However, the initialization of x is not hoisted, so the second console.log statement outputs 5.
//It's important to note that variables declared with let and const are also hoisted to the top of their scope, but they are not initialized until the actual line of code where the declaration occurs. This is known as the "temporal dead zone," and trying to access the variable before its declaration will result in a ReferenceError.

//Function Hoisting:
//Function declarations are also hoisted to the top of their scope. Unlike variables, both the declaration and the entire function definition are hoisted.
sayHello();  // "Hello, world!"
function sayHello() {
  console.log("Hello, world!");
}
//In this example, the function sayHello is hoisted to the top of the scope, so it can be called before its actual declaration in the code.

//Function expressions (anonymous functions assigned to variables) do not exhibit the same hoisting behavior, and trying to call them before their declaration will result in an error.
// This will result in an error
sayHi();  // TypeError: sayHi is not a function
var sayHi = function() {
  console.log("Hi!");
};



//Quick look at destructuring again:
//Destructuring is a convenient way to extract multiple values from data stored in (possibly nested) objects and arrays. It can be used in locations that receive data (such as the left-hand side of an assignment). Here's an example of destructuring an array:
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);  // 1
console.log(second);  // 2
console.log(rest);    // [3, 4, 5]
//In this example, the first and second elements of the numbers array are extracted into the variables first and second, and the rest of the elements are collected into the rest array using the rest operator (...).

//Destructuring with default values:

const person1 = { name: 'John' };

const { name, age = 25 } = person;

console.log(name); // 'John'
console.log(age);  // 25 (default value)

// Example: Array Destructuring with Default Values
const numbers1 = [1, 2];

const [first1, second1, third = 0] = numbers;

console.log(first1);  // 1
console.log(second1); // 2
console.log(third);  // 0 (default value)

//Destructuring function parameters:
// Example: Destructuring Function Parameters
function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: 'Alice', age: 28 };
printPerson(person);

//In this example, the printPerson function takes an object as a parameter and uses destructuring to extract the name and age properties from the object. This allows the function to access the properties directly without having to reference the object itself.

