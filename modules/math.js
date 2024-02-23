console.log("Hello from math.js");

//exports.name = 'John de programmer';
// exports.PI = 22 / 7;

// //To export a method the syntax is:
// //exports.METHOD =()=>{
// //console.log("Hello from math.js");
// exports.random = () => {
//   return Math.random();
// };

// //Math.max
// // exports.max = (...arr) =>{
// //   console.log(arr)
// //   return Math.max(...arr);
// // }
// exports.max = (arr) => {
//   console.log(arr);
//   console.log(typeof arr);
//   console.log(Array.isArray(arr));
//   return Math.max(...arr);
// };

//module.exports disregards every other exports so the only thing that will be exported is the one that is assigned to module.exports, so you can do this:
//i.e to export multiple things, do this:
// module.exports = {
//   add: (a, b) => {
//     return a + b;
//   },
//   sub: (a, b) => {
//     return a - b;
//   },
// };
//Alternatively, do this:
// const math = {
//   add: (a, b) => {
//     return a + b;
//   },
//   sub: (a, b) => {
//     return a - b;
//   },
// };
// module.exports = math;

// console.log(window);
// // module.exports = math;
// function add(a, b) {
//   return a + b;
// }
// export { add };

//so, since we are using .mjs gto save our files, we are going to have modify our exports into real variable:
export const PI = 22 / 7;

export const random = () => {
  return Math.random();
};

export const max = (arr) => {
  console.log(arr);
  console.log(typeof arr);
  console.log(Array.isArray(arr));
  return Math.max(...arr);
};

const math = {
  add: (a, b) => {
    return a + b;
  },
  sub: (a, b) => {
    return a - b;
  },
};
export default math;


//to export multiple things in your html file,use: 