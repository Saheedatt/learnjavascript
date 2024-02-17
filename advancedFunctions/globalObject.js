//The global object provides variables and functions that are available anywhere. By default, these variables and functions are available in the global scope. In a web browser, the global object is the window object. In Node.js, the global object is called global. An example of using the global object in a web browser:
var globalVar = "I am a global variable";
console.log(window.globalVar); // Accessible as a property of the window object

function globalFunction() {
  console.log("I am a global function");
}
window.globalFunction(); // Accessible as a property of the window object
//In this example, globalVar and globalFunction are defined in the global scope and are accessible as properties of the window object. This is because the global object in a web browser is the window object.
//The use of the global object is generally discouraged in modern JavaScript development, as it can lead to unexpected behavior and naming conflicts. Instead, it's recommended to use the let and const keywords to define variables with block scope, and to use the export and import keywords to define and import modules in Node.js and modern web browsers.
//The global object is still useful for accessing built-in functions and objects, such as Math, Date, and JSON, as well as for defining global variables and functions in legacy code and libraries. However, it's important to be aware of the potential pitfalls of using the global object and to use it judiciously.
global.nodeVar = "I am a global variable in Node.js";
console.log(nodeVar); // Accessible directly

// Global Functions and Properties:

// Certain functions and properties are part of the global object in both browser and Node.js environments. Examples include setTimeout, setInterval, console, and Math.
setTimeout(function () {
  console.log("Delayed log");
}, 1000);

console.log(Math.PI); // Accessing the Math object

// Named Function Expression (NFE):
// A Named Function Expression (NFE) is a function expression that has a name. Unlike function declarations, function expressions can be anonymous, but when they have a name, they are referred to as Named Function Expressions. Named Function Expressions are useful for self-referencing functions and for providing more descriptive stack traces in error messages. Here's an example of a Named Function Expression:
var namedFunction = function myFunction() {
  console.log(myFunction.name); // "myFunction"
};
namedFunction();
//In this example, the function expression is assigned to the variable namedFunction, and the function has the name myFunction. The name property of the function is accessible from within the function body, and it returns the name of the function. This can be useful for self-referencing functions and for providing more descriptive stack traces in error messages.

// Anonymous Function Expression
var anonymousFunction = function () {
  console.log("This is an anonymous function expression");
};

// Named Function Expression
var namedFunction = function namedFunction() {
  console.log("This is a named function expression");
};

anonymousFunction(); // Invoking the anonymous function
namedFunction(); // Invoking the named function
//In this example, the anonymousFunction and namedFunction variables are assigned to function expressions. The anonymous function expression has no name, while the named function expression has the name namedFunction. Both functions are invoked using the parentheses operator (). The named function expression can refer to itself using its name, while the anonymous function expression cannot.  The benefit of using a Named Function Expression is that the function can refer to itself by its name, which can be useful for recursion or when you need to reference the function within its body.
var factorial = function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
};

console.log(factorial(5)); // 120
