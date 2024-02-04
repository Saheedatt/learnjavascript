//A queue is one of the most commpon uses of an array. Queues supports push and shift
//Another use is in stacks. It supports push and pop.
//Queue uses FIFO. First in First out
//Stacks use LIFO. Last in First out
//Arrays can work both as a queue and a stack

//pop method: removes the last element from an array and returns that element
let array4 = ["Johnson", "Concord", "blessing", "Monday"];
console.log(array4.pop());
console.log(array4);

//push method: adds one or more elements to the end of an array and returns the new length of the array
//console.log(array4.push('Saturday')); //returned the length of the array
array4.push("Saturday");
console.log(array4);

array4.push("Jacob", "David", "Julian");
console.log(array4);

//shift method: removes the first element from an array and returns that removed element
console.log(array4.shift());
console.log(array4);

//unshift method: adds one or more elements to the beginning of an array and returns the new length of the array
array4.unshift("Mojola");
array4.unshift("Indulge", "calculate");
console.log(array4);
console.log(array4.length);

//multidimensional array
let matrix = [
  [1, 2, 3],
  [4, 7, 0],
  [6, 8, 9],
];
console.log(matrix[0][1]); //vertically then horizontally
console.log(matrix[1][2]);
console.log(matrix[2][0]);

//toString method: converts an array to a string of (comma separated) array values
//arrays have their own implementation of toStribg method
let array6 = [1, 2, 3];
console.log(array6.toString());

let array7 = [21, "Jolade", false];
console.log(array7.toString());

console.log([1] + 1);
console.log([1, 2] + 1);
console.log([12] + 1);

//Other Array Methods:
//splice: Allows you to delete an element from an array:
//It's syntax is:
//arr.splice(index[, deleteCount, elem1, ..., elemN])
//Example:
let array09 = ["I", "study", "JavaScript"];
array09.splice(1, 1); //from index 1, remove 1 element
console.log(array09);
//Remove 3 elements and replace them with 2 others:
let array10 = ["I", "study", "JavaScript", "right", "now"];
//remove 3
array10.splice(0, 3, "Let's", "dance");
console.log(array10);
//Splice allows you to add and remove elements from anywhere in an array. It lets you specify the index location to add new elements to as well as the number of elements you'd like to delete(if any).The syntax again is:
// arrayName.splice(arg1, arg2, item1...item2)
//where: 
//arg1 = mandatory argument. Starting position to add/remove items. You can use a negative value to specify theposition from the end of the array e.g -1 specifes the last element
//arg2 = optional argument. Specifies the count of the element to be removed. If set to 0, no items will be removed. If not set, all elements from the start position to the end of the array will be removed


//slice: Allows you to copy a portion of an array:
//It's syntax is: arr.slice([start], [end])
//It returns a new array copying to it all items from index start to end(not including the end). Both start and end can be negative, in that case position from array end is assumed
//Example:
let array11 = ["t", "e", "s", "t", "t", "e", "r", "s"];
console.log(array11.slice(0, 4)); 

//concat: Allows you to merge arrays. It creates a new array that includes values from other arrays and additional items:
//It's syntax is: arr.concat(arg1, arg2...)
//It accepts any number of srguents either arrays or values to concatenate to the resulting array
//Example:
let array12 = [1, 2];
console.log(array12.concat([3, 4]));

array12 = [3, 5, 7, 8];
console.log(array.concat(array12))

//loops: One of the oldest ways to cycle an array is the for loop over indexes:
let array13 = ["Console", "reject", "resolve", "elevate"]
for (let i = 0; i < array13.length; i++){
  console.log(array13[i])
} // fastest method

//For arrays, there is another form of loops: for...of loops
for (let a of array13){
  console.log(a)
} //modern syntax
//The for...of loop doesn't give access to the number of the current element, just its value, but in most cases that's enough. This loop is shorter.
//For...in loop can be used too because an array is an object but it is a bad idea
