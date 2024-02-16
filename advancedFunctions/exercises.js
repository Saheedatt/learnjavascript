//Write a recursive function to calculate the factorial of a given number.
function factorial(n) {
  // Your code here
}

console.log(factorial(5)); // should return 120

//Implement a recursive function to generate the nth Fibonacci number.
function fibonacci(n) {
  // Your code here
}

console.log(fibonacci(7)); // should return 13

//Write a recursive function to calculate the sum of an array of numbers.
function arraySum(arr) {
  // Your code here
}

console.log(arraySum([1, 2, 3, 4, 5])); // should return 15

//Write a recursive function that counts down from a given number to 1.
function countDown(n) {
  // Your code here
}

countDown(5); // should log 5, 4, 3, 2, 1

//Implement a recursive function to calculate the power of a base raised to an exponent.
function power(base, exponent) {
  // Your code here
}

console.log(power(2, 4)); // should return 16

//Write a recursive function to check if a given string is a palindrome.
function isPalindrome(str) {
  // Your code here
}

console.log(isPalindrome("racecar")); // should return true

//Write a recursive function to flatten a nested array.
function flattenArray(arr) {
  // Your code here
}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // should return [1, 2, 3, 4, 5, 6]

//Implement a recursive binary search function for a sorted array.
function binarySearch(arr, target, start, end) {
  // Your code here
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sortedArray, 6, 0, sortedArray.length - 1)); // should return true

//Write a function that takes any number of arguments and returns their sum using the rest operator.
function sum(...numbers) {
  // Your code here
}

console.log(sum(1, 2, 3, 4, 5)); // should return 15

//Create a function that calculates the average of an arbitrary number of arguments using the rest operator.

function average(...numbers) {
  // Your code here
}

console.log(average(2, 4, 6, 8)); // should return 5

//Write a function that finds the maximum value among a list of numbers using the rest operator.

function max(...numbers) {
  // Your code here
}

console.log(max(10, 5, 8, 20, 3)); // should return 20

//Use the spread operator to combine two arrays into a single array.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = // Your code here;

console.log(combinedArray); // should print [1, 2, 3, 4, 5, 6]

//Create a copy of an array using the spread operator.

const originalArray = [7, 8, 9];
const clonedArray = // Your code here;

console.log(clonedArray); // should print [7, 8, 9]

//Use the spread operator to merge two objects into a single object.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = // Your code here;

console.log(mergedObject); // should print { a: 1, b: 3, c: 4 }

//Create a function that takes individual numbers as arguments and calculates their sum using the spread operator.

function sumNumbers(x, y, z) {
  // Your code here
}

const numbers = [2, 4, 6];

console.log(sumNumbers(...numbers)); // should return 12