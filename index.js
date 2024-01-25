// declaring variable
//variable can be declared using var, const or let
var name = "ola"; //var is old js style now
let user = "Jomiloju";
const lastName = "Constance";

// data types
/* there are 7 primitive data types and they include:
String, numbers, undefined, booleans, null, bigint and typeof*/
let str = "Booking";
let strin = "Booking";
let numbers = 37;
console.log(typeof str);
// booleans = true or false

let firstName = "Ajayi";
let secondName = "Crowther";

let fullName = "My full name is " + firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName);
console.log(fullName2);

//string can be written using '', "" or ``.
//the backtick is used to write multiline strings
let sentence = "I have 20 books for sale";
let sentence2 = "I don't really like them";
let sentence3 = `Git is a distributed Version Control System (VCS), 
which means it is a useful tool for easily tracking changes to your code,
collaborating, and sharing. With Git you can track the changes you make to 
your project so you always have a record of what you’ve worked on and can 
easily revert back to an older version if need be. It also makes working with others easier—groups of people can work together on the same project and merge their changes into one final source!`;

//Also note the use of single and double quotation marks in sentence 2

//number
let age = 20;
console.log(typeof age);
let largeNumber = Number.MAX_VALUE;
let smallNumber = Number.MIN_VALUE;
console.log(largeNumber);
console.log(smallNumber);
console.log(BigInt(largeNumber) + BigInt(largeNumber));
let ageBigInt = 20n;
console.log(typeof ageBigInt);

let text = "104";
text = Number(text); //the error i made in the meeting was using small letter n instead of N
console.log(typeof text);

//boolean - true or false, 1s or 0s
//0 = false
//1 = true
// empty, 0, null, undefined, NaN = false
let value = true;
value = String(value);
console.log(typeof value);

let isFair = true;
let isDark = false;
let jogger = "Joshua";
let isWriter = jogger === "Jacob";
console.log(isWriter);
console.log(Boolean("1"));

//null
let nothing = null;
console.log(typeof nothing); //why is it an object? We'll see later

//undefined
let baby = undefined;
console.log(typeof baby);

//addition
let a = 2;
let b = 5;
console.log(a + b);

//binary +
// left to right evaluation
"1" + 2; //'12'
"12" + 1; //'121'
2 + 2 + "1"; //'41'
"1" + 2 + 1; //'121'
4 + 5 + "px"; //'9px'
"$" + 4 + 5; //'$`45'
"4" - 2; //2
200 - "2"; //198

//Basic operations
/* In 5 * 2
//5 and 2 are operands/arguments and '*' is the operator*/

//unary operator if it has a single operand
let z = 5;
z = -z;

//binary operator if it has two operands
let x = 1,
  y = 3;
console.log(y - x);

//assignment operator
x = 2 * 2 + 1;
// a + b + c = 2

//remainder % or modulo operator
console.log(5 % 2);
console.log(6 % 2);

//exponentiation operator '**'
console.log(2 ** 3);

//increment/decrement
//increment is ++
//decrement is --
let counter = 2;
console.log(counter++); //this is postfix
// console.log(++counter) //this is prefix

//prefix starts counting from the next value i.e 3
//postfix starts counting from the orinal value i.e 2

let conter = 7;
// console.log(conter--)
console.log(--conter);
//increment or decrement can also be written as:
counter = counter + 1;
counter = counter - 1;

let g = 2;
g = g + 5;
g = g * 2;
//the abpve can also be written as:
// let g = 2
console.log((g += 5));
g *= 2;

//comparison operators >, <, >=, <=. Always returns true or false
//equal ==
// strict equality ===
//not equal !=, !==
console.log(2 > 1);
console.log(2 === "2");

//logical operators
// OR(||), AND(&&), NOT(!)
/*
a||b
true || true = true
false|| true = true
true || false = true
false || false = false
*/
/*
a && b
true && true = true
false && true = false
true && false = false
false && false = false
*/
let hour = 9;
if (hour < 10 && hour > 18) {
  console.log("The office is closed");
} else {
  console.log("The office is open");
}


if (hour < 10 || hour > 18) {
  console.log("The office is closed");
} else {
  console.log("The office is open");
}
// if (this is true){
//     print out this(do this)
// }else{
//     print out this (else, do this) //since this is false
// }

//!not operator it negates
!true;
!0;
