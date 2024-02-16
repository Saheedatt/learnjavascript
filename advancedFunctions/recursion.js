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

//Recursion is a programming pattern that is useful in situaations when a task can be naturally split into several kind, but simpler. Or whena task can be simplified into an easy action plus a simpler variant of the same task. Or, to deal with certain data structures. When a function solves a task, in the process, it can call many other functions. A partial case of this is when a function calls itself. That is called recursion.
//There are two ways of thinking. Write a function pow(x, n) that raises x to a natural power of nI.e multiply x by itself n times. There are two ways to implement it:
//1. Iterative thinking: Use a for loop:
function pow(x, n) {
  let result = 1;
  //multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 3)); //8

//2. Recursive thinking: simplify the task and call the same function with a simpler argument:
function pow1(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow1(x, n - 1);
  }
}
console.log(pow(2, 3)); //8

//See how the recursive function is fundamentally different?
//1. if n == 1, then everything is trivial. It is called the base of recursion, becuase it immediately produces the obvious result: pow(x, 1) equals x.
//2. Otherwise, we can represent pow(x, n) as x* pow(x, n-1). This is the key idea of recursion. We reduce the task, making it simpler, and call the same function pow with a simpler argument. This process is repeated until the base case is reached. It is the recurs. We can also say that pow recursively calls itself until n ==1.

function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1);
}
console.log(pow(3, 3)); //27

//The execution context and stack
//The recursion is a clever way to write algorithms, but sometimes it's not the best one. When a function makes a nested call, the following happens:
/*1.The current function is paused
2. The execution context associated with it is remembered in a special data structure called the execution context stack
3. The nested call executes.
4. After it ends, the old execution context is retrieved from the stack, and the outer function is resumed from where it stopped. */

//In JavaScript, a linked list is a data structure that consists of nodes, where each node contains a value and a reference to the next node in the sequence. Unlike arrays, linked lists do not have a fixed size, and their elements are not stored in contiguous memory locations. Each node is dynamically allocated, and they are connected through references. When discussing a linked list that uses recursion, we are typically referring to a recursive linked list, where the structure of the list is defined in terms of itself. Let's create a simple implementation of a singly linked list using recursion in JavaScript:
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a new node at the end of the list recursively
  insert(value, current = this.head) {
    if (!current) {
      this.head = new Node(value);
      return this.head;
    }

    if (!current.next) {
      current.next = new Node(value);
      return current.next;
    }

    return this.insert(value, current.next);
  }

  // Display the elements of the list recursively
  display(current = this.head) {
    if (!current) {
      console.log("Empty list");
      return;
    }

    console.log(current.value);

    if (current.next) {
      this.display(current.next);
    }
  }
}

// Example usage:
const myList = new LinkedList();
myList.insert(1);
myList.insert(2);
myList.insert(3);

myList.display();
//In this example, the LinkedList class has a method called insert for inserting a new node at the end of the list using recursion. The display method is also implemented recursively to print the elements of the list.
/*Here's a breakdown:

The Node class represents a node in the linked list, with a value property and a next property pointing to the next node.
The LinkedList class has a head property, which points to the first node in the list.
The insert method recursively inserts a new node at the end of the list.
The display method recursively displays the elements of the list.
Keep in mind that using recursion for certain operations on linked lists might not be the most efficient approach in practice due to the potential for stack overflow with large lists. In real-world scenarios, iterative solutions or tail-recursive optimizations might be more suitable.*/

//Recursive traversal
//Recursion is a natural fit for traversing tree-like data structures, such as binary trees. A binary tree is a data structure that consists of nodes, where each node has at most two child nodes, referred to as the left child and the right child. Let's create a simple implementation of a binary tree and traverse it using recursion in JavaScript:
class Node1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//Let's create an example object representing a company staff structure:
const company = {
  CEO: {
    name: "John",
    subordinates: {
      CTO: {
        name: "Alice",
        subordinates: {
          Developer1: { name: "Bob", subordinates: {} },
          Developer2: { name: "Charlie", subordinates: {} }
        }
      },
      CFO: {
        name: "Eve",
        subordinates: {
          Accountant1: { name: "Dave", subordinates: {} },
          Accountant2: { name: "Frank", subordinates: {} }
        }
      }
    }
  }
};
//In this example, the company object represents a hierarchical structure with the CEO having two direct subordinates (CTO and CFO), each of whom has their own subordinates. Now, let's create a recursive function to traverse and print the names of all employees in the company:
function traverseCompany(orgStructure, indentation = "") {
  for (const employee in orgStructure) {
    if (orgStructure.hasOwnProperty(employee)) {
      const employeeDetails = orgStructure[employee];
      console.log(indentation + employeeDetails.name);

      if (Object.keys(employeeDetails.subordinates).length > 0) {
        traverseCompany(employeeDetails.subordinates, indentation + "  ");
      }
    }
  }
}
traverseCompany(company);
//This traverseCompany function recursively traverses the staff structure, printing the names of employees at each level with proper indentation. It checks if an employee has subordinates and calls itself recursively for each subordinate.This recursive traversal approach is useful for navigating through hierarchical structures, such as organizational charts, file systems, or any tree-like data structures. It allows you to process each node and its subnodes in a systematic and organized manner.
