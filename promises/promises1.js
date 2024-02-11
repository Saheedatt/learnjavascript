//Promise async await 2 class
//fallbacks:  this is often used in the ontext of providing alternative solutions or behaviours when a certain functionality is not supported or when it fails.
//short circuiting is a way to provide a default value for a variable that is falsy
let name2 = undefined;
console.log(Boolean(name2)); //false
const defaultName = "default name";
let newName = name2 || "qwerty";
console.log(newName); //recall the truthy and falsy values and how that works

let newName2 = name2 && defaultName;
console.log(newName2);

//null coalescing. It involves the use of nullish coalescing operator(`??). It is used to provide a default value for a variable if its current value is null or undefined.
// name2 === undefined || name2 === null ? defaultName : name2;
let newName3 = name2 ?? defaultName;
console.log(newName3);
//we are saying name must be equal to null or undefined, before it can be replaced with defaultName

//Promise:
//two major ways to create a promise:
//1. Promise constructor. Has three steps to follow::
//step1: create your promise:
const promise = new Promise((res, rej) => {
  //res(5000)
  rej("broken child");
});
//step2: return your promise in a function
function testPromise() {
  return promise;
}
//step 3: consume your promise, call function and attach .then and .catch:
testPromise()
  .then((a) => {
    console.log(a);
  })
  .catch(function (err) {
    console.log(err);
  });
//function(err) means you are catching the error and console.logging it
//An example:
const lotteryGame = new Promise(function (resolve, reject) {
  console.log(`lottery is happening`);

  setTimeout(() => {
    let lottery = 0.2;

    console.log(lottery);

    if (lottery > 0.5) {
      resolve("You won!!!");
    } else {
      reject(new Error(`You lost sorry`));
    }
  }, 2000);
});
function lotteryTester() {
  return lotteryGame;
}
lotteryTester()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    //err.message
    console.error(err.stack);
    console.log(err.message);
  })
  .finally(() => {
    console.log("I am done");
  });
//function lotteryTester was created because our lotteryGame wasnt a function initiially. It was just defined as a promise. So we had to create a function to return the promise
// 2. async function
function add(a, b) {
  return a + b;
}
async function addPromise(a, b) {
  if (!b) {
    throw new Error("b is not defined");
  }
  return a + b;
}
let res = add(2, 3);
console.log(res);

addPromise(2, 3)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

//async function were to be used with await.
//IIFE- Immediately Invoked Function Expression and try and catch
(async function sayTheTruth() {
  try {
    console.log("instant");
    //const data = await fetch('httpz://api.github.com/users/oluwasetemi')
    // const result = await data.json()
    // console.log(result.login)
    const res = await addPromise(2);
    console.log(res);
    //we can now use await
  } catch (err) {
    console.log(err.message || err);
  }
})();

//Promise.all
//Promise.all is a method that takes an array of promises and resolves when all of them are resolved. It rejects as soon as one of the promises is rejected. It is a method in JavaScript that allows you to handle multiple promises concurrently and get a single promise that fulfills with an array of the results when all the input promises have fulfilled, or rejects with the reason of the first input promise that rejects.
/*Behavior:
Returns a single promise.
If all promises in the iterable fulfill, the returned promise fulfills with an array of their results in the same order as the input promises.
// If any promise in the iterable rejects, the returned promise rejects with the reason of the first promise that rejects. Subsequent rejections are ignored.*/
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error"), 500)
);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log("All promises fulfilled:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });

// function p1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("Error in p1"), 1000);
//   }).catch((error) => {
//     console.error(error);
//   });
// }
// function p2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("p2 resolved"), 1000);
//   });
// }
// //promise()

// async function pAll() {
//   try {
//     const results = await Promise.all([p2(), p1()]);
//     console.log("All data resolved:", results);
//     return results;
//   } catch (error) {
//     console.error("Error resolving data:", error);
//     throw error; // rethrow the error if needed
//   }
// }
// // Call pAll and handle the returned promise
// pAll()
//   .then(([res1, res2]) => {
//     // Do something with the results if needed
//   })
//   .catch((error) => {
//     // Handle any errors from pAll
//   });

/*In this example:

promise1 immediately fulfills with the value 1.
promise2 fulfills with the value 2 after a delay of 1 second.
promise3 rejects with the reason "Error" after a delay of 500 milliseconds.
Since Promise.all waits for all promises to settle (either fulfill or reject), the then block will only be executed if all promises fulfill. If any promise rejects, the catch block will be executed, and the error will be the reason of the first rejecting promise.

In the given example, the catch block will be executed, and it will log: "At least one promise rejected: Error". If all promises were to fulfill, the then block would log the array: "All promises fulfilled: [1, 2]".
 */