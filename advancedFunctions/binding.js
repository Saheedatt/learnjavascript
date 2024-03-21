//Decorating and forwarding, call/apply are features that allow you to modify or enhance the behavior of functions.
//Decorators: A decorator is a wrapper around a function that alters its behavior.Decorators are a way to modify or extend the behavior of functions or methods in a clean and reusable manner. Decorators are commonly used in modern JavaScript frameworks like React and libraries like MobX.
// function myDecorator(targetFunction) {
//     return function() {
//       console.log("Decorator added this log statement");
//       targetFunction();
//     };
// }

// @myDecorator
//   function myFunction() {
//     console.log("Original function");
// }

//   myFunction(); //Decorator added this log statement
//                //         Original function

//In this example, the @myDecorator syntax is a syntactic sugar for applying the decorator to myFunction. The myDecorator function takes myFunction as an argument, wraps it with an additional log statement, and returns a new function.

//Forwarding: Forwarding is a way to forward the arguments and the this context of a function to another function. You can use the call, apply, or bind methods to forward the arguments and the this context of a function to another function.It's often used in cases where you want to delegate the execution of one function to another.
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(2, 3, add)); //5
console.log(calculate(2, 3, multiply)); //6

//Call and Apply: The call and apply methods are used to call a function with a given this value and arguments. The difference between them is that call takes the arguments individually, while apply takes the arguments as an array. They are used to invoke a function, with the first argument specifying the value of this within the function.
function greet(name) {
  console.log(`Hello, ${name}! My name is ${this.myName}.`);
}

const contextObj = { myName: "John" };
greet.call(contextObj, "Alice");
greet.apply(contextObj, ["Alice"]);

//Now we are going to talk about binding in JavaScript
//Binding: The bind method is used to create a new function that, when called, has its this keyword set to the provided value. It allows you to set the this value for a function and return a new function with the this value bound to the provided value.
//Function binding refers to the process of explicitly setting the value of this within a function, regardless of how the function is called. The value of this is determined by how a function is invoked, and function binding allows you to control and specify the context in which a function is executed.There are several ways to bind a function in JavaScript:

//1.bind() method: The bind() method creates a new function that, when called, has its this keyword set to a specific value. It does not immediately invoke the function but returns a new function with the bound context.
//let boundFunc = func.bind(context);
const obj1 = { value: 42 };

function getValue() {
  console.log(this.value);
}

const boundFunction = getValue.bind(obj1);
boundFunction(); //42

let user = {
  firstName: "Josiah",
};
function func() {
  console.log(this.firstName);
}
let funcUser = func.bind(user);
funcUser();
//Here, func.bind(user) as a "bound" variant of func, with fixed this = user. All arguments are passed to the original function "as is". For instance:
let user1 = {
  firstName: "Goodness",
};
function func(phrase) {
  console.log(phrase + ", " + this.firstName);
}
//bind this to user
let funcUser1 = func.bind(user1);

funcUser1("Hello"); //Hello, Goodness; {argument "Hello" is passed, and this = user}

//In JavaScript, there is no built-in bindAll method in the core language itself. However, libraries like Underscore.js and Lodash provide a bindAll function that you can use. These libraries offer utility functions to simplify common programming tasks. Here's an example of using bindAll in Underscore.js:
// const _ = require("underscore");

// const myObject = {
//   name: "John",
//   sayHello: function () {
//     console.log("Hello, " + this.name);
//   },
//   initialize: function () {
//     _.bindAll(this, "sayHello");
//   },
// };

// myObject.initialize();
// myObject.sayHello(); //Hello, John

// const anotherObject = {
//   name: "Alice",
//   sayHello: function () {
//     console.log("Hello, " + this.name);
//   },
// };

// const boundSayHello = _.bindAll(anotherObject, "sayHello");
// boundSayHello.sayHello(); // Hello, Alice
//In this example, _.bindAll is used to bind the sayHello method of myObject to its own context. This ensures that when the method is invoked, it always refers to the correct object as this. Keep in mind that if you're using a more recent version of JavaScript (ES6 and later), you can achieve similar functionality using arrow functions, which automatically capture the lexical scope:
const myObject1 = {
  name: "John",
  sayHello: function () {
    console.log("Hello, " + this.name);
  },
  initialize: function () {
    this.sayHello = this.sayHello.bind(this);
  },
};

myObject1.initialize();
myObject1.sayHello(); // Hello, John
//In this ES6 example, the initialize method manually binds the sayHello function to the current object using the bind method.

//Partial function: A partial function is a concept in functional programming where you create a new function by fixing some number of arguments of an existing function. The result is a function that takes fewer arguments than the original one, essentially "partially applying" the original function.

// Original function with three parameters
function multiply(x, y, z) {
  return x * y * z;
}

// Creating a partial function by fixing the first parameter
const multiplyByTwo = multiply.bind(null, 2);

// Using the partial function
const result = multiplyByTwo(3, 4); // Equivalent to multiply(2, 3, 4)
console.log(result); // 24
//In this example, multiplyByTwo is a partial function created from the multiply function by fixing its first parameter to be 2. When you invoke multiplyByTwo(3, 4), it's essentially equivalent to calling multiply(2, 3, 4).

//Partial functions are useful in scenarios where you want to reuse a function with certain arguments pre-set, creating a more specialized function. This can lead to more concise and modular code. While the example above uses the bind method, you can also implement partial functions using closures in JavaScript:
function partial(fn, ...fixedArgs) {
  return function (...args) {
    return fn.apply(this, fixedArgs.concat(args));
  };
}

const multiplyByyTwo = partial(multiply, 2);

const result1 = multiplyByyTwo(3, 4); // Equivalent to multiply(2, 3, 4)
console.log(result1); // 24
//In this partial function, it takes a function fn and any number of fixed arguments (fixedArgs). It returns a new function that, when called, concatenates the fixed arguments with the arguments passed at runtime and invokes the original function (fn).

//2.Arrow functions: Arrow functions don't have their own this context; instead, they inherit the this value from the enclosing scope. This makes them effectively bound to the context of their containing function. Arrow functions are useful for maintaining the value of this from the enclosing lexical context.
/* - Arrow functions have no "this"
  - Arrow functions can't run with new
  - Arrows have no arguments
*/

const obj2 = { value: 42 };

const getValue1 = () => {
  console.log(this.value); // 'this' here refers to the context where the arrow function is defined
};

getValue1.call(obj2); //42

//3.Explicit function call with call() or apply(): The call() and apply() methods allow you to explicitly set the value of this when calling a function. call() takes individual arguments, while apply() takes an array of arguments.
const obj = { value: 42 };

function getValue() {
  console.log(this.value);
}

getValue.call(obj); //42

//4. Function expression with a wrapper function: You can create a wrapper function that encapsulates the original function, providing a specific context for this. This is useful when you want to ensure that a function is always executed with a specific context, regardless of how it's called.
const obj3 = { value: 42 };

function getValue() {
  console.log(this.value);
}

const wrapperFunction = function () {
  getValue.call(obj3);
};

wrapperFunction(); //42

//Function binding is particularly useful in scenarios where you want to ensure that a function is always executed with a specific context, regardless of how it's called. It helps in controlling the value of this and maintaining a predictable behavior for functions.


// Higher Order Functions
//The surprisePackage function takes a variable number of functions as its arguments using the rest parameter (...fns), which gathers the functions into an array called fns.
const surprisePackage = function (...fns) {
  console.log(fns)
  return function (input) {
    console.log(input)
    return fns.reduce(function(accFxn, currFxn) {
      console.log(accFxn)
      return currFxn(accFxn)
    }, input)
  }
}
//The reduce method is used on the array of functions (fns). It takes a callback function with two parameters (accFxn and currFxn). The purpose of reduce here is to apply each function in the array successively to the accumulated result.
//The reduce starts with an initial value of input and iterates through each function in fns. The result of each function call becomes the accumulated value for the next iteration. The provided example at the end of the code demonstrates how to use this surprisePackage function. It composes a chain of functions (finalBustop, removeSpaces, addExclamation, and toUpperCase) and applies them to the input string str in a specific order. The result is then stored in the variable res99 and logged to the console.

const toUpperCase = str => str.toUpperCase()
const removeSpaces = str => str.replace(/\s/g, "")
const addExclamation = str => str + "!"
const finalBustop = str => str + " " + "final bustop"

let str = 'mr man please end the class like this we are having headache'

// finalBustop(addExclamation(removeSpaces(toUpperCase(str))))

let res99 = surprisePackage(finalBustop, removeSpaces, addExclamation, toUpperCase)(str)
res99

//Call, apply and bind are methods that let you do extra things in JavaScript. They are used to set the value of this and to pass arguments to functions. They are often used in combination with higher-order functions and function composition to create more flexible and reusable code. Understanding these methods is essential for writing clean and maintainable code in JavaScript.
function Person(name){
  this.name = name;
  console.log(this)
}
const temi = new Person('Temi')
console.log(temi.name)

//the 'this' is the object that was created by the constructor

class PersonClaa{
  constructor(name){
    this.name = name;
    console.log(this); //PersonClass{name: 'Temi'}
  }
}
//personClass is the same as Person. Classes are converted to functions behind the scenes.

function add(){
  //anytime we do not have value for this in a function or object, the value will be the global window variable.
  //globalThis - node || browser - window
  console.log(this)
}
add.call({name: 'Temi'}); //{name: "Temi"}