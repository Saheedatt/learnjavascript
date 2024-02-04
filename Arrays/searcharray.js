//indexOf/lastIndexOf and includes:
//They have the same syntax and do essentially the same as their string counterparts but operate on items instead of characters. Syntax:
// arr.indexOf(item, from) //looks for items starting index "from" and returns the index where it was found, otherwise -1

// arr1.lastIndexOf(item, from) //same but looks from right to left
// arr2.includes(item, from) //looks for item starting from the given index and returns true if found.

let arr3 = [1, 0, false];
console.log(arr3.indexOf(0));
console.log(arr3.indexOf(false));
console.log(arr3.indexOf(null));
console.log(arr3.includes(1));

const sentence =
  "The quick brown fox jumps over the lazy dog. The dog barks, and the fox runs away.";

const wordToFind = "fox";

// Using indexOf to find the first occurrence of the word "fox"
const firstOccurrenceIndex = sentence.indexOf(wordToFind);

if (firstOccurrenceIndex !== -1) {
  console.log(
    `The first occurrence of "${wordToFind}" starts at index ${firstOccurrenceIndex}`
  );
} else {
  console.log(`"${wordToFind}" not found in the sentence.`);
}

// Using lastIndexOf to find the last occurrence of the word "fox"
const lastOccurrenceIndex = sentence.lastIndexOf(wordToFind);

if (lastOccurrenceIndex !== -1) {
  console.log(
    `The last occurrence of "${wordToFind}" starts at index ${lastOccurrenceIndex}`
  );
} else {
  console.log(`"${wordToFind}" not found in the sentence.`);
}

if (sentence.includes(wordToFind)) {
  console.log(`The sentence contains the word "${wordToFind}".`);
} else {
  console.log(`The word "${wordToFind}" is not found in the sentence.`);
}

//indexOf is used to find the first occurrence of the word "fox" in the sentence string.
//lastIndexOf is used to find the last occurrence of the word "fox" in the same string.
//includes method is employed to check if the sentence contains the word "fox". If the word is found, a message indicating its presence is logged; otherwise, a message stating that the word is not found is logged.

const sentence1 = "Hello, JavaScript is amazing. JavaScript is powerful.";

const searchTerm = "JavaScript";

// Using indexOf to find the first occurrence of "JavaScript"
const firstIndex = sentence1.indexOf(searchTerm);
console.log(
  `First occurrence of "${searchTerm}" starts at index ${firstIndex}`
);

// Using lastIndexOf to find the last occurrence of "JavaScript"
const lastIndex = sentence1.lastIndexOf(searchTerm);
console.log(`Last occurrence of "${searchTerm}" starts at index ${lastIndex}`);

// Using includes to check if "JavaScript" is present in the sentence
const includesCheck = sentence1.includes(searchTerm);
console.log(
  `Does the sentence include "${searchTerm}"? ${includesCheck ? "Yes" : "No"}`
);

//find and findIndex: To find an object with a specific condition in an array of objects.
//The syntax: let result = arr.find(function(item, index, array){
//if true is returned, item is returned and iteration is stopped

//for false, it returns undefined
//});
//The function is called for elements of the array, one after another:
// item is the element
//index is its index
//array is the array itself

let users = [
    { id: 1, name: "Jake" },
    { id: 2, name: "Kate" },
    { id: 3, name: "Jess" }
  ];
  
  let user = users.find(item => item.id === 1);
  console.log(user.name);

//Find method is useful in real life array of objects. findIndex returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.

const users1 = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 35 },
  ];
  
  // Using find to get the first user older than 30
  const olderThan30 = users1.find(user => user.age > 30);
  console.log("User older than 30:", olderThan30);
  
  // Using findIndex to get the index of the first user older than 30
  const indexOlderThan30 = users1.findIndex(user => user.age > 30);
  console.log("Index of the first user older than 30:", indexOlderThan30);
  

//filter method
//The find method looks for a single(first) element that makes the function return true. If there might be more than one of what we are looking for, we can use: arr.filter(). It is similar to find but filter returns an array of all matching element
//let results = arr.filter(function(item, index, array){
    //if true, item is pushed to results and the iteration continues
//})
//returns an empty array if nothing is found.
//Examples:
const users2 = [
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 22 },
    { id: 5, name: "Eva", age: 35 }
  ];

const usersOlderThan25 = users2.filter(user2 => user2.age > 25);

console.log("Users older than 25:", usersOlderThan25);

const numbers = [10, 25, 8, 15, 32, 7, 18];

// Using filter to get an array of numbers greater than 15
const numbersGreaterThan15 = numbers.filter(number => number > 15);

console.log("Numbers greater than 15:", numbersGreaterThan15);
