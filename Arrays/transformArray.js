//to transform an array, you use:
//split and join:
//The split and join methods are commonly used when working with strings to manipulate and transform data.
//split splits a string into an array of a given delimeter. The syntax is :
str.split(delim);
//delim is the delimeter that separates the string. It can be a string or a regular expression.
let names = "Jacob, Ann, Jovial";
let arr = names.split(",");
for (let name of arr) {
  console.log(`A message to ${name}. `);
}

//The split method has an optional second parameter, which limits the number of splits. For example:
let arr2 = names.split(",", 2);
console.log(arr2);
let str = "Korede";
console.log(str.split(""));


//join method: to join items. Opposite of split
//It creates a string from an array by joining all the elements with a given delimeter between them. The syntax is:
let array = ["Nana", "Gandalf", "Robert"];
let str1 = array.join(" and "); //you can join with anything or word
console.log(str1);


//sort(fn) method: It sorts array in place, changing its element order. It also returns the sorted array but the returned value is usually ignored, as the array itself is modified
let numSort = [1, 2, 15];
numSort.sort();
console.log(numSort); //This returns 1, 15, 2. Which is why it is important to write a function before sorting:
//The items are sorted as strings by default.
// console.log('2'> '15')

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let num = [1, 2, 15];
arr.sort(compare);
console.log(num);
//Arrow functions are the best for sorting as they are neater:
arr.sort((a, b) => a - b);
//Works exactly the same as the compare function above


//reverse method
//This method reverses the order of elements i an array. For example:
let arer = ["1,2,3,4,5"];
arer.reverse();
console.log(arer);
//it returns the array arr after the reversal


//map method
//The map method is used to iterate over an array and apply a function to each of its elements. It is one of the most useful and commonly used method. It calls the function for each element of the array and returns the array the results. The syntax is:
let result = arr.map(function (item, index, array) {
  //returns the new value instead of item
});

let lengths = ["Nike", "Ade", "Jolaoluwa"].map((item) => item.length);
console.log(lengths);


//reduce/reduceRight
//When we need to iterate over an array and calculate a single value based on its elements, we can use the reduce method.
let value = arr.reduce(
  function (previousValuve, item, index, array) {
    // ... do something with previousValue
  },
  [initial]
);
//The function is applied to all array elements and produces a single value. The arguments are:
//previousValue - is the result of the previous function call, equals initial the first time (if initial is provided)
//item - the current array element
//index - the index of the current element
//array - the array itself
//As function is applied, the result of the previous function call is passed to the next one as argument. The initial value can also be provided, in which case the first call is with previousValue=initial.
let array22 = [1, 2, 3, 4, 6];
let resultArray = array22.reduce((sum, current) => sum + current, 0);
console.log(resultArray);

// Example array of numbers
const numbers = [11, 34, 13, 4, 5];

// Using reduce to find the sum
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator
//You may or may not  use the initial value especially when it is 0 but it is advised to always specify the initial value to avoid unexpected results.
console.log("Sum of Array Elements:", sum);
//You can also use reduce to find the maximum or minimum value in an array. Here's an example of finding the maximum value in an array of numbers:
const numbers1 = [11, 34, 13, 4, 5];
const max = numbers1.reduce((a, b) => {
  return Math.max(a, b);
});
console.log("Maximum Value:", max);


//The reduceRight method is similar to reduce, but it iterates over the array from right to left. For example:
let arr3 = [1, 2, 3, 4, 5];
let result2 = arr3.reduce((sum, current) => sum + current, 0);
console.log(result2);


//Array.isArray method
//Arrays do not form a separate language type. They are based on objects. So typeof does not help to distinguish a plain object from an array. It returns "object" for arrays. So a special method Array.isArray is there to do that.
Array.isArray(value);
//It returns true if the value is an array, and false otherwise
console.log(typeof {}); //object
console.log(typeof []); //object

console.log(Array.isArray({})); //false
console.log(Array.isArray([])); //true



//Most methods support "thisArg"
//Almost all array methods that call a function - like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg. That parameter is rarely used. It is only needed in a few special cases. The value of thisArg is used as this for the function. So we are just covering it for the sake of completeness. Here is an example:
arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
//The value of thisArg is passed to the function as this. For instance:
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};
let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
//find users who can join the army
let soldiers = users.filter(army.canJoin, army);
console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);
console.log(soldiers[2].age);

//if in this example above we had not used thisArg, we would have had to write the function as:
let soldiers2 = users.filter((user) => army.canJoin(user));
console.log(soldiers2.length);
