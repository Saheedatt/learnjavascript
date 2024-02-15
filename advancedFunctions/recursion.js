//Recursion is a programming concept where a function calls itself in order to solve a problem. Think about a russian doll(look it up online haha!). It's like a loop, but instead of using a for or while loop, the function keeps calling itself until a specific condition is met.

//Here's a simple example using JavaScript to calculate the factorial of a number:
function factorial(n) {
  // Base case: Stop the recursion when n is 0 or 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: Call the function with a smaller argument
    return n * factorial(n - 1);
  }
}

// Example:
const result = factorial(5);
console.log(result); // 120
/*In this example:
The factorial function takes a parameter n.
It checks if n is 0 or 1, which are the base cases. If so, it returns 1, stopping the recursion.
If n is greater than 1, the function calls itself with a smaller argument (n - 1) and multiplies the result by n.
This process repeats until the base case is reached.
Recursion is useful when a problem can be broken down into smaller subproblems of the same type. Understanding the base case and ensuring progress toward the base case is essential to prevent infinite recursion.*/
//More examples:
//1. Counting Down
function countdown(n) {
  if (n <= 0) {
    console.log("Blastoff!");
  } else {
    console.log(n);
    countdown(n - 1);
  }
}
countdown(5);

//Here, the countdown function starts from a given number and counts down to 1, printing each number along the way. The base case is when n is less than or equal to 0, at which point it prints "Blastoff!" and stops the recursion. It's like counting down to launch a rocket.

// 2. Sum of Numbers
function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}
const result1 = sum(4);
console.log(result1); //10

//Here, the sum function calculates the sum of numbers from 1 to n. It adds n to the sum of the numbers from 1 to n-1. The base case is when n is 1, returning 1. This is similar to adding up a series of consecutive numbers.

//Let's attempt explaining using real-life analogy: Stack of Plates
//Imagine you have a stack of plates, and you want to count how many plates are in the stack. Instead of directly counting each plate from the top, you can take one plate off the top and ask someone else to count the remaining plates. They, in turn, take one plate off the top and repeat the process until they reach the last plate. In this analogy, counting plates is similar to our recursive functions, where each function call is like taking one plate off the stack, and the base case is when there are no more plates (an empty stack). Recursion is like breaking down a bigger problem into smaller, more manageable pieces until you reach a simple case that can be easily solved. It's a powerful concept that helps solve complex problems in a concise and elegant way.




