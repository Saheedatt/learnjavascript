//Many JavaScript built-in functions support an arbitrary number of arguments. For example:
// Math.max(arg1, arg2, ...AbortController, argN); //returns the greatest of the arguments
// Object.assign(dest, src1, ...src1, srcN); //copies properties from src1..N into dest.
//etc

//Now we will look at rest parameters '...'
//A function can be called with any number of arguments, no matter how it is defined. Like here:
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5)); //3
//There will be no error because of "excessive" arguments. In the result, only the first two will be evaluated.
//The rest of the parameters can be included in the function definition by isong three dots ... followed by the name of the array that will contain them. The dots literally mean "gather the remaining parameters into an array". For example, to gather all arguments into array argsz:
function sumAll(...args) {
  //args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;
  return sum;
}
console.log(sumAll(1)); //1
console.log(sumAll(1, 2)); //3
console.log(sumAll(3, 4, 6)); //13
console.log(sumAll(2, 4, 7, 9)); //22

//We can choose to get the first parameters as variables, and gather only the rest. Here, the first two arguments go into variabless and the rest go into titles array:
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName);

  //the rest go into titles array.
  //i.e titles = ["Consul", "Imperator"]
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
} //2
showName("Akanbi", "Afolabi", "Consul", "Imperial");
//The rest parameter must always be at the end.

//Thhe "arguments" variable
//There is also a special array-like object named arguments that contains all arguments by their index. For example:
function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it is iterable
  //for (let arg of arguments)
  //console.log(arg);
}
//shows: 2, Julius, Ceaser
showName("Julius", "Ceaser");

//shows: 1, Isa. undefined(no second argument)
showName("Isa");

//Rest parameters are preferred. Arguments are used in old javascript.

//Spread Operator
//We have seen how to get an array from the list of parameters, But sometimes, we need to do exactly the reverse. For example, there is a built-in function "Math.max" that returns the greatest nymber from a list:
console.log(Math.max(2, 8, 4));
//Now, what if we have an array? [3,5,1]? How do we call Math.max with it is?
let arr0 = [3, 5, 1];
console.log(Math.max(arr0)); //NaN

//Spread operator comes to the rescue! It is like rest operator but it does the opposite of it "..."
//When ...arr is used in the function call, it "expands" an iterable object arr into the list of arguments. For Math.max:
let arr = [2, 4, 7];
console.log(Math.max(...arr)); //7 Spread turns array into a list of arguments.

//We can also pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(Math.max(...arr1, ...arr2)); //8

//We can even combine the spread operator with normal values:
let arr3 = [1, 2, -3, 4];
let arr4 = [7, -3, -7, 1];
console.log(Math.max(1, ...arr3, 2, ...arr4, 25)); //25

//We can also use it to merge arrays:
let arr5 = [4, 5, 8];
let arr6 = [7, 9, 2];
let merged = [0, ...arr5, 2, ...arr6];
console.log(merged); //0,4,5,8,2,7,9,2 i.e 0, arr5 ,2, arr6

//We can use spread operator to turn the string into array of characters
let str = "Hellscape";
console.log(...str); //H e l l s c a p e
console.log([...str]); //  'H', 'e', 'l', 'l', 's', 'c', 'a', 'p', 'e'
//The spread operator internally uses iterators to gather ekenebts, the same way as for...of does.

//We could have used array.from alternatively for str:
console.log(Array.from(str)); //  'H', 'e', 'l', 'l', 's', 'c', 'a', 'p', 'e'
//The result is the same as [...str].
//Array.from operates on both array-like and iterables. The spread operator operates only on iterables. So, for the task of turning something into arrau, Array.from tends to be more universal.
