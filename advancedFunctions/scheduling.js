//scheduling a call to a function means you want to call a function at a later time. There are two methods for it: setTimeout and setInterval.
//setTimeout: The setTimeout method is used to call a function after a specified number of milliseconds. The setTimeout method takes two arguments: a function to call and a number of milliseconds to wait before calling the function. Here's an example of using the setTimeout method:
setTimeout(function () {
  console.log("Delayed log");
}, 1000);
//In this example, the setTimeout method is used to call an anonymous function after 1000 milliseconds (1 second). The anonymous function logs a message to the console. The setTimeout method returns a unique identifier for the timeout, which can be used to cancel the timeout using the clearTimeout method.
//The syntax for the setTimeout method is as follows:
let timeoutId = setTimeout(func|code, [delay], [param1], [param2], ...);
//func|code: A function to call or a string of code to execute.Usually, that is a function. But you can also pass a string of code to execute, but this is not recommended due to security concerns.
//delay: The number of milliseconds to wait before calling the function or executing the code. If omitted, the default value is 0.
//param1, param2, ...: Optional parameters to pass to the function when it is called.
//The setTimeout method returns a unique identifier for the timeout, which can be used to cancel the timeout using the clearTimeout method. Here's the syntax:
let timeoutIdClear = setTimeout(...)
clearTimeout(timeoutIdClear);
//Here is an example of using the clearTimeout method to cancel a timeout:
let timeoutClearId = setTimeout(function () {
    console.log("Delayed log");
    }
, 1000);
clearTimeout(timeoutClearId);
//In this example, the clearTimeout method is used to cancel the timeout before the anonymous function is called. As a result, the anonymous function is never called, and the message is not logged to the console.
let timer = setTimeout(()=>
console.log("never happens"), 1000)
console.log(timer); // returns a number (unique id of the timer)...timer identifier
clearTimeout(timer); // clears the timer
console.log(timer); //same identifier(doesn't become null after cancelling)


//setInterval: It has the same syntax as setTimeOut. The setInterval method is used to call a function repeatedly at a specified interval. The setInterval method takes two arguments: a function to call and a number of milliseconds to wait between calls. Here's an example of using the setInterval method:
var count = 0;
var intervalId = setInterval(function () {
  console.log("Interval log");
  count++;
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
//In this example, the setInterval method is used to call an anonymous function every 1000 milliseconds (1 second). The anonymous function logs a message to the console and increments the count variable. The setInterval method returns a unique identifier for the interval, which can be used to cancel the interval using the clearInterval method. In this example, the interval is canceled after the count variable reaches 5.
//It runs a task at a specific interval. To stop further class, call clearInterval(timerId).The following example will show the message every 2 seconds. After 5 seconds, the output will stop.
let timerId1 = setInterval(() => console.log('tick'), 2000);
//stop after 5 seconds
setTimeout(() => { clearInterval(timerId1); console.log('stop'); }, 5000);

//Nested setTimeout: There are 2 ways of running something regularly like we said earlier and both of them can be used together to achieve the same result. The setTimeout method can be used to call a function after a specified number of milliseconds, and the setInterval method can be used to call a function repeatedly at a specified interval. Here's an example of using the setTimeout method to call a function repeatedly:
let count = 0;
function repeat() {
  console.log("Repeat log");
  count++;
  if (count < 5) {
    setTimeout(repeat, 1000);
  }
}
setTimeout(repeat, 1000);
//In this example, the repeat function logs a message to the console and increments the count variable. The setTimeout method is used to call the repeat function every 1000 milliseconds (1 second) until the count variable reaches 5. The setTimeout method is used to call the repeat function after 1000 milliseconds (1 second) to start the repetition.
let delay = 5000;
let timerId2 = setTimeout(function request() {
  //...send request...
  if (requestFailed) {
    delay *= 2;
  }
  timerId2 = setTimeout(request, delay);
}, delay);
//And if the functions that we are scheduling are cpu-hungry, we can measure the time taken by the execution and plan the next call sooner or later. Nested setTimeout allows to set the delay between the executions more precisely than setInterval. 

//ZERODELAY setTimeout: There is a special use case: setTimeout(func, 0), or just setTimeout(func). This schedules the execution of func as soon as possible. But the scheduler will invoke it only after the current code is complete. So the function is scheduled to run “right after” the current code. But if there’s any other code waiting, the scheduler will delay it, and run the scheduled function first. In other words, the scheduler will run the function as soon as it has an opportunity to do so, but not immediately. This can be used to split the work into pieces, so that the browser is able to react on user actions between them. For instance, we have a large piece of code to run, and we’d like to make the page responsive. We can split the work into pieces using setTimeout. This way the browser has a chance to react on user actions between the pieces. Here’s an example of how it can be done:
let i = 1;
setTimeout(function run() {
  console.log(i);
  if (i < 5) {
    setTimeout(run, 100);
  }
  i++;
}, 100);
//In this example, the run function logs the value of the i variable to the console and increments the i variable. The setTimeout method is used to call the run function every 100 milliseconds (0.1 second) until the i variable reaches 5. The setTimeout method is used to call the run function after 100 milliseconds (0.1 second) to start the repetition.
