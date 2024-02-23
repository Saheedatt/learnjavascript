const math = require("./math.js");
const cowsay = require("cowsay");

//named import
const { add, sub } = require("./math.js");


//default import
//const math = require("./math.js");

// console.log(add(10, 10))
// console.log(sub(10, 10))

//console.log(math);

//console.log(math.PI);
//console.log(math.random());

//Math.max testing
//console.log(math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //assignment:write a function that supports this and the one below
//console.log(math.max([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(math)


// cowsay.think({
//   text: 'Hello world!',
//   y: true, // using y mode - youthful mode
// })
// console.log('from math.js')
// import math, { PI } from './math.js'

// console.log(math.add)
// console.log(math.sub)
// console.log(PI)

// const math = require('./math.js');

// console.log(math)

// Using export statement
//import { add } from './math.js';

// Using export default
// import add from './math';

//console.log(add(2, 3)); // Output: 5
