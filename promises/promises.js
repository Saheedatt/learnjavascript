/*Imagine you ask a friend to bring you a cup of coffee. You don't know exactly when they'll return, but you trust them to bring it. In the meantime, you can go on with your other tasks without waiting for the coffee.

In JavaScript, a promise is like that agreement. It's a placeholder for a value that might be available now, or in the future, or not at all. You can attach actions to it – like telling your friend what to do when they bring the coffee.
*/
let coffeePromise = new Promise((resolve, reject)=>{
    // This is where you tell your friend to bring the coffee
    // If successful, you call resolve(), if there is an issue, you call reject()
});
// Now you can do other things while waiting for the coffee

// When the coffee arrives (promise is resolved), you do something with it
coffeePromise.then( () =>{
    //this is like saying "when the coffee arrives, do this"
    console.log("Enjoy your coffee!");
});
// if something goes wrong(promise is rejected), you handle it
coffeePromise.catch(()=>{
    //This is like saying "If there is a problem, do this"
    console.log("Uh=oh, no coffee today!")
})
//So, promises in JavaScript are a way to handle asynchronous operations (like fetching data, reading files, etc.) in a more organized and readable manner.

//Promise creation:
const promise = new Promise(function (resolve, reject) {
  //resolve("I fired")
  reject(new Error("I DID NOT FIRE"));
});
//promise consumption
function testPromise() {
  return promise
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
//function invocation 
testPromise();
/*You've defined a function testPromise that returns the promise. This function uses the then method to handle the case when the promise is resolved and the catch method to handle the case when the promise is rejected.

If the promise is resolved, the then block will log the resolved value (res). In your case, it would log "I fired". However, you have commented out the resolve part, so this block won't be executed.

If the promise is rejected, the catch block will log the error message (error.message). In your case, it would log "I DID NOT FIRE", which is the message associated with the rejected error.*/


//an asynchronous function named test
async function test(){
return 'hello world'
}
//any normal function is turned to a promise if you append with async
async function testRejected() {
  throw new Error("REJECTED!");
}

//calling the testRejected function without using a promise
//IIFE - Immediately Invoked Function Expression
(async function () {
  try {
    const res = await testRejected();
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
})();
//The order of output can vary depending on the timing of asynchronous operations, and this behavior is expected in asynchronous JavaScript code.


test().then(function (res) {
  console.log(res);
});

function test() {
    return new Promise((resolve, reject) =>{
        resolve('hello world');
    })
}



//function testRejected(){
    //return new Promise((resolve, reject) => {
        //resolve("hello world");
    //})
//}

testRejected().catch(err =>{
    console.log(err);
}) //shows an error message

// create a promise
const sampleProm = new Promise(function(resolve, reject){
    //either resolve or reject
    //resolve('hello world)
    reject("its crazy out here")
})

//put the promise in a function and return the promise
function testSampleProm(){
    return sampleProm.then(function(res){
        console.log(res); 
    }).catch(function(err){
    console.log(err)
});
}
//calling the function to handle the promise
testSampleProm()


//axios:
//axios is an npm package that is used to make http requests. It is a promise based library that can be used in both the browser and node.js. It is a very popular library and is used by many developers to make http requests.
const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/todos/1';

//fetch
//fetch is a built-in JavaScript function that is used to make http requests. It is a promise based function and is used to make http requests in the browser. It is not available in node.js. 
fetch('https://api.github.com/users/saheedatt')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
})

