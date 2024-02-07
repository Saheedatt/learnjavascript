//1. Use the map method to create a new array where each element is twice the corresponding element in the original array.
const numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((item) => item * 2);
console.log(doubledNumbers);

//2. Use the filter method to create a new array containing only the even numbers from the original array.
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers1.filter((item) => item % 2 === 0);
console.log(evenNumbers);

//3. Use the reduce method to calculate the sum of all numbers in the array.
const numbers2 = [1, 12, 30, 44, 5];
let reducedArray = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(reducedArray);

//4. Use the forEach method to log the square of each number in the array.

//In this incorrect code: the variable squaredNumbers3 is declared inside the forEach callback, so it will be redeclared and overwritten in each iteration. Test it to see the difference in both solutions
// const numbers3 = [1, 2, 3, 4, 5];
// // Your code here
// numbers3.forEach((item,index, array) =>{
//     let squaredNumbers3 = item * item;
//     console.log(squaredNumbers3)
//     // console.log(`The square of ${item} is ${item * item}`);
// })

//This is the correct approach to this question:
//SquaredNumbers3 is declared outside the forEach callback, and the squared values are pushed into this array during each iteration.

const numbers3 = [1, 2, 3, 4, 5];
let squaredNumbers3 = [];
numbers3.forEach((item, index, array) => {
  squaredNumbers3.push(item * item);
});
console.log(squaredNumbers3);

//The forEach method is used to execute a provided function once for each array element. It does not return a new array, but it does modify the original array. The forEach method is useful when you want to perform an action on each element of an array, such as logging the square of each number in the array.

//5. Use the find method to find the first even number in the array.
const numbers4 = [1, 2, 3, 4, 5];
let numbers4Even = numbers4.find((item) => item % 2 === 0);
console.log(numbers4Even); //recall that find returns just the first true value

//6. Use the slice method to create a new array that includes elements from index 2 to index 4.
let array4 = ["Johnson", "Concord", "blessing", "Monday", "Becoming", "Jolade"];
console.log(array4.slice(2, 5));

//7. Use the splice method to remove two elements starting from index 2 and replace them with "strawberry" and "avocado".
const fruits = ["apple", "banana", "cherry", "date", "fig"];
fruits.splice(2, 2, "strawberry", "avocado"); //from index 2, remove 2 items and add the new items
console.log(fruits);

//8. Use the sort method to order the array numerically.
//  Use the sort method to sort the array of numbers in descending order.
const numbers5 = [5, 2, 8, 1, 4];
numbers5.sort((a, b) => a - b);
console.log(numbers5);

numbers5.sort((a, b) => b - a); //in descending order
console.log(numbers5);

//9. Use the reverse method to create a new array that contains the elements of the original array in reverse order.
let numbersArray = numbers5.reverse();
console.log(numbersArray);

//10. Use the join method to create a string from the elements of the array, separated by commas.
let numbersJoined = numbers5.join(", ");
console.log(numbersJoined);

//11. Use the every method to check if all elements in the array are less than 10.
const allNumbersLessThan10 = numbers5.every((item) => item < 10);
console.log(allNumbersLessThan10);

//12. Use the some method to check if at least one element in the array is greater than 10.
const numbersGreaterThan10 = numbers5.some((item) => item > 10);
console.log(numbersGreaterThan10);

//13. Use the includes method to check if the array contains the element "apple".
if (fruits.includes("apple")) {
  console.log("The array contains apple");
} else {
  console.log("The array does not contain apple");
}

let containsFruits = fruits.includes("apple");
console.log(containsFruits);

//14. Use the indexOf method to find the index of the element "cherry".
let indexOfCherry = fruits.indexOf("cherry");
console.log(indexOfCherry);

//15. Use the lastIndexOf method to find the index of the last occurrence of the element "fig.
let lastIndexOfFig = fruits.lastIndexOf("fig");
console.log(lastIndexOfFig);
