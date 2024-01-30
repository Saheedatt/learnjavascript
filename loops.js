//Repititive tasks are done with looping...they are a way of repeating the same code over and over again
//"i" is mostly used as the counter in programming
//The "while" loop: The while loop loops through a block of code as long as a specified condition is true.
//The syntax is:
while (condition) {
  //code to be executed
  //so called "loop body"
}
//It will run as long as the condition returns true.However there is a start counter set outside of the while loop and the incrementing is done inside the loop's body e.g
let i = 1; //start counter
while (i < 5) {
  console.log(i);
  i = i + 1; //incrementing
}
// *Always Remember to update the counter value
//NOTE THAT if the i++/ i = i+1(increments) was missing from your code, the code will repeat forever.

//A shorter way to write while (i != 0) is while(i):
let j = 9;
while (j) {
  // when i becomes 0, the condition becomes falsy and the loop stops
  console.log(j);
  j--;
}

let count = 0;
while (count < 3) {
  console.log("Count is: " + count);
  count++;
}

//The "do...while" loop: The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
do{
  //code to be executed
  //so called "loop body"
}while(condition);
//For example:
let k = 0;
do{
  console.log(k);
  k++;
}while(k < 5);
//This form of syntax should oly be used when you want the body of the loop to execute at least once regardless of the condition being truthy. The while loop is usually preferred

//The FOR loop
/*The for loop is more complex but it is also the most commonly used loop.It's syntax is: */
for(begin; condition; step){
  //loop body...
}
//For example:
for (let i = 0; i<3; i++){
  console.log(i)
}
/*The loop can be broken down into 4 parts:
begin => i = 0; Executes once upo entering the loop
condition => i<3; Checked before every loop iteration. If false, the loop stops.
body => console.log(i) Runs again and again while the condition is truthy.
step -> i++ => Executes after the body on each iteration but before the condition check.
So basically, it is like this:
Run begin
-> if condition -> run body and run step
-> if condition -> run body and run step
-> if condition -> run body and run step
For loop is used to code a certain number of times. A counter must also be included here too.*/

//Nested loops: A loop inside another loop is called a nested loop. The inner loop will be executed one time for each iteration of the outer loop.
for(let m = 1; m<=7; i=m++){ //outer loop
  for(let l=1; l<=7;  l++){ //inner loop
    //body 
    console.log("Week " + m + " day " + l + " of the year")
  }
}
//The outer loop runs 7 times, and the inner loop runs 7 times for each outer loop iteration, so 7*7 = 49 times in total.
//The more nested loops there is, the slower your code
//Nested loops can be resource intensive

//break and continue
//break: The break statement is used to "jump out" of a loop.
//The break statement breaks the loop and continues executing the code after the loop (if any):
//For example:
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // exit the loop when i is 3
  }
  console.log(i);
}
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skip the rest of the loop body when i is 2
  }
  console.log(i);
}
/*
Use Cases:
break:
It is useful when you want to exit a loop prematurely based on a certain condition.
Example: Searching for an item in an array. Once found, you can break out of the loop.

continue:
It is useful when you want to skip certain iterations of a loop based on a condition.
Example: Skipping the processing of specific items in an array that meet a certain criteria.
Caution:
While break and continue can be powerful tools, excessive use can make code harder to understand. It's essential to use them judiciously and consider alternative approaches when possible.*/
//using break and continue together:
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skip iteration when i is 2
  }
  if (i === 4) {
    break; // exit the loop when i is 4
  }
  console.log(i);
}
