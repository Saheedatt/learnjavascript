//functions are used to group multiple statements together. It allows us to avoid repitition
//There are 3(4) ways to write functions:

//a)function declaration
function functionName(argument) {
  //function body
  //note that argument is sometimes referred to as parameter
}
functionName(argument);
//For example:
function addFunction2(num1, num2) {
  return num1 + num2;
}
/*Return must always be in your function declaration so you can call it.
A functio declaration on its own doesn't execute the code. You have to call
the functio to execute the code.*/
function subtract(num1, num2) {
  console.log(num1 - num2);
  return num1 - num2;
}
/*function call:
You can call a function simply by calling its name e.g functionName()
or
functionName(argument1, argument2)
let result = add(2,3)
console.log(result)
*/
//b)function expression
//You can turn your function declaration into a variable like this:
const subtractValues = function (num1, num2) {
  console.log(num1 - num2);
  return num1 - num2;
};
//It can also be writtene like this but you may or may not add "add"
const addFunction = function add(num1, num2) {};

//c) arrow function
const addArrow = (num1, num2) => {
  console.log(num1 + num2);
  return num1 + num2;
};

//modified arrow function - one liner
const addArrow2 = (num1, num2) => num1 + num2;

//Remember that function declaration is easier to use and more readable compared to function expression
//Only use function expression when necessary or if you deem it necessary.
//The one liner arrow functions are common when we talk about the callback function.
//A callback function:
const upperCase = (name) => name.toUpperCase();
console.log(upperCase("setemi")); //SETEMI

const upperCase2 = (name) => {
  let res = name.toUpperCase();
  return res;
};
console.log(upperCase("ajayi"));

/*A callback function is a function passed as an argument to another function.
An example given by setemi:
-> Imagine you are at a restaurant, and you place an order for food. Instead
of waiting at the counter until the dish is ready, you give the waiter your phone number
and ask them to call you when your order is done.
-> In this analogy:
-> Placing the order is like starting a task in your code
-> Giving the phone number is like providing callback function. You are saying:
"Hey, wheen my order is ready(task is done), call me on this number(execute this
    function)""
*/
function cookOrder(callback) {
  console.log("Cooking your order...");
  setTimeout(function () {
    console.log("Order is ready!");
    callback(); //callback is made here, function gets called
  }, 3000); //stimulating a 3 second cooking time
}
//callback function you provided
function notifyCustomer() {
  console.log("Your order is ready!");
}
//Placing the order and providing the callback
cookOrder(notifyCustomer);
/*In the above code:
-> cookOrder is initiating the task
-> notifyCustomer is the callback function that gets called
So, a callback function is like giving instructions on what to do
after a certain task is completed*/

// //->local variables
// //variables declared inside a function and are only visible inside that function
function showText() {
  //local variable
  let text = "hELLO everyone";
  console.log(text);
}
showText();
//console.log(text) // This will return an error

// //global or outer variables
// //a function can assess it when it is outside
// //can be accessible anywhere in your code
let user2 = "Janet";
function showTexter() {
  let message1 = "Hello, " + user2;
  // "Hello" + " " + user
  // `Hello ${user}`
  console.log(message1);
}
showTexter();

// //if a same-named variabke is declared inside the function then it shadows the outer one
// //i.e if you declare a local variable and a global variable, the local variable gets picked
let userName = "John";
function showMessageWithLocalVariable() {
  let userName = "Bob"; // Local variable declared
  let message = "Hello, " + userName;
  console.log(message);
}
// The function will create and use its own username
showMessageWithLocalVariable();
console.log(userName); // John remains unchanged, the function did not access the outer variable
// It is good practice to minimize the use of global variables

//Returning a value
/*Return can be anywhere in your function. When the execution of the function reaches it, the function stops 
and the value is returned to the calling code(assigned to result below)*/
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
console.log(result);
//There may be many occurences of return in a single function e.g
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return connsole.log("Do you have permission from your parents?");
  }
}
let age = 14;

if (checkAge(age)) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//it is possible to use return without a value. This causes rhe function to exit immediately
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Showing you the moive");
}
//if checkAge returns false, then showMovie won't proceed to console.log

// if a function has no return or an empty return, it is the same as if it returns undefined

/*Additional notes on functions:
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible
and describe what the function does, so that someone reading the code gets an indication of what the 
function does. It is a widespread practice to start a function with a verbal prefix which vaguely 
describes the action. There must be an agreement within the team on the meaning of the prefixes.
For instance, functions that start with "show" usually show something.
Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.

Examples of such names:
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false

With prefixes in place, a glance at a function name gives an 
understanding what kind of work it does and what kind of value it returns
*/

/*A function should do exactly what is suggested by its name, no more.
Two independent actions usually deserve two functions, even if they are usually 
called together (in that case we can make a 3rd function that calls those two).
A separate function is not only easier to test and debug – its very existence is a great comment!*/

/*
It is always easier to understand a function which gets parameters, works with them and returns a result 
than a function which gets no parameters, but modifies outer variables as a side effect
*/

// Rewrite the function using '?' or '||'importance: 4The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||
function checkAge(age) {
  return age >= 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
